/**
 * Generates public/og-default.png (1200×630) from brand logo assets.
 * Run: node scripts/generate-og-image.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'public/og-default.png');
const logoPath = join(root, 'public/logo/fortrix-horizontal-white.svg');

const WIDTH = 1200;
const HEIGHT = 630;
const NAVY = { r: 20, g: 34, b: 47 }; // #14222F
const TEAL = '#6FA8A5';

const logoWidth = 720;
const logoBuffer = await sharp(logoPath).resize(logoWidth).png().toBuffer();
const logoMeta = await sharp(logoBuffer).metadata();
const logoHeight = logoMeta.height ?? 180;

const taglineSvg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="80" xmlns="http://www.w3.org/2000/svg">
  <text
    x="50%"
    y="50%"
    dominant-baseline="middle"
    text-anchor="middle"
    fill="${TEAL}"
    font-family="Inter, Helvetica, Arial, sans-serif"
    font-size="34"
    font-weight="400"
    letter-spacing="0.02em"
  >Engineered for truth. Built for oversight.</text>
</svg>`);

const taglineBuffer = await sharp(taglineSvg).png().toBuffer();
const taglineMeta = await sharp(taglineBuffer).metadata();
const taglineHeight = taglineMeta.height ?? 80;

const gap = 36;
const blockHeight = logoHeight + gap + taglineHeight;
const logoTop = Math.round((HEIGHT - blockHeight) / 2);
const taglineTop = logoTop + logoHeight + gap;
const logoLeft = Math.round((WIDTH - logoWidth) / 2);

const navyBackground = sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 3,
    background: NAVY,
  },
});

await navyBackground
  .composite([
    { input: logoBuffer, left: logoLeft, top: logoTop },
    { input: taglineBuffer, left: 0, top: taglineTop },
  ])
  .png()
  .toFile(outPath);

console.log(`Wrote ${outPath} (${WIDTH}x${HEIGHT})`);
