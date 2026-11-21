import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const require = createRequire(import.meta.url);

const cjs = require(path.join(root, 'index.js'));
const esm = await import(path.join(root, 'index.mjs'));
const tailwindPreset = require(path.join(root, 'tailwind.preset.js'));
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'tokens.json'), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

test('CJS and ESM exports match tokens.json', () => {
  const tokenColor = tokens.color['iammenasco-blue'];
  const ext = tokenColor.$extensions['org.iammenasco.color'];

  assert.equal(cjs.HEX, '#368dda');
  assert.equal(esm.HEX, '#368dda');
  assert.equal(tokenColor.$value, '#368dda');
  assert.equal(String(cjs), '#368dda');
  assert.equal(String(esm.default), '#368dda');

  assert.deepEqual(cjs.RGB, ext.rgb);
  assert.deepEqual(esm.RGB, ext.rgb);
  assert.deepEqual(cjs.HSL, ext.hsl);
  assert.deepEqual(esm.HSL, ext.hsl);
  assert.deepEqual(cjs.OKLCH, ext.oklch);
  assert.deepEqual(esm.OKLCH, ext.oklch);
  assert.deepEqual(cjs.WCAG, ext.wcag);
  assert.deepEqual(esm.WCAG, ext.wcag);

  for (const [stop, entry] of Object.entries(tokens.color['iammenasco-blue-scale'])) {
    if (stop.startsWith('$')) continue;
    assert.equal(cjs.SCALE[stop], entry.$value);
    assert.equal(esm.SCALE[stop], entry.$value);
  }
  assert.equal(cjs.SCALE[500], '#368dda');
});

test('Tailwind preset exposes canonical color and scale', () => {
  const colors = tailwindPreset.theme.extend.colors;
  assert.equal(colors['iammenasco-blue'].DEFAULT, '#368dda');
  assert.equal(colors['iammenasco-blue'][500], '#368dda');
  assert.equal(colors.iammenasco.blue, '#368dda');
  for (const [stop, hex] of Object.entries(cjs.SCALE)) {
    assert.equal(colors['iammenasco-blue'][stop], hex);
  }
});

test('CSS and legacy preprocessor files contain #368dda', () => {
  const files = [
    'css/iammenasco-blue.css',
    'css/iammenasco-blue.min.css',
    'sass/iammenasco-blue.sass',
    'less/iammenasco-blue.less',
    'stylus/iammenasco-blue.styl',
  ];
  for (const rel of files) {
    const content = fs.readFileSync(path.join(root, rel), 'utf8');
    assert.ok(content.includes('#368dda'), `${rel} missing #368dda`);
  }
  const css = fs.readFileSync(path.join(root, 'css/iammenasco-blue.css'), 'utf8');
  assert.ok(css.includes('--color-iammenasco-blue: #368dda;'));
  assert.ok(css.includes('--iammenasco-blue: #368dda;'));
});

test('package.json entry points exist on disk', () => {
  assert.ok(fs.existsSync(path.join(root, pkg.main)));
  assert.ok(fs.existsSync(path.join(root, pkg.module)));
  assert.ok(fs.existsSync(path.join(root, pkg.types)));
  assert.ok(fs.existsSync(path.join(root, pkg.style)));
  for (const target of Object.values(pkg.exports)) {
    if (typeof target === 'string') {
      assert.ok(fs.existsSync(path.join(root, target)), `missing export target ${target}`);
    } else {
      for (const sub of Object.values(target)) {
        assert.ok(fs.existsSync(path.join(root, sub)), `missing export target ${sub}`);
      }
    }
  }
});

test('Node CLI prints hex, css, json, and ANSI swatch', () => {
  const cli = path.join(root, pkg.bin['iammenasco-blue']);
  assert.equal(execFileSync('node', [cli, '--hex'], { encoding: 'utf8' }).trim(), '#368dda');
  assert.equal(execFileSync('node', [cli, '--css'], { encoding: 'utf8' }).trim(), 'var(--color-iammenasco-blue)');
  const parsed = JSON.parse(execFileSync('node', [cli, '--json'], { encoding: 'utf8' }));
  assert.equal(parsed.hex, '#368dda');
  const swatch = execFileSync('node', [cli], { encoding: 'utf8' });
  assert.ok(swatch.includes('iammenasco-blue'));
  assert.ok(swatch.includes('#368dda'));
});

test('OpenGraph image, favicon, and index.html meta tags exist', () => {
  assert.ok(fs.existsSync(path.join(root, 'favicon.svg')));
  assert.ok(fs.existsSync(path.join(root, 'og-image.png')));
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.ok(html.includes('href="favicon.svg"'));
  assert.ok(html.includes('https://iammenasco.github.io/iammenasco-blue/og-image.png'));
});
