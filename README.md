# [iammenasco-blue](https://iammenasco.github.io/iammenasco-blue/)

[![CI](https://github.com/iammenasco/iammenasco-blue/actions/workflows/ci.yml/badge.svg)](https://github.com/iammenasco/iammenasco-blue/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/iammenasco-blue?color=368dda)](https://www.npmjs.com/package/iammenasco-blue)
[![PyPI version](https://img.shields.io/pypi/v/iammenasco-blue?color=368dda)](https://pypi.org/project/iammenasco-blue/)
[![GitHub release](https://img.shields.io/github/v/release/iammenasco/iammenasco-blue?color=368dda)](https://github.com/iammenasco/iammenasco-blue/releases)
[![License: MIT](https://img.shields.io/badge/license-MIT-368dda)](LICENSE)

> **Canonical Hex:** `#368dda` &middot; **Specimen:** [iammenasco.github.io/iammenasco-blue](https://iammenasco.github.io/iammenasco-blue/) &middot; **Poetry:** [haiku.md](haiku.md) &middot; **Registry:** [colornames.org/color/368dda](https://colornames.org/color/368dda)

`iammenasco-blue` (`#368dda`) is the shade of blue used across Brian Menasco's side projects—now packaged with the completely unnecessary rigor of an enterprise design system.

---

## Color Specification

| Color Space | Canonical Value |
| --- | --- |
| **Hex** | `#368dda` |
| **sRGB (8-bit)** | `rgb(54, 141, 218)` |
| **HSL** | `hsl(208.17deg 68.91% 53.33%)` |
| **HSV / HSB** | `hsv(208.17deg 75.23% 85.49%)` |
| **CMYK** | `cmyk(75.23%, 35.32%, 0%, 14.51%)` |
| **CIE XYZ (D65)** | `23.70, 24.89, 69.87` |
| **CIE Lab (D65)** | `56.97, 0.16, -46.70` |
| **OKLab** | `oklab(0.6280 -0.0511 -0.1329)` |
| **OKLCH** | `oklch(62.80% 0.1424 248.95)` |
| **Relative Luminance** | `0.248960` |

### OKLCH Tonal Scale (`50`–`950`)

Anchored at `500 = #368dda` with constant OKLCH hue `248.95°`:

| Stop | `50` | `100` | `200` | `300` | `400` | **`500`** | `600` | `700` | `800` | `900` | `950` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hex | `#ebf5ff` | `#d4e9fe` | `#add4fb` | `#81bbf4` | `#58a2e9` | **`#368dda`** | `#1b74bc` | `#0a5b98` | `#094474` | `#0b3254` | `#061e34` |

---

## WCAG 2.1 Contrast Matrix

| Comparison Surface | Ratio | AA Large (`>= 3.0`) | AA Normal (`>= 4.5`) | AAA Normal (`>= 7.0`) |
| --- | --- | --- | --- | --- |
| Pure White (`#ffffff`) | `3.51:1` | Pass | Fail | Fail |
| Slate 50 (`#f8fafc`) | `3.36:1` | Pass | Fail | Fail |
| Zinc 900 (`#18181b`) | `5.04:1` | Pass | Pass | Fail |
| Gray 900 (`#111827`) | `5.05:1` | Pass | Pass | Fail |
| GitHub Dark (`#0d1117`) | `5.39:1` | Pass | Pass | Fail |
| Pure Black (`#000000`) | `5.98:1` | Pass | Pass | Fail |

> Tip: `#368dda` passes WCAG AA for normal text on dark UI surfaces (`#18181b` and darker) and passes WCAG AA for large/bold text (`>= 18pt` or `>= 14pt bold`) on pure white.

---

## Usage Across Ecosystems

### 1. CSS & jsDelivr CDN (Zero Build)

```css
@import url("https://cdn.jsdelivr.net/gh/iammenasco/iammenasco-blue@master/css/iammenasco-blue.min.css");

.my-button {
  background-color: var(--color-iammenasco-blue); /* or var(--iammenasco-blue) */
}
```

Also exposes utility classes `.iammenasco-blue`, `.text-iammenasco-blue`, `.bg-iammenasco-blue`, and `.border-iammenasco-blue`.

For an optional zero-JS surface/theme contract (`prefers-color-scheme: light/dark`, `[data-theme]` overrides, `--ib-*` surface/primary/focus/border tokens, and `.card` / `.pill` / `.badge` utilities):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iammenasco/iammenasco-blue@master/css/surfaces.min.css" />
```

### 2. npm / JavaScript / TypeScript / CLI

```sh
npm install iammenasco-blue
npx iammenasco-blue
```

```ts
import blue, { HEX, RGB, OKLCH_STRING, SCALE, ANSI } from 'iammenasco-blue';
// or CommonJS: const blue = require('iammenasco-blue');
```

CSS imports from `node_modules`:

```css
@import "iammenasco-blue/css";
@import "iammenasco-blue/theme.css";    /* light/dark tokens only */
@import "iammenasco-blue/surfaces.css"; /* tokens + .card / .pill / .badge utilities */
```

### 3. Tailwind CSS Preset

```js
// tailwind.config.js
module.exports = {
  presets: [require('iammenasco-blue/tailwind')],
};
```

Provides `bg-iammenasco-blue`, `text-iammenasco-blue`, `iammenasco-blue-50` through `iammenasco-blue-950`, and `bg-iammenasco-blue` / `text-iammenasco-blue` aliases.

### 4. W3C Design Tokens (`tokens.json`)

[`tokens.json`](tokens.json) follows the W3C Design Tokens Community Group format (`$value`, `$type`, `$description`, `$extensions`) for Figma Tokens / Style Dictionary pipelines.

### 5. Python & Terminal ANSI

```sh
pip install iammenasco-blue
```

```python
from iammenasco_blue import HEX, RGB, OKLCH, colorize, contrast_ratio

print(colorize("hello from #368dda", bold=True))
print(contrast_ratio("#0d1117"))  # 5.39
```

Terminal swatch preview:

```sh
python3 -m iammenasco_blue
```

### 6. Adobe & GIMP / Inkscape / Krita Swatches

Pre-built swatches live in [`swatches/`](swatches) and on the [Releases page](https://github.com/iammenasco/iammenasco-blue/releases):
- [`swatches/iammenasco-blue.ase`](swatches/iammenasco-blue.ase) — Adobe Swatch Exchange (Photoshop, Illustrator, InDesign)
- [`swatches/iammenasco-blue.gpl`](swatches/iammenasco-blue.gpl) — GIMP Palette (GIMP, Inkscape, Krita)

Regenerate from `tokens.json` with:

```sh
python3 build_swatches.py
```

### 7. Legacy Preprocessors

- **Sass:** `@import "iammenasco-blue/sass/iammenasco-blue.sass";` -> `$color-iammenasco-blue`
- **Less:** `@import "iammenasco-blue/less/iammenasco-blue.less";` -> `@color-iammenasco-blue`
- **Stylus:** `@import "iammenasco-blue/stylus/iammenasco-blue.styl"` -> `$color-iammenasco-blue`
