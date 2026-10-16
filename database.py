import sqlite3
from contextlib import contextmanager
import os
from pathlib import Path


DATABASE_PATH = Path(os.getenv("HOMEHUB_DATABASE_PATH", Path(__file__).with_name("homehub.db")))


@contextmanager
def get_connection():
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row

    try:
        yield connection
        connection.commit()
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


def initialize_database():
    with get_connection() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS properties (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                property_type TEXT NOT NULL,
                location TEXT NOT NULL,
                price REAL NOT NULL,
                bedrooms INTEGER NOT NULL,
                bathrooms INTEGER NOT NULL,
                description TEXT NOT NULL,
                offer_type TEXT NOT NULL DEFAULT 'Sell',
                area_value REAL,
                area_unit TEXT NOT NULL DEFAULT 'sq. ft.',
                area_sqft REAL,
                balconies INTEGER NOT NULL DEFAULT 0,
                floor_number INTEGER,
                price_negotiable INTEGER NOT NULL DEFAULT 0,
                furnishing TEXT,
                owner_name TEXT,
                phone TEXT,
                whatsapp_number TEXT,
                email TEXT,
                photos_json TEXT NOT NULL DEFAULT '[]',
                user_id INTEGER REFERENCES users(id),
                status TEXT NOT NULL DEFAULT 'Under Review',
                views INTEGER NOT NULL DEFAULT 0
            )
            """
        )
        existing_columns = {
            row["name"] for row in connection.execute("PRAGMA table_info(properties)")
        }
        new_columns = {
            "offer_type": "TEXT NOT NULL DEFAULT 'Sell'",
            "area_value": "REAL",
            "area_unit": "TEXT NOT NULL DEFAULT 'sq. ft.'",
            "area_sqft": "REAL",
            "balconies": "INTEGER NOT NULL DEFAULT 0",
            "floor_number": "INTEGER",
            "price_negotiable": "INTEGER NOT NULL DEFAULT 0",
            "furnishing": "TEXT",
            "owner_name": "TEXT",
            "phone": "TEXT",
            "whatsapp_number": "TEXT",
            "email": "TEXT",
            "photos_json": "TEXT NOT NULL DEFAULT '[]'",
            "user_id": "INTEGER REFERENCES users(id)",
            "status": "TEXT NOT NULL DEFAULT 'Live'",
            "views": "INTEGER NOT NULL DEFAULT 0",
        }
        for name, definition in new_columns.items():
            if name not in existing_columns:
                connection.execute(f"ALTER TABLE properties ADD COLUMN {name} {definition}")
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE COLLATE NOCASE,
                password_hash TEXT NOT NULL,
                role TEXT NOT NULL DEFAULT 'user',
                account_type TEXT NOT NULL DEFAULT 'buyer',
                phone TEXT,
                whatsapp_number TEXT,
                is_active INTEGER NOT NULL DEFAULT 1,
                token_version INTEGER NOT NULL DEFAULT 0,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS inquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL REFERENCES users(id),
                property_id INTEGER NOT NULL REFERENCES properties(id),
                message TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'New',
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS user_wishlist (
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                property_id INTEGER NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (user_id, property_id)
            )
            """
        )
        connection.execute("CREATE INDEX IF NOT EXISTS idx_properties_user_id ON properties(user_id)")
        connection.execute("CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status)")
        connection.execute("CREATE INDEX IF NOT EXISTS idx_inquiries_user_id ON inquiries(user_id)")
