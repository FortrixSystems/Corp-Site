/**
 * Normalize Gmail branch env vars into .env.production for Amplify SSR/API routes.
 * Replaces fragile shell grep blocks — Node sees Amplify Console vars even when shell env does not.
 */
const fs = require('fs');
const path = require('path');
const {
  pickGmailUser,
  pickGmailPassword,
  listGmailishKeys,
} = require('./gmail-env-utils.cjs');

const root = path.join(__dirname, '..');
const dotp = path.join(root, '.env.production');

function isAmplifyBuild() {
  return Boolean(
    process.env.AWS_APP_ID ||
      process.env.AWS_BRANCH ||
      process.env.AWS_COMMIT_ID ||
      process.env.AMPLIFY_APP_ID ||
      process.env.AMPLIFY_ENV ||
      process.env._LIVE_PACKAGE_UPDATES ||
      process.env._LIVE_UPDATES
  );
}

function escapeDotenvValue(val) {
  const s = String(val);
  if (/[\r\n#"\\]/.test(s) || /\s/.test(s)) {
    return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return s;
}

function stripGmailLines(content) {
  return content
    .split('\n')
    .filter((line) => {
      const t = line.trim();
      if (!t || t.startsWith('#')) return true;
      const key = t.split('=')[0]?.trim() ?? '';
      return !/gmail/i.test(key);
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd();
}

const gmailishKeys = listGmailishKeys();
console.log(
  '[materialize-gmail-env] env keys matching /gmail/i (names only):',
  gmailishKeys.length ? gmailishKeys.join(', ') : '(none)'
);
if (process.env.secrets) {
  console.log('[materialize-gmail-env] process.env.secrets is present (Amplify SSM secrets)');
}

const user = pickGmailUser();
const pass = pickGmailPassword();

let body = '';
if (fs.existsSync(dotp)) {
  body = stripGmailLines(fs.readFileSync(dotp, 'utf8'));
}

const lines = [];
if (body) lines.push(body);
lines.push('# materialize-gmail-env.cjs — Gmail SMTP for /api/contact and /api/work-with-us');
if (user) lines.push(`GMAIL_USER=${escapeDotenvValue(user)}`);
if (pass) lines.push(`GMAIL_APP_PASSWORD=${escapeDotenvValue(pass)}`);

fs.writeFileSync(dotp, `${lines.filter(Boolean).join('\n')}\n`, 'utf8');

console.log(
  '[materialize-gmail-env] wrote GMAIL_USER:',
  Boolean(user),
  'GMAIL_APP_PASSWORD:',
  Boolean(pass)
);

if (isAmplifyBuild() && (!user || !pass)) {
  console.error('[materialize-gmail-env] FATAL: Gmail credentials missing on Amplify build.');
  console.error('Amplify Console → App settings → Environment variables (main branch):');
  console.error('  Gmail_user or GMAIL_USER = kira@fortrixsystems.com');
  console.error('  GMAIL_APP_PASSWORD or Gmail_app_password = Google App Password');
  process.exit(1);
}
