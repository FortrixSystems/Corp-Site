/**
 * Gmail SMTP credentials for nodemailer, aligned with AWS Amplify env naming.
 *
 * Resolution order (Amplify SSR does not inject Console vars into Lambda process.env):
 * 1) `.env.production` / `.next/.env.production` on disk (written during Amplify build)
 * 2) `gmail-runtime.json` on disk (written during Amplify build)
 * 3) `process.env` (local `.env.local` / runtime injection)
 */
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

import gmailRuntimeBundled from './gmail-runtime.json';

function mergeAmplifyEnv(
  env: NodeJS.ProcessEnv = process.env
): NodeJS.ProcessEnv {
  const merged: NodeJS.ProcessEnv = { ...env };
  const rawSecrets = env.secrets;
  if (typeof rawSecrets === 'string' && rawSecrets.trim()) {
    try {
      const parsed = JSON.parse(rawSecrets) as Record<string, string>;
      if (parsed && typeof parsed === 'object') {
        for (const [key, value] of Object.entries(parsed)) {
          if (typeof value === 'string' && value.trim() !== '') {
            merged[key] = value;
          }
        }
      }
    } catch {
      /* ignore */
    }
  }
  return merged;
}

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

function loadEnvFile(path: string): void {
  if (!existsSync(path)) return;
  try {
    const content = readFileSync(path, 'utf8');
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

function runtimeRoots(): string[] {
  const roots = new Set<string>();
  if (typeof process.cwd === 'function') {
    roots.add(process.cwd());
    roots.add(join(process.cwd(), '..'));
  }
  if (process.env.LAMBDA_TASK_ROOT) {
    roots.add(process.env.LAMBDA_TASK_ROOT);
  }
  roots.add('/var/task');
  return [...roots];
}

function tryLoadDotEnvProduction(): void {
  if (dotEnvProductionLoaded) return;
  dotEnvProductionLoaded = true;
  if (typeof process === 'undefined') return;

  const relativePaths = [
    '.env.production',
    '.next/.env.production',
    'src/lib/.env.production',
  ];

  for (const root of runtimeRoots()) {
    for (const rel of relativePaths) {
      loadEnvFile(join(root, rel));
    }
  }
}

function readGmailRuntimeFromDisk(): { user: string; password: string } | null {
  const relativePaths = [
    'gmail-runtime.json',
    '.next/gmail-runtime.json',
    'src/lib/gmail-runtime.json',
  ];

  for (const root of runtimeRoots()) {
    for (const rel of relativePaths) {
      const path = join(root, rel);
      if (!existsSync(path)) continue;
      try {
        const j = JSON.parse(readFileSync(path, 'utf8')) as {
          user?: string;
          password?: string;
        };
        const user = String(j.user || '').trim();
        const password = String(j.password || '').replace(/\s+/g, '').trim();
        if (user && password) return { user, password };
      } catch {
        /* ignore */
      }
    }
  }
  return null;
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
    const v = mergeAmplifyEnv()[key];
    if (typeof v === 'string' && v.trim() !== '') {
      return v.trim();
    }
  }
  return undefined;
}

function valueFromEnvFileLoose(
  predicate: (key: string) => boolean
): string | undefined {
  for (const key of Object.keys(envFromFile)) {
    if (!predicate(key)) continue;
    const v = envFromFile[key];
    if (typeof v === 'string' && v.trim() !== '') return v.trim();
  }
  return undefined;
}

function envValueByLooseKey(
  predicate: (key: string) => boolean
): string | undefined {
  const merged = mergeAmplifyEnv();
  for (const key of Object.keys(merged)) {
    if (!predicate(key)) continue;
    const v = merged[key];
    if (typeof v === 'string' && v.trim() !== '') return v.trim();
  }
  return undefined;
}

function isGmailUserKey(key: string): boolean {
  const k = key.toLowerCase().replace(/-/g, '_');
  return k === 'gmail_user' || k === 'gmailuser';
}

function isGmailPasswordKey(key: string): boolean {
  const k = key.toLowerCase().replace(/-/g, '_');
  return (
    k === 'gmail_app_password' ||
    k === 'gmail_apppassword' ||
    k === 'gmailapppassword'
  );
}

export function resolveGmailCredentials(): { user: string; password: string } | null {
  tryLoadDotEnvProduction();

  const bundledUser =
    typeof gmailRuntimeBundled.user === 'string'
      ? gmailRuntimeBundled.user.trim()
      : '';
  const bundledPass =
    typeof gmailRuntimeBundled.password === 'string'
      ? gmailRuntimeBundled.password.replace(/\s+/g, '').trim()
      : '';
  if (bundledUser && bundledPass) {
    return { user: bundledUser, password: bundledPass };
  }

  const fromDisk = readGmailRuntimeFromDisk();
  if (fromDisk) {
    return fromDisk;
  }

  let rawUser = firstNonEmptyEnv(USER_KEYS);
  if (!rawUser) {
    rawUser = valueFromEnvFileLoose(isGmailUserKey);
  }
  if (!rawUser) {
    rawUser = envValueByLooseKey(isGmailUserKey);
  }

  let rawPassword = firstNonEmptyEnv(PASS_KEYS);
  if (!rawPassword) {
    rawPassword = valueFromEnvFileLoose(isGmailPasswordKey);
  }
  if (!rawPassword) {
    rawPassword = envValueByLooseKey(isGmailPasswordKey);
  }

  if (rawPassword) {
    rawPassword = rawPassword.replace(/\s+/g, '').trim();
  }

  if (!rawUser || !rawPassword) {
    const merged = mergeAmplifyEnv();
    const gmailKeys = Object.keys(merged).filter((k) => /gmail/i.test(k));
    console.error(
      '[gmail-credentials] missing user or password; gmail-ish env keys:',
      gmailKeys.length ? gmailKeys.join(', ') : '(none)',
      'envFromFile keys:',
      Object.keys(envFromFile).filter((k) => /gmail/i.test(k)).join(', ') || '(none)'
    );
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
