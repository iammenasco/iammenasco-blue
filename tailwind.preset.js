'use strict';

const { HEX, SCALE } = require('./index');

/**
 * Tailwind CSS preset for iammenasco-blue (#368dda).
 *
 * Usage in tailwind.config.js:
 *   presets: [require('iammenasco-blue/tailwind')]
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        'iammenasco-blue': {
          DEFAULT: HEX,
          ...SCALE,
        },
        iammenasco: {
          blue: HEX,
        },
      },
    },
  },
};
