import json
import os
import re
from contextlib import asynccontextmanager
from datetime import datetime, timedelta, timezone
from sqlite3 import Row
from typing import Any

import jwt
from fastapi import Cookie, Depends, FastAPI, HTTPException, Query, Response, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, field_validator
from pwdlib import PasswordHash

from database import get_connection, initialize_database


JWT_ALGORITHM = "HS256"
SESSION_COOKIE = "homehub_session"
SESSION_MINUTES = 30
password_hasher = PasswordHash.recommended()


@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize_database()
    bootstrap_admin()
    yield


app = FastAPI(
    title="HomeHub API",
    description="A simple starting point for the HomeHub backend.",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"https?://(localhost|127\.0\.0\.1)(:\d+)?",
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type"],
)


class UserCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: str = Field(pattern=r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
    password: str = Field(min_length=12, max_length=128)
    account_type: str = Field(pattern="^(buyer|seller|tenant)$")
    phone: str | None = Field(default=None, max_length=20)
    whatsapp_number: str | None = Field(default=None, max_length=20)


class LoginRequest(BaseModel):
    email: str = Field(pattern=r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
    password: str = Field(min_length=1, max_length=128)


class ProfileUpdate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str | None = Field(default=None, max_length=20)
    whatsapp_number: str | None = Field(default=None, max_length=20)
    email: str = Field(pattern=r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


class PasswordUpdate(BaseModel):
    current_password: str = Field(min_length=1, max_length=128)
    new_password: str = Field(min_length=12, max_length=128)


class InquiryCreate(BaseModel):
    property_id: int
    message: str = Field(min_length=8, max_length=2000)


class WishlistUpdate(BaseModel):
    property_id: int = Field(gt=0)
    saved: bool


class ListingUpdate(BaseModel):
    title: str = Field(min_length=3, max_length=120)
    price: float = Field(gt=0)
    description: str = Field(max_length=2000)


class ModerationUpdate(BaseModel):
    status: str = Field(pattern="^(Live|Rejected)$")


class ListingStatusUpdate(BaseModel):
    status: str = Field(pattern="^(Live|Sold/Rented)$")


class UserAdminUpdate(BaseModel):
    role: str = Field(pattern="^(user|admin)$")
    is_active: bool


class PropertyCreate(BaseModel):
    title: str
    property_type: str
    location: str
    price: float
    bedrooms: int
    bathrooms: int
    description: str = ""
    offer_type: str = "Sell"
    area_value: float | None = None
    area_unit: str = "sq. ft."
    area_sqft: float | None = None
    balconies: int = 0
    floor_number: int | None = None
    price_negotiable: bool = False
    furnishing: str | None = None
    owner_name: str | None = None
    phone: str | None = None
    whatsapp_number: str | None = None
    email: str | None = None
    photos: list[str] = Field(default_factory=list, max_length=5)

    @field_validator("photos")
    @classmethod
    def validate_photos(cls, photos: list[str]) -> list[str]:
        if any(not photo.startswith("data:image/") or len(photo) > 2_100_000 for photo in photos):
            raise ValueError("Photos must be image data URLs no larger than 1.5 MB each.")
        return photos


def get_signing_secret() -> str:
    secret = os.getenv("HOMEHUB_JWT_SECRET", "")
    if len(secret) < 32:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Authentication is not configured. Set HOMEHUB_JWT_SECRET to a random secret of at least 32 characters.",
        )
    return secret


def bootstrap_admin() -> None:
    email = os.getenv("HOMEHUB_ADMIN_EMAIL", "").strip().lower()
    password = os.getenv("HOMEHUB_ADMIN_PASSWORD", "")
    if not email and not password:
        return
    if not email or len(password) < 12:
        raise RuntimeError(
            "Admin bootstrap requires both HOMEHUB_ADMIN_EMAIL and HOMEHUB_ADMIN_PASSWORD (at least 12 characters)."
        )
    get_signing_secret()
    with get_connection() as connection:
        existing = connection.execute(
            "SELECT id, role FROM users WHERE email = ? COLLATE NOCASE", (email,)
        ).fetchone()
        if existing:
            if existing["role"] != "admin":
                raise RuntimeError(
                    "HOMEHUB_ADMIN_EMAIL is already registered as a regular user. Choose a different administrator email."
                )
            return
        connection.execute(
            """
            INSERT INTO users (name, email, password_hash, role, account_type)
            VALUES (?, ?, ?, 'admin', 'buyer')
            """,
            ("HomeHub administrator", email, password_hasher.hash(password)),
        )


def public_user(row: Row) -> dict[str, Any]:
    return {
        "id": row["id"],
        "name": row["name"],
        "email": row["email"],
        "role": row["role"],
        "account_type": row["account_type"],
        "phone": row["phone"],
        "whatsapp_number": row["whatsapp_number"],
        "is_active": bool(row["is_active"]),
        "created_at": row["created_at"],
    }


def create_session_token(user: Row) -> str:
    now = datetime.now(timezone.utc)
    return jwt.encode(
        {
            "sub": str(user["id"]),
            "role": user["role"],
            "ver": user["token_version"],
            "iat": now,
            "exp": now + timedelta(minutes=SESSION_MINUTES),
        },
        get_signing_secret(),
        algorithm=JWT_ALGORITHM,
    )


def set_session_cookie(response: Response, token: str) -> None:
    response.set_cookie(
        key=SESSION_COOKIE,
        value=token,
        max_age=SESSION_MINUTES * 60,
        httponly=True,
        secure=os.getenv("HOMEHUB_COOKIE_SECURE", "").lower() == "true",
        samesite="lax",
        path="/",
    )


def get_current_user(token: str | None = Cookie(default=None, alias=SESSION_COOKIE)) -> Row:
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Please log in.")
    try:
        claims = jwt.decode(token, get_signing_secret(), algorithms=[JWT_ALGORITHM])
        user_id = int(claims["sub"])
    except (jwt.InvalidTokenError, KeyError, TypeError, ValueError) as error:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Session expired. Please log in again.") from error
    with get_connection() as connection:
        user = connection.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
    if not user or not user["is_active"] or claims.get("ver") != user["token_version"]:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="This account session is no longer active.")
    return user


def require_admin(user: Row = Depends(get_current_user)) -> Row:
    if user["role"] != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Administrator access is required.")
    return user


def serialize_property(row: Row) -> dict[str, Any]:
    property_data = dict(row)
    property_data["price_negotiable"] = bool(property_data["price_negotiable"])
    property_data["photos"] = json.loads(property_data.pop("photos_json"))
    for private_field in ("owner_name", "phone", "whatsapp_number", "email"):
        property_data.pop(private_field, None)
    property_data.pop("user_id", None)
    return property_data


def serialize_admin_property(row: Row) -> dict[str, Any]:
    property_data = dict(row)
    property_data["price_negotiable"] = bool(property_data["price_negotiable"])
    property_data["photos"] = json.loads(property_data.pop("photos_json"))
    return property_data


def authenticate(email: str, password: str, allowed_role: str) -> Row:
    with get_connection() as connection:
        user = connection.execute(
            "SELECT * FROM users WHERE email = ? COLLATE NOCASE", (email.strip().lower(),)
        ).fetchone()
    if not user or not password_hasher.verify(password, user["password_hash"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Email or password is incorrect.")
    if not user["is_active"]:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="This account has been disabled.")
    if allowed_role == "admin" and user["role"] != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="This account is not an administrator.")
    if allowed_role == "user" and user["role"] == "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Use the administrator login.")
    return user


@app.post("/auth/register", status_code=status.HTTP_201_CREATED)
def register_user(user_data: UserCreate, response: Response):
    get_signing_secret()
    with get_connection() as connection:
        existing = connection.execute(
            "SELECT id FROM users WHERE email = ? COLLATE NOCASE",
            (user_data.email.strip().lower(),),
        ).fetchone()
        if existing:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="An account with this email already exists.")
        cursor = connection.execute(
            """
            INSERT INTO users (name, email, password_hash, account_type, phone, whatsapp_number)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (
                user_data.name.strip(),
                user_data.email.strip().lower(),
                password_hasher.hash(user_data.password),
                user_data.account_type,
                user_data.phone,
                user_data.whatsapp_number,
            ),
        )
        user = connection.execute("SELECT * FROM users WHERE id = ?", (cursor.lastrowid,)).fetchone()
    set_session_cookie(response, create_session_token(user))
    return {"user": public_user(user)}


@app.post("/auth/login")
def user_login(credentials: LoginRequest, response: Response):
    user = authenticate(credentials.email, credentials.password, "user")
    set_session_cookie(response, create_session_token(user))
    return {"user": public_user(user)}


@app.post("/auth/admin/login")
def admin_login(credentials: LoginRequest, response: Response):
    user = authenticate(credentials.email, credentials.password, "admin")
    set_session_cookie(response, create_session_token(user))
    return {"user": public_user(user)}


@app.post("/auth/logout")
def logout(response: Response):
    response.delete_cookie(
        key=SESSION_COOKIE,
        path="/",
        httponly=True,
        secure=os.getenv("HOMEHUB_COOKIE_SECURE", "").lower() == "true",
        samesite="lax",
    )
    return {"message": "Logged out."}


@app.get("/auth/me")
def get_session_user(user: Row = Depends(get_current_user)):
    return {"user": public_user(user)}


@app.patch("/users/me")
def update_profile(profile: ProfileUpdate, user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        duplicate = connection.execute(
            "SELECT id FROM users WHERE email = ? COLLATE NOCASE AND id != ?",
            (profile.email.strip().lower(), user["id"]),
        ).fetchone()
        if duplicate:
            raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="That email is already used by another account.")
        connection.execute(
            "UPDATE users SET name = ?, email = ?, phone = ?, whatsapp_number = ? WHERE id = ?",
            (profile.name.strip(), profile.email.strip().lower(), profile.phone, profile.whatsapp_number, user["id"]),
        )
        updated = connection.execute("SELECT * FROM users WHERE id = ?", (user["id"],)).fetchone()
    return {"user": public_user(updated)}


@app.post("/users/me/password")
def update_password(passwords: PasswordUpdate, response: Response, user: Row = Depends(get_current_user)):
    if not password_hasher.verify(passwords.current_password, user["password_hash"]):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Current password is incorrect.")
    with get_connection() as connection:
        connection.execute(
            "UPDATE users SET password_hash = ?, token_version = token_version + 1 WHERE id = ?",
            (password_hasher.hash(passwords.new_password), user["id"]),
        )
    response.delete_cookie(
        key=SESSION_COOKIE,
        path="/",
        httponly=True,
        secure=os.getenv("HOMEHUB_COOKIE_SECURE", "").lower() == "true",
        samesite="lax",
    )
    return {"message": "Password updated. Please sign in again."}


@app.get("/users/me/listings")
def get_my_listings(user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        rows = connection.execute(
            "SELECT * FROM properties WHERE user_id = ? ORDER BY id DESC", (user["id"],)
        ).fetchall()
    return [serialize_admin_property(row) for row in rows]


@app.patch("/users/me/listings/{property_id}")
def update_my_listing(property_id: int, listing: ListingUpdate, user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        cursor = connection.execute(
            """
            UPDATE properties SET title = ?, price = ?, description = ?
            WHERE id = ? AND user_id = ?
            """,
            (listing.title.strip(), listing.price, listing.description, property_id, user["id"]),
        )
        if not cursor.rowcount:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Property listing not found.")
        row = connection.execute("SELECT * FROM properties WHERE id = ?", (property_id,)).fetchone()
    return serialize_admin_property(row)


@app.patch("/users/me/listings/{property_id}/status")
def set_my_listing_status(property_id: int, status_data: ListingStatusUpdate, user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        cursor = connection.execute(
            "UPDATE properties SET status = ? WHERE id = ? AND user_id = ?",
            (status_data.status, property_id, user["id"]),
        )
        if not cursor.rowcount:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Property listing not found.")
        row = connection.execute("SELECT * FROM properties WHERE id = ?", (property_id,)).fetchone()
    return serialize_admin_property(row)


@app.delete("/users/me/listings/{property_id}")
def delete_my_listing(property_id: int, user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        cursor = connection.execute(
            "DELETE FROM properties WHERE id = ? AND user_id = ?", (property_id, user["id"])
        )
        if not cursor.rowcount:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Property listing not found.")
    return {"message": "Listing deleted."}


@app.post("/inquiries", status_code=status.HTTP_201_CREATED)
def create_inquiry(inquiry: InquiryCreate, user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        property_row = connection.execute(
            "SELECT id, user_id FROM properties WHERE id = ? AND status = 'Live'",
            (inquiry.property_id,),
        ).fetchone()
        if not property_row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Live property not found.")
        if property_row["user_id"] == user["id"]:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="You cannot inquire about your own listing.")
        cursor = connection.execute(
            "INSERT INTO inquiries (user_id, property_id, message) VALUES (?, ?, ?)",
            (user["id"], inquiry.property_id, inquiry.message.strip()),
        )
        row = connection.execute(
            "SELECT id, property_id, message, status, created_at FROM inquiries WHERE id = ?",
            (cursor.lastrowid,),
        ).fetchone()
    return dict(row)


@app.get("/users/me/inquiries")
def get_my_inquiries(user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT i.id, i.property_id, i.message, i.status, i.created_at, p.title, p.location
            FROM inquiries i JOIN properties p ON p.id = i.property_id
            WHERE i.user_id = ? ORDER BY i.id DESC
            """,
            (user["id"],),
        ).fetchall()
    return [dict(row) for row in rows]


@app.get("/users/me/wishlist")
def get_my_wishlist(user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT p.* FROM user_wishlist w
            JOIN properties p ON p.id = w.property_id
            WHERE w.user_id = ? AND p.status = 'Live'
            ORDER BY w.created_at DESC, p.id DESC
            """,
            (user["id"],),
        ).fetchall()
    return [serialize_property(row) for row in rows]


@app.post("/users/me/wishlist")
def update_my_wishlist(item: WishlistUpdate, user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        property_row = connection.execute(
            "SELECT * FROM properties WHERE id = ? AND status = 'Live'",
            (item.property_id,),
        ).fetchone()
        if not property_row:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Live property not found.")
        if item.saved:
            connection.execute(
                "INSERT INTO user_wishlist (user_id, property_id) VALUES (?, ?) ON CONFLICT DO NOTHING",
                (user["id"], item.property_id),
            )
        else:
            connection.execute(
                "DELETE FROM user_wishlist WHERE user_id = ? AND property_id = ?",
                (user["id"], item.property_id),
            )
    return {"saved": item.saved, "property_id": item.property_id}


@app.get("/admin/overview")
def get_admin_overview(_: Row = Depends(require_admin)):
    with get_connection() as connection:
        counts = connection.execute(
            """
            SELECT
              SUM(CASE WHEN status = 'Live' THEN 1 ELSE 0 END) AS active_listings,
              SUM(CASE WHEN status = 'Under Review' THEN 1 ELSE 0 END) AS pending_listings,
              (SELECT COUNT(*) FROM users WHERE role != 'admin') AS registered_users,
              (SELECT COUNT(*) FROM inquiries) AS inquiries
            FROM properties
            """
        ).fetchone()
    return {key: counts[key] or 0 for key in ("active_listings", "pending_listings", "registered_users", "inquiries")}


@app.get("/admin/listings")
def get_admin_listings(_: Row = Depends(require_admin)):
    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT p.*, u.name AS owner_account_name, u.email AS owner_account_email
            FROM properties p LEFT JOIN users u ON u.id = p.user_id
            ORDER BY CASE p.status WHEN 'Under Review' THEN 0 ELSE 1 END, p.id DESC
            """
        ).fetchall()
    return [serialize_admin_property(row) for row in rows]


@app.patch("/admin/listings/{property_id}/moderation")
def moderate_listing(property_id: int, moderation: ModerationUpdate, _: Row = Depends(require_admin)):
    with get_connection() as connection:
        cursor = connection.execute(
            "UPDATE properties SET status = ? WHERE id = ?",
            (moderation.status, property_id),
        )
        if not cursor.rowcount:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Property listing not found.")
        row = connection.execute("SELECT * FROM properties WHERE id = ?", (property_id,)).fetchone()
    return serialize_admin_property(row)


@app.get("/admin/users")
def get_admin_users(search: str = Query(default="", max_length=120), _: Row = Depends(require_admin)):
    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT * FROM users
            WHERE name LIKE ? OR email LIKE ?
            ORDER BY id DESC LIMIT 200
            """,
            (f"%{search}%", f"%{search}%"),
        ).fetchall()
    return [public_user(row) for row in rows]


@app.patch("/admin/users/{user_id}")
def update_admin_user(user_id: int, update: UserAdminUpdate, actor: Row = Depends(require_admin)):
    with get_connection() as connection:
        target = connection.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
        if not target:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found.")
        if target["id"] == actor["id"] and (not update.is_active or update.role != "admin"):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="You cannot disable or demote your own admin account.")
        if target["role"] == "admin" and (not update.is_active or update.role != "admin"):
            other_admin = connection.execute(
                "SELECT id FROM users WHERE role = 'admin' AND is_active = 1 AND id != ?",
                (target["id"],),
            ).fetchone()
            if not other_admin:
                raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="At least one active administrator must remain.")
        connection.execute(
            """
            UPDATE users SET role = ?, is_active = ?, token_version = token_version + 1
            WHERE id = ?
            """,
            (update.role, int(update.is_active), user_id),
        )
        updated = connection.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
    return public_user(updated)


@app.get("/admin/districts")
def get_district_analytics(_: Row = Depends(require_admin)):
    districts = {
        "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki",
        "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod",
    }
    with get_connection() as connection:
        rows = connection.execute(
            "SELECT location FROM properties WHERE status != 'Rejected'"
        ).fetchall()
    counts: dict[str, int] = {}
    for row in rows:
        location_parts = (row["location"] or "").rsplit(",", 1)
        district = location_parts[-1].strip() if len(location_parts) > 1 else "Unspecified"
        if district not in districts:
            district = "Other / outside Kerala"
        counts[district] = counts.get(district, 0) + 1
    return [{"district": district, "listings": count} for district, count in sorted(counts.items())]


@app.get("/admin/inquiries")
def get_admin_inquiries(_: Row = Depends(require_admin)):
    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT i.id, i.message, i.status, i.created_at, p.title AS property_title,
                   u.name AS user_name, u.email AS user_email
            FROM inquiries i
            JOIN properties p ON p.id = i.property_id
            JOIN users u ON u.id = i.user_id
            ORDER BY i.id DESC LIMIT 500
            """
        ).fetchall()
    return [dict(row) for row in rows]


@app.get("/")
def read_root():
    return {"message": "Welcome to the HomeHub API"}


@app.get("/properties")
def get_properties():
    with get_connection() as connection:
        rows = connection.execute(
            "SELECT * FROM properties WHERE status = 'Live' ORDER BY id"
        ).fetchall()
        return [serialize_property(row) for row in rows]


@app.get("/properties/{property_id}")
def get_property(property_id: int):
    with get_connection() as connection:
        connection.execute(
            "UPDATE properties SET views = views + 1 WHERE id = ? AND status = 'Live'",
            (property_id,),
        )
        row = connection.execute(
            "SELECT * FROM properties WHERE id = ? AND status = 'Live'",
            (property_id,),
        ).fetchone()
    if not row:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Live property not found.")
    return serialize_property(row)


@app.post("/properties", status_code=status.HTTP_201_CREATED)
def add_property(property_data: PropertyCreate, user: Row = Depends(get_current_user)):
    with get_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO properties (
                title, property_type, location, price,
                bedrooms, bathrooms, description, offer_type, area_value, area_unit,
                area_sqft, balconies, floor_number, price_negotiable, furnishing,
                owner_name, phone, whatsapp_number, email, photos_json, user_id, status
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                property_data.title,
                property_data.property_type,
                property_data.location,
                property_data.price,
                property_data.bedrooms,
                property_data.bathrooms,
                property_data.description,
                property_data.offer_type,
                property_data.area_value,
                property_data.area_unit,
                property_data.area_sqft,
                property_data.balconies,
                property_data.floor_number,
                int(property_data.price_negotiable),
                property_data.furnishing,
                user["name"],
                user["phone"] or property_data.phone,
                property_data.whatsapp_number,
                user["email"],
                json.dumps(property_data.photos),
                user["id"],
                "Under Review",
            ),
        )
        row = connection.execute(
            "SELECT * FROM properties WHERE id = ?",
            (cursor.lastrowid,),
        ).fetchone()
        return serialize_property(row)
