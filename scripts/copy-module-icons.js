#!/usr/bin/env node
/**
 * Copies marketing-approved module icon PNGs from assets/module-icons/
 * into public/icons/modules/ with the exact names the site expects.
 * Brand: Fortrix Systems §8.2. Do not rename output files.
 *
 * Drop your files (Light_*, Dark_*, Inverse_*) into assets/module-icons/
 * then run: node scripts/copy-module-icons.js
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'assets', 'module-icons');
const DST_DIR = path.join(__dirname, '..', 'public', 'icons', 'modules');

const MODULES = ['beacon', 'ledger', 'draw', 'retail', 'connect', 'insight'];

// Match source filename to destination: Light_Beacon* -> beacon-light.png, Dark_Beacon* / Inverse_Beacon* -> beacon-dark.png
function mapFile(name) {
  const lower = name.toLowerCase();
  for (const mod of MODULES) {
    const cap = mod.charAt(0).toUpperCase() + mod.slice(1);
    if (lower.startsWith('light_' + mod) || lower.startsWith('light_' + cap)) {
      return { module: mod, variant: 'light' };
    }
    if (lower.startsWith('dark_' + mod) || lower.startsWith('inverse_' + mod) ||
        lower.startsWith('dark_' + cap) || lower.startsWith('inverse_' + cap)) {
      return { module: mod, variant: 'dark' };
    }
  }
  return null;
}

if (!fs.existsSync(SRC_DIR)) {
  fs.mkdirSync(SRC_DIR, { recursive: true });
  console.log('Created', SRC_DIR);
  console.log('Drop your marketing-approved icon PNGs there, then run this script again.');
  process.exit(0);
}

const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.png'));
if (files.length === 0) {
  console.log('No PNG files in', SRC_DIR);
  console.log('Drop your Light_* and Dark_* / Inverse_* icon PNGs there, then run this script again.');
  process.exit(1);
}

if (!fs.existsSync(DST_DIR)) {
  fs.mkdirSync(DST_DIR, { recursive: true });
}

let copied = 0;
for (const file of files) {
  const mapped = mapFile(file);
  if (!mapped) {
    console.warn('Skip (unrecognized):', file);
    continue;
  }
  const destName = `${mapped.module}-${mapped.variant}.png`;
  const srcPath = path.join(SRC_DIR, file);
  const dstPath = path.join(DST_DIR, destName);
  fs.copyFileSync(srcPath, dstPath);
  console.log(file, '->', destName);
  copied++;
}

console.log('Done. Copied', copied, 'icons to', DST_DIR);
