"""CLI entry point for `python -m iammenasco_blue`."""

from . import (
    ANSI_BG,
    ANSI_RESET,
    CMYK,
    CSS_VAR,
    HEX,
    HSL_STRING,
    NAME,
    OKLCH_STRING,
    RGB_STRING,
    colorize,
    contrast_ratio,
)


def main() -> None:
    block = f"{ANSI_BG}                {ANSI_RESET}"
    print()
    print(f"  {block}  {colorize(NAME, bold=True)}  ({HEX})")
    print(f"  {block}  sRGB:  {RGB_STRING}")
    print(f"  {block}  HSL:   {HSL_STRING}")
    print(f"  {block}  OKLCH: {OKLCH_STRING}")
    print(f"  {block}  CMYK:  {CMYK[0]:.0f}%, {CMYK[1]:.0f}%, {CMYK[2]:.0f}%, {CMYK[3]:.0f}%")
    print(f"  {block}  CSS:   var({CSS_VAR})")
    print(
        f"  {block}  WCAG:  {contrast_ratio('#ffffff')}:1 on #ffffff  |  "
        f"{contrast_ratio('#000000')}:1 on #000000"
    )
    print()


if __name__ == "__main__":
    main()
