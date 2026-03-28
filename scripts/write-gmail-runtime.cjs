/**
 * Runs on Amplify before `next build`. Amplify Console env vars are present here
 * but often missing on Lambda at runtime — we embed user/password into a JSON
 * file that Next bundles into the server chunk for /api/contact and /api/work-with-us.
 */
const fs = require('fs');
const path = require('path');

const user =
  process.env.GMAIL_USER ||
  process.env.Gmail_user ||
  process.env.gmail_user ||
  '';
const pass =
  process.env.GMAIL_APP_PASSWORD ||
  process.env.Gmail_app_password ||
  process.env.gmail_app_password ||
  '';

const out = {
  user: String(user).trim(),
  password: String(pass).replace(/\s+/g, '').trim(),
};

const dest = path.join(__dirname, '..', 'src', 'lib', 'gmail-runtime.json');
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, `${JSON.stringify(out)}\n`, 'utf8');
console.log(
  '[write-gmail-runtime] user:',
  out.user ? 'set' : 'empty',
  'password:',
  out.password ? 'set' : 'empty'
);
