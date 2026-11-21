export interface RgbColor {
  readonly r: 54;
  readonly g: 141;
  readonly b: 218;
}

export interface HslColor {
  readonly h: 208.17;
  readonly s: 68.91;
  readonly l: 53.33;
}

export interface HsvColor {
  readonly h: 208.17;
  readonly s: 75.23;
  readonly v: 85.49;
}

export interface CmykColor {
  readonly c: 75.23;
  readonly m: 35.32;
  readonly y: 0;
  readonly k: 14.51;
}

export interface OklabColor {
  readonly l: 0.628;
  readonly a: -0.0511;
  readonly b: -0.1329;
}

export interface OklchColor {
  readonly l: 0.628;
  readonly c: 0.1424;
  readonly h: 248.95;
}

export interface ColorScale {
  readonly 50: '#ebf5ff';
  readonly 100: '#d4e9fe';
  readonly 200: '#add4fb';
  readonly 300: '#81bbf4';
  readonly 400: '#58a2e9';
  readonly 500: '#368dda';
  readonly 600: '#1b74bc';
  readonly 700: '#0a5b98';
  readonly 800: '#094474';
  readonly 900: '#0b3254';
  readonly 950: '#061e34';
}

export interface WcagMetrics {
  readonly relativeLuminance: 0.24896;
  readonly contrastOnWhite: 3.51;
  readonly contrastOnBlack: 5.98;
  readonly contrastOnGithubDark: 5.39;
  readonly contrastOnGray900: 5.05;
}

export interface AnsiEscapes {
  readonly fg: '\x1b[38;2;54;141;218m';
  readonly bg: '\x1b[48;2;54;141;218m';
  readonly reset: '\x1b[0m';
}

export interface IammenascoBlue {
  readonly name: 'iammenasco-blue';
  readonly hex: '#368dda';
  readonly rgb: RgbColor;
  readonly rgbString: 'rgb(54, 141, 218)';
  readonly hsl: HslColor;
  readonly hslString: 'hsl(208.17deg 68.91% 53.33%)';
  readonly hsv: HsvColor;
  readonly cmyk: CmykColor;
  readonly oklab: OklabColor;
  readonly oklch: OklchColor;
  readonly oklchString: 'oklch(62.80% 0.1424 248.95)';
  readonly cssVar: '--color-iammenasco-blue';
  readonly cssAliasVar: '--iammenasco-blue';
  readonly scale: ColorScale;
  readonly wcag: WcagMetrics;
  readonly ansi: AnsiEscapes;
  toString(): '#368dda';
}

export declare const NAME: 'iammenasco-blue';
export declare const HEX: '#368dda';
export declare const RGB: RgbColor;
export declare const RGB_STRING: 'rgb(54, 141, 218)';
export declare const HSL: HslColor;
export declare const HSL_STRING: 'hsl(208.17deg 68.91% 53.33%)';
export declare const HSV: HsvColor;
export declare const CMYK: CmykColor;
export declare const OKLAB: OklabColor;
export declare const OKLCH: OklchColor;
export declare const OKLCH_STRING: 'oklch(62.80% 0.1424 248.95)';
export declare const CSS_VAR: '--color-iammenasco-blue';
export declare const CSS_ALIAS_VAR: '--iammenasco-blue';
export declare const SCALE: ColorScale;
export declare const WCAG: WcagMetrics;
export declare const ANSI: AnsiEscapes;

declare const iammenascoBlue: IammenascoBlue;
export default iammenascoBlue;
