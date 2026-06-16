/**
 * Run on Amplify after shell steps that use `env | grep`.
 * Materializes GMAIL_USER / GMAIL_APP_PASSWORD into .env.production from Node process.env.
 */
const fs = require('fs');
const path = require('path');
const {
  pickGmailUser,
  pickGmailPassword,
  listGmailishKeys,
} = require('./gmail-env-utils.cjs');

const dotp = path.join(__dirname, '..', '.env.production');

function escapeDotenvValue(val) {
  const s = String(val);
  if (/[\r\n#"\\]/.test(s) || /\s/.test(s)) {
    return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return s;
}

const gmailishKeys = listGmailishKeys();
console.log(
  '[merge-amplify-gmail-env] process.env keys matching /gmail/i (names only):',
  gmailishKeys.length ? gmailishKeys.join(', ') : '(none)'
);

const user = pickGmailUser();
const pass = pickGmailPassword();

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
