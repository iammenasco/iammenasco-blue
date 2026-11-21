'use strict';

const NAME = 'iammenasco-blue';
const HEX = '#368dda';
const RGB = Object.freeze({ r: 54, g: 141, b: 218 });
const RGB_STRING = 'rgb(54, 141, 218)';
const HSL = Object.freeze({ h: 208.17, s: 68.91, l: 53.33 });
const HSL_STRING = 'hsl(208.17deg 68.91% 53.33%)';
const HSV = Object.freeze({ h: 208.17, s: 75.23, v: 85.49 });
const CMYK = Object.freeze({ c: 75.23, m: 35.32, y: 0, k: 14.51 });
const OKLAB = Object.freeze({ l: 0.628, a: -0.0511, b: -0.1329 });
const OKLCH = Object.freeze({ l: 0.628, c: 0.1424, h: 248.95 });
const OKLCH_STRING = 'oklch(62.80% 0.1424 248.95)';
const CSS_VAR = '--color-iammenasco-blue';
const CSS_ALIAS_VAR = '--iammenasco-blue';

const SCALE = Object.freeze({
  50: '#ebf5ff',
  100: '#d4e9fe',
  200: '#add4fb',
  300: '#81bbf4',
  400: '#58a2e9',
  500: '#368dda',
  600: '#1b74bc',
  700: '#0a5b98',
  800: '#094474',
  900: '#0b3254',
  950: '#061e34',
});

const WCAG = Object.freeze({
  relativeLuminance: 0.24896,
  contrastOnWhite: 3.51,
  contrastOnBlack: 5.98,
  contrastOnGithubDark: 5.39,
  contrastOnGray900: 5.05,
});

const ANSI = Object.freeze({
  fg: '\x1b[38;2;54;141;218m',
  bg: '\x1b[48;2;54;141;218m',
  reset: '\x1b[0m',
});

const iammenascoBlue = {
  name: NAME,
  hex: HEX,
  rgb: RGB,
  rgbString: RGB_STRING,
  hsl: HSL,
  hslString: HSL_STRING,
  hsv: HSV,
  cmyk: CMYK,
  oklab: OKLAB,
  oklch: OKLCH,
  oklchString: OKLCH_STRING,
  cssVar: CSS_VAR,
  cssAliasVar: CSS_ALIAS_VAR,
  scale: SCALE,
  wcag: WCAG,
  ansi: ANSI,
};

Object.defineProperties(iammenascoBlue, {
  NAME: { value: NAME },
  HEX: { value: HEX },
  RGB: { value: RGB },
  RGB_STRING: { value: RGB_STRING },
  HSL: { value: HSL },
  HSL_STRING: { value: HSL_STRING },
  HSV: { value: HSV },
  CMYK: { value: CMYK },
  OKLAB: { value: OKLAB },
  OKLCH: { value: OKLCH },
  OKLCH_STRING: { value: OKLCH_STRING },
  CSS_VAR: { value: CSS_VAR },
  CSS_ALIAS_VAR: { value: CSS_ALIAS_VAR },
  SCALE: { value: SCALE },
  WCAG: { value: WCAG },
  ANSI: { value: ANSI },
  default: { value: iammenascoBlue },
  toString: {
    value() {
      return HEX;
    },
  },
});

module.exports = Object.freeze(iammenascoBlue);
