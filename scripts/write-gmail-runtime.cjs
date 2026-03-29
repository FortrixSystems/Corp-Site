/**
 * Runs on Amplify before `next build`. Amplify Console env vars are present here
 * but often missing on Lambda at runtime — we embed user/password into a JSON
 * file that Next bundles into the server chunk for /api/contact and /api/work-with-us.
 *
 * Amplify frequently does NOT pass Console env vars into the `npm run build` child
 * process. amplify.yml already materializes them into `.env.production` — we parse
 * that file first so the build always sees the same values as the shell `env | grep` steps.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dotProdPath = path.join(root, '.env.production');

function parseDotEnvLine(line) {
  const line0 = String(line).replace(/\r$/, '').trim();
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

function loadDotProductionIntoEnv() {
  if (!fs.existsSync(dotProdPath)) return;
  try {
    const content = fs.readFileSync(dotProdPath, 'utf8');
    for (const line of content.split('\n')) {
      const parsed = parseDotEnvLine(line);
      if (!parsed) continue;
      const [key, val] = parsed;
      if (!val) continue;
      if (process.env[key] === undefined || process.env[key] === '') {
        process.env[key] = val;
      }
    }
  } catch (e) {
    console.error('[write-gmail-runtime] could not read .env.production:', e.message);
  }
}

loadDotProductionIntoEnv();

if (fs.existsSync(dotProdPath)) {
  const raw = fs.readFileSync(dotProdPath, 'utf8');
  let nonEmptyPairs = 0;
  for (const line of raw.split('\n')) {
    const p = parseDotEnvLine(line);
    if (p && p[1]) nonEmptyPairs += 1;
  }
  console.log(
    '[write-gmail-runtime] .env.production lines with values:',
    nonEmptyPairs
  );
} else {
  console.log('[write-gmail-runtime] no .env.production at repo root');
}

const user =
  process.env.GMAIL_USER ||
  process.env.Gmail_user ||
  process.env.Gmail_User ||
  process.env.gmail_user ||
  '';
const pass =
  process.env.GMAIL_APP_PASSWORD ||
  process.env.Gmail_app_password ||
  process.env.Gmail_App_Password ||
  process.env.gmail_app_password ||
  '';

const out = {
  user: String(user).trim(),
  password: String(pass).replace(/\s+/g, '').trim(),
};

const dest = path.join(__dirname, '..', 'src', 'lib', 'gmail-runtime.json');

function readExistingRuntime() {
  if (!fs.existsSync(dest)) return null;
  try {
    const j = JSON.parse(fs.readFileSync(dest, 'utf8'));
    const u = String(j.user || '').trim();
    const p = String(j.password || '').replace(/\s+/g, '').trim();
    if (u && p) return { user: u, password: p };
  } catch {
    /* ignore */
  }
  return null;
}

fs.mkdirSync(path.dirname(dest), { recursive: true });

// Never overwrite a good bundle with empty creds (Amplify often omits env from npm).
if (!out.user || !out.password) {
  const existing = readExistingRuntime();
  if (existing) {
    console.log(
      '[write-gmail-runtime] build env has no Gmail creds; keeping existing gmail-runtime.json'
    );
    process.exit(0);
  }
}

fs.writeFileSync(dest, `${JSON.stringify(out)}\n`, 'utf8');
console.log(
  '[write-gmail-runtime] user:',
  out.user ? 'set' : 'empty',
  'password:',
  out.password ? 'set' : 'empty'
);
