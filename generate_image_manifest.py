import json
from pathlib import Path
from urllib.parse import quote


FRONTEND_DIR = Path(__file__).resolve().parent
ASSETS_DIR = FRONTEND_DIR / "assets"
OUTPUT_FILE = FRONTEND_DIR / "property-image-manifest.js"
IMAGE_EXTENSIONS = {".avif", ".bmp", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"}
FOLDER_CATEGORIES = {
    "apartment": "Apartment",
    "apartments": "Apartment",
    "flat": "Apartment",
    "flats": "Apartment",
    "house": "Independent House",
    "houses": "Independent House",
    "independent house": "Independent House",
    "independent houses": "Independent House",
    "villa": "Villa",
    "villas": "Villa",
    "plot": "Plot",
    "plots": "Plot",
    "studio": "Studio",
    "studios": "Studio",
    "pg": "PG & Rental",
    "rental": "PG & Rental",
    "rentals": "PG & Rental",
}


def asset_url(path):
    relative_path = path.relative_to(FRONTEND_DIR).as_posix()
    return quote(relative_path, safe="/-._~")


def main():
    property_types = {}
    inner_view = []
    unsupported = []

    for path in sorted(ASSETS_DIR.rglob("*"), key=lambda item: item.as_posix().casefold()):
        if not path.is_file():
            continue

        relative = path.relative_to(ASSETS_DIR)
        if path.suffix.lower() not in IMAGE_EXTENSIONS:
            if path.suffix and path.suffix.lower() not in {".txt", ".json", ".md"}:
                unsupported.append(relative.as_posix())
            continue

        if len(relative.parts) < 2:
            continue

        folder_name = relative.parts[0]
        if folder_name.casefold() == "inner view":
            inner_view.append(asset_url(path))
            continue

        category = FOLDER_CATEGORIES.get(folder_name.casefold(), folder_name.replace("_", " ").title())
        property_types.setdefault(category, []).append(asset_url(path))

    manifest = {
        "propertyTypes": dict(sorted(property_types.items(), key=lambda item: item[0].casefold())),
        "innerView": inner_view,
    }
    OUTPUT_FILE.write_text(
        "window.HOMEHUB_IMAGE_MANIFEST = "
        + json.dumps(manifest, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )

    print(f"Wrote {OUTPUT_FILE.name}")
    for category, paths in manifest["propertyTypes"].items():
        print(f"{category}: {len(paths)} image(s)")
    print(f"Inner view: {len(inner_view)} image(s)")
    if unsupported:
        print("Unsupported file extensions:")
        for path in unsupported:
            print(f"  {path}")


if __name__ == "__main__":
    main()
