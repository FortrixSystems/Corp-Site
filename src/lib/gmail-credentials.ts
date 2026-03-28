/**
 * Gmail SMTP credentials for nodemailer, aligned with AWS Amplify env naming
 * (see amplify.yml — Gmail_user / GMAIL_USER and Gmail_app_password / GMAIL_APP_PASSWORD).
 *
 * Reads env via `process.env[key]` so Next.js does not inline build-time empties
 * from dot-notation `process.env.GMAIL_USER` (Amplify injects creds at Lambda runtime).
 *
 * Amplify Hosting often does not expose Console env vars on `process.env` in API routes.
 * amplify.yml copies `.env.production` into the `.next` artifact; we load that file once.
 */
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

let dotEnvProductionLoaded = false;

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

  const candidates = [
    join(process.cwd(), '.env.production'),
    join(process.cwd(), '.next', '.env.production'),
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

function firstNonEmptyEnv(keys: readonly string[]): string | undefined {
  for (const key of keys) {
    const v = process.env[key];
    if (typeof v === 'string' && v.trim() !== '') {
      return v.trim();
    }
  }
  return undefined;
}

export function resolveGmailCredentials(): { user: string; password: string } | null {
  tryLoadDotEnvProduction();

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
