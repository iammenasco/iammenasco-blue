"""Canonical iammenasco-blue (#368dda) constants, WCAG utilities, and ANSI terminal helpers."""

from typing import Any, Dict, Tuple

NAME = "iammenasco-blue"
HEX = "#368dda"
RGB: Tuple[int, int, int] = (54, 141, 218)
RGB_STRING = "rgb(54, 141, 218)"
HSL: Tuple[float, float, float] = (208.17, 68.91, 53.33)
HSL_STRING = "hsl(208.17deg 68.91% 53.33%)"
HSV: Tuple[float, float, float] = (208.17, 75.23, 85.49)
CMYK: Tuple[float, float, float, float] = (75.23, 35.32, 0.0, 14.51)
OKLAB: Tuple[float, float, float] = (0.628, -0.0511, -0.1329)
OKLCH: Tuple[float, float, float] = (0.628, 0.1424, 248.95)
OKLCH_STRING = "oklch(62.80% 0.1424 248.95)"
CSS_VAR = "--color-iammenasco-blue"
CSS_ALIAS_VAR = "--iammenasco-blue"

SCALE: Dict[int, str] = {
    50: "#ebf5ff",
    100: "#d4e9fe",
    200: "#add4fb",
    300: "#81bbf4",
    400: "#58a2e9",
    500: "#368dda",
    600: "#1b74bc",
    700: "#0a5b98",
    800: "#094474",
    900: "#0b3254",
    950: "#061e34",
}

LUMINANCE = 0.248960

ANSI_FG = "\x1b[38;2;54;141;218m"
ANSI_BG = "\x1b[48;2;54;141;218m"
ANSI_BOLD = "\x1b[1m"
ANSI_RESET = "\x1b[0m"


def _srgb_to_linear(channel: int) -> float:
    u = channel / 255.0
    return u / 12.92 if u <= 0.04045 else ((u + 0.055) / 1.055) ** 2.4


def relative_luminance(hex_color: str) -> float:
    """Compute WCAG 2.1 relative luminance for a 6-digit hex color string."""
    cleaned = hex_color.strip().lstrip("#")
    if len(cleaned) == 3:
        cleaned = "".join(ch * 2 for ch in cleaned)
    if len(cleaned) != 6:
        raise ValueError(f"Expected 3- or 6-digit hex color, got {hex_color!r}")
    r = int(cleaned[0:2], 16)
    g = int(cleaned[2:4], 16)
    b = int(cleaned[4:6], 16)
    return 0.2126 * _srgb_to_linear(r) + 0.7152 * _srgb_to_linear(g) + 0.0722 * _srgb_to_linear(b)


def contrast_ratio(other_hex: str) -> float:
    """Return the WCAG 2.1 contrast ratio between #368dda and another hex color."""
    other_lum = relative_luminance(other_hex)
    hi = max(LUMINANCE, other_lum)
    lo = min(LUMINANCE, other_lum)
    return round((hi + 0.05) / (lo + 0.05), 2)


def colorize(text: str, *, bg: bool = False, bold: bool = False) -> str:
    """Wrap text in 24-bit ANSI escape sequences for #368dda."""
    prefix = ANSI_BG if bg else ANSI_FG
    if bold:
        prefix = f"{ANSI_BOLD}{prefix}"
    return f"{prefix}{text}{ANSI_RESET}"


def to_dict() -> Dict[str, Any]:
    """Return a JSON-serializable summary of iammenasco-blue."""
    return {
        "name": NAME,
        "hex": HEX,
        "rgb": {"r": RGB[0], "g": RGB[1], "b": RGB[2]},
        "hsl": {"h": HSL[0], "s": HSL[1], "l": HSL[2]},
        "hsv": {"h": HSV[0], "s": HSV[1], "v": HSV[2]},
        "cmyk": {"c": CMYK[0], "m": CMYK[1], "y": CMYK[2], "k": CMYK[3]},
        "oklab": {"l": OKLAB[0], "a": OKLAB[1], "b": OKLAB[2]},
        "oklch": {"l": OKLCH[0], "c": OKLCH[1], "h": OKLCH[2]},
        "css_var": CSS_VAR,
        "luminance": LUMINANCE,
        "scale": dict(SCALE),
    }


__all__ = [
    "ANSI_BG",
    "ANSI_BOLD",
    "ANSI_FG",
    "ANSI_RESET",
    "CMYK",
    "CSS_ALIAS_VAR",
    "CSS_VAR",
    "HEX",
    "HSL",
    "HSL_STRING",
    "HSV",
    "LUMINANCE",
    "NAME",
    "OKLAB",
    "OKLCH",
    "OKLCH_STRING",
    "RGB",
    "RGB_STRING",
    "SCALE",
    "colorize",
    "contrast_ratio",
    "relative_luminance",
    "to_dict",
]
