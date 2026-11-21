#!/usr/bin/env node
'use strict';

const blue = require('../index');

const args = new Set(process.argv.slice(2));

if (args.has('--help') || args.has('-h')) {
  console.log([
    'Usage: iammenasco-blue [options]',
    '',
    'Options:',
    '  --hex    Print canonical hex (#368dda)',
    '  --css    Print CSS custom property reference',
    '  --json   Print full color specification as JSON',
    '  -h, --help  Show help',
  ].join('\n'));
  process.exit(0);
}

if (args.has('--hex')) {
  console.log(blue.HEX);
  process.exit(0);
}

if (args.has('--css')) {
  console.log(`var(${blue.CSS_VAR})`);
  process.exit(0);
}

if (args.has('--json')) {
  console.log(JSON.stringify(blue, null, 2));
  process.exit(0);
}

const block = `${blue.ANSI.bg}                ${blue.ANSI.reset}`;
const bold = '\x1b[1m';
const lines = [
  '',
  `  ${block}  ${bold}${blue.ANSI.fg}${blue.name}${blue.ANSI.reset}  (${blue.hex})`,
  `  ${block}  sRGB:  ${blue.rgbString}`,
  `  ${block}  HSL:   ${blue.hslString}`,
  `  ${block}  OKLCH: ${blue.oklchString}`,
  `  ${block}  CMYK:  75%, 35%, 0%, 15%`,
  `  ${block}  CSS:   var(${blue.cssVar})`,
  `  ${block}  WCAG:  ${blue.wcag.contrastOnWhite}:1 on #ffffff  |  ${blue.wcag.contrastOnBlack}:1 on #000000`,
  '',
];

console.log(lines.join('\n'));
