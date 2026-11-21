#!/usr/bin/env python3
"""Generate Adobe Swatch Exchange (.ase) and GIMP Palette (.gpl) files from tokens.json."""

import json
import struct
from pathlib import Path
from typing import List, Tuple

ROOT = Path(__file__).resolve().parent
TOKENS_PATH = ROOT / "tokens.json"
SWATCHES_DIR = ROOT / "swatches"


def hex_to_rgb(hex_str: str) -> Tuple[int, int, int]:
    cleaned = hex_str.strip().lstrip("#")
    if len(cleaned) != 6:
        raise ValueError(f"Expected 6-digit hex color, got {hex_str!r}")
    return int(cleaned[0:2], 16), int(cleaned[2:4], 16), int(cleaned[4:6], 16)


def load_swatches() -> List[Tuple[str, str]]:
    data = json.loads(TOKENS_PATH.read_text(encoding="utf-8"))
    color_group = data["color"]
    canonical_hex = color_group["iammenasco-blue"]["$value"]
    scale = color_group["iammenasco-blue-scale"]

    swatches: List[Tuple[str, str]] = [("iammenasco-blue", canonical_hex)]
    for key, val in scale.items():
        if key.startswith("$"):
            continue
        swatches.append((f"iammenasco-blue-{key}", val["$value"]))
    return swatches


def encode_ase_color_entry(name: str, hex_str: str, color_type: int = 0) -> bytes:
    """Encode a single ASE color block (0x0001). color_type: 0=Global, 1=Spot, 2=Normal."""
    r, g, b = hex_to_rgb(hex_str)
    name_utf16 = (name + "\x00").encode("utf-16-be")
    name_len_chars = len(name) + 1  # UTF-16 code units including null terminator

    payload = (
        struct.pack(">H", name_len_chars)
        + name_utf16
        + b"RGB "
        + struct.pack(">fff", r / 255.0, g / 255.0, b / 255.0)
        + struct.pack(">H", color_type)
    )
    return struct.pack(">HI", 0x0001, len(payload)) + payload


def encode_ase_group_start(name: str) -> bytes:
    name_utf16 = (name + "\x00").encode("utf-16-be")
    payload = struct.pack(">H", len(name) + 1) + name_utf16
    return struct.pack(">HI", 0xC001, len(payload)) + payload


def encode_ase_group_end() -> bytes:
    return struct.pack(">HI", 0xC002, 0)


def build_ase(swatches: List[Tuple[str, str]]) -> bytes:
    blocks = [encode_ase_group_start("iammenasco-blue")]
    for name, hex_str in swatches:
        blocks.append(encode_ase_color_entry(name, hex_str, color_type=0))
    blocks.append(encode_ase_group_end())

    header = b"ASEF" + struct.pack(">HHI", 1, 0, len(blocks))
    return header + b"".join(blocks)


def build_gpl(swatches: List[Tuple[str, str]]) -> str:
    lines = [
        "GIMP Palette",
        "Name: iammenasco-blue",
        "Columns: 4",
        "# Canonical #368dda and OKLCH-derived 50-950 scale",
    ]
    for name, hex_str in swatches:
        r, g, b = hex_to_rgb(hex_str)
        lines.append(f"{r:3d} {g:3d} {b:3d}\t{name} ({hex_str})")
    return "\n".join(lines) + "\n"


def main() -> None:
    swatches = load_swatches()
    SWATCHES_DIR.mkdir(parents=True, exist_ok=True)

    ase_path = SWATCHES_DIR / "iammenasco-blue.ase"
    ase_path.write_bytes(build_ase(swatches))

    gpl_path = SWATCHES_DIR / "iammenasco-blue.gpl"
    gpl_path.write_text(build_gpl(swatches), encoding="utf-8")

    print(f"Wrote {ase_path.relative_to(ROOT)} ({ase_path.stat().st_size} bytes, {len(swatches)} colors)")
    print(f"Wrote {gpl_path.relative_to(ROOT)} ({gpl_path.stat().st_size} bytes, {len(swatches)} colors)")


if __name__ == "__main__":
    main()
