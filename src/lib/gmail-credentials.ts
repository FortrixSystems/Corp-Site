/**
 * Gmail SMTP credentials for nodemailer, aligned with AWS Amplify env naming
 * (see amplify.yml — Gmail_user / GMAIL_USER and Gmail_app_password / GMAIL_APP_PASSWORD).
 *
 * Reads env via `process.env[key]` so Next.js does not inline build-time empties
 * from dot-notation `process.env.GMAIL_USER` (Amplify injects creds at Lambda runtime).
 */
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
