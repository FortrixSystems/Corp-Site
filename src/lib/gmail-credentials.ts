/**
 * Gmail SMTP credentials for nodemailer, aligned with AWS Amplify env naming
 * (see amplify.yml — Gmail_user / GMAIL_USER and Gmail_app_password / GMAIL_APP_PASSWORD).
 *
 * 1) `gmail-runtime.json` — written by `scripts/write-gmail-runtime.cjs` on Amplify before
 *    `next build` so credentials are bundled into the server chunk (Console env often missing at Lambda runtime).
 * 2) `.env.production` — loaded at runtime if present in the deployment (see tryLoadDotEnvProduction).
 * 3) `process.env` — dynamic keys for local `.env.local` / runtime injection.
 */
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

import gmailRuntime from './gmail-runtime.json';

let dotEnvProductionLoaded = false;

/** Parsed from `.env.production` on disk — survives Next.js inlining `process.env` to empty in the bundle. */
const envFromFile: Record<string, string> = {};

function parseDotEnvLine(line: string): [string, string] | null {
  const line0 = line.trim();
  if (!line0 || line0.startsWith('#')) return null;
  const eq = line0.indexOf('=');
  if (eq <= 0) return null;
  const key = line0.slice(0, eq).trim();
  let val = line0.slice(eq + 1).trim();
  if (
    (val.startsWith('"') && val.endsWith('"')) ||
    (val.startsWith("'") && val.endsWith("'"))
  ) {
    val = val.slice(1, -1);
  }
  return [key, val];
}

function tryLoadDotEnvProduction(): void {
  if (dotEnvProductionLoaded) return;
  dotEnvProductionLoaded = true;
  if (typeof process === 'undefined' || typeof process.cwd !== 'function') return;

  const cwd = process.cwd();
  const candidates = [
    join(cwd, '.env.production'),
    join(cwd, '.next', '.env.production'),
    join(cwd, '..', '.env.production'),
    join(cwd, '..', '.next', '.env.production'),
    '/var/task/.env.production',
    '/var/task/.next/.env.production',
  ];

  for (const p of candidates) {
    if (!existsSync(p)) continue;
    try {
      const content = readFileSync(p, 'utf8');
      for (const line of content.split('\n')) {
        const parsed = parseDotEnvLine(line);
        if (!parsed) continue;
        const [key, val] = parsed;
        if (!val) continue;
        envFromFile[key] = val;
        if (process.env[key] === undefined || process.env[key] === '') {
          process.env[key] = val;
        }
      }
    } catch {
      /* ignore */
    }
  }
}

const USER_KEYS = [
  'GMAIL_USER',
  'gmail_user',
  'Gmail_User',
  'Gmail_user',
] as const;
const PASS_KEYS = [
  'GMAIL_APP_PASSWORD',
  'gmail_app_password',
  'Gmail_App_Password',
  'Gmail_app_password',
] as const;

/** Optional override; default matches the SMTP user (kira@) for reliable delivery. */
const FROM_KEYS = [
  'MAIL_FROM',
  'GMAIL_FROM',
  'Gmail_from',
  'SMTP_FROM',
] as const;

const DEFAULT_MAIL_FROM = 'kira@fortrixsystems.com';

function firstNonEmptyEnv(keys: readonly string[]): string | undefined {
  for (const key of keys) {
    const fromFile = envFromFile[key];
    if (typeof fromFile === 'string' && fromFile.trim() !== '') {
      return fromFile.trim();
    }
    const v = process.env[key];
    if (typeof v === 'string' && v.trim() !== '') {
      return v.trim();
    }
  }
  return undefined;
}

export function resolveGmailCredentials(): { user: string; password: string } | null {
  tryLoadDotEnvProduction();

  const bundledUser =
    typeof gmailRuntime.user === 'string' ? gmailRuntime.user.trim() : '';
  const bundledPass =
    typeof gmailRuntime.password === 'string'
      ? gmailRuntime.password.replace(/\s+/g, '').trim()
      : '';
  if (bundledUser && bundledPass) {
    return { user: bundledUser, password: bundledPass };
  }

  const rawUser = firstNonEmptyEnv(USER_KEYS);

  let rawPassword = firstNonEmptyEnv(PASS_KEYS);

  if (rawPassword) {
    rawPassword = rawPassword.replace(/\s+/g, '').trim();
  }

  if (!rawUser || !rawPassword) {
    return null;
  }

  return { user: rawUser.trim(), password: rawPassword };
}

/**
 * Envelope From: for outbound mail. Defaults to kira@ (same as typical Gmail SMTP user);
 * set MAIL_FROM / GMAIL_FROM to use hello@ or another verified address when ready.
 */
export function resolveMailFromAddress(): string {
  tryLoadDotEnvProduction();
  return firstNonEmptyEnv(FROM_KEYS) ?? DEFAULT_MAIL_FROM;
}
