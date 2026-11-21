export const NAME = 'iammenasco-blue';
export const HEX = '#368dda';
export const RGB = Object.freeze({ r: 54, g: 141, b: 218 });
export const RGB_STRING = 'rgb(54, 141, 218)';
export const HSL = Object.freeze({ h: 208.17, s: 68.91, l: 53.33 });
export const HSL_STRING = 'hsl(208.17deg 68.91% 53.33%)';
export const HSV = Object.freeze({ h: 208.17, s: 75.23, v: 85.49 });
export const CMYK = Object.freeze({ c: 75.23, m: 35.32, y: 0, k: 14.51 });
export const OKLAB = Object.freeze({ l: 0.628, a: -0.0511, b: -0.1329 });
export const OKLCH = Object.freeze({ l: 0.628, c: 0.1424, h: 248.95 });
export const OKLCH_STRING = 'oklch(62.80% 0.1424 248.95)';
export const CSS_VAR = '--color-iammenasco-blue';
export const CSS_ALIAS_VAR = '--iammenasco-blue';

export const SCALE = Object.freeze({
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

export const WCAG = Object.freeze({
  relativeLuminance: 0.24896,
  contrastOnWhite: 3.51,
  contrastOnBlack: 5.98,
  contrastOnGithubDark: 5.39,
  contrastOnGray900: 5.05,
});

export const ANSI = Object.freeze({
  fg: '\x1b[38;2;54;141;218m',
  bg: '\x1b[48;2;54;141;218m',
  reset: '\x1b[0m',
});

const iammenascoBlue = Object.freeze({
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
  toString() {
    return HEX;
  },
});

export default iammenascoBlue;
