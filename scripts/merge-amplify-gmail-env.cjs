/**
 * Run on Amplify after shell steps that use `env | grep`.
 * Amplify often injects branch env into the **Node** process but not into the
 * shell `env` output, so .env.production never gets real GMAIL_* lines and
 * write-gmail-runtime.cjs bundles empty creds → "Email service is not configured".
 *
 * Appends GMAIL_USER / GMAIL_APP_PASSWORD from process.env if set (no values logged).
 */
const fs = require('fs');
const path = require('path');

const dotp = path.join(__dirname, '..', '.env.production');

function pick(keys) {
  for (const k of keys) {
    const v = process.env[k];
    if (typeof v === 'string' && v.trim() !== '') return v.trim();
  }
  return '';
}

/** Amplify / consoles sometimes use different casing than our explicit list. */
function pickUserLoose() {
  for (const k of Object.keys(process.env)) {
    if (/^gmail_user$/i.test(k)) {
      const v = process.env[k];
      if (typeof v === 'string' && v.trim() !== '') return v.trim();
    }
  }
  return '';
}

function pickPassLoose() {
  for (const k of Object.keys(process.env)) {
    if (/^gmail_app_password$/i.test(k)) {
      const v = process.env[k];
      if (typeof v === 'string' && v.trim() !== '') return v.trim();
    }
  }
  return '';
}

function escapeDotenvValue(val) {
  const s = String(val);
  if (/[\r\n#"\\]/.test(s) || /\s/.test(s)) {
    return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return s;
}

let user = pick([
  'GMAIL_USER',
  'Gmail_user',
  'gmail_user',
  'Gmail_User',
]);
let pass = pick([
  'GMAIL_APP_PASSWORD',
  'Gmail_app_password',
  'gmail_app_password',
  'Gmail_App_Password',
]);

if (!user) user = pickUserLoose();
if (!pass) pass = pickPassLoose();

const gmailishKeys = Object.keys(process.env).filter((k) =>
  /gmail/i.test(k)
);
console.log(
  '[merge-amplify-gmail-env] process.env keys matching /gmail/i (names only):',
  gmailishKeys.length ? gmailishKeys.join(', ') : '(none)'
);

if (!user && !pass) {
  console.log(
    '[merge-amplify-gmail-env] no Gmail vars in Node process.env (skipping append)'
  );
  process.exit(0);
}

const lines = [
  '',
  '# merge-amplify-gmail-env.cjs — from Node process.env when shell env misses Amplify vars',
];
if (user) lines.push(`GMAIL_USER=${escapeDotenvValue(user)}`);
if (pass) lines.push(`GMAIL_APP_PASSWORD=${escapeDotenvValue(pass)}`);

fs.appendFileSync(dotp, `${lines.join('\n')}\n`, 'utf8');
console.log(
  '[merge-amplify-gmail-env] appended GMAIL_USER:',
  Boolean(user),
  'GMAIL_APP_PASSWORD:',
  Boolean(pass)
);
