/**
 * Runs on Amplify before `next build`. Amplify Console env vars are present here
 * but often missing on Lambda at runtime — we embed user/password into a JSON
 * file that Next bundles into the server chunk for /api/contact and /api/work-with-us.
 */
const fs = require('fs');
const path = require('path');
const {
  pickGmailUser,
  pickGmailPassword,
  listGmailishKeys,
} = require('./gmail-env-utils.cjs');

const root = path.join(__dirname, '..');
const dotProdPath = path.join(root, '.env.production');
const dest = path.join(root, 'src', 'lib', 'gmail-runtime.json');

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

function readExistingRuntime() {
  if (!fs.existsSync(dest)) return null;
  try {
    const j = JSON.parse(fs.readFileSync(dest, 'utf8'));
    const user = String(j.user || '').trim();
    const password = String(j.password || '').replace(/\s+/g, '').trim();
    if (user && password) return { user, password };
  } catch {
    /* ignore */
  }
  return null;
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

console.log(
  '[write-gmail-runtime] process.env keys matching /gmail/i (names only):',
  listGmailishKeys().length ? listGmailishKeys().join(', ') : '(none)'
);

const out = {
  user: pickGmailUser(),
  password: pickGmailPassword(),
};

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

if (isAmplifyBuild() && (!out.user || !out.password)) {
  console.error(
    '[write-gmail-runtime] FATAL: Gmail credentials missing on Amplify build.'
  );
  console.error(
    'Set branch env vars in Amplify Console → App settings → Environment variables:'
  );
  console.error('  GMAIL_USER (or Gmail_user) = kira@fortrixsystems.com');
  console.error(
    '  GMAIL_APP_PASSWORD (or Gmail_app_password) = Google App Password (16 chars, underscores not hyphens)'
  );
  console.error(
    'Remove legacy names with hyphens (e.g. Gmail-app-password) — they are not readable in shell builds.'
  );
  process.exit(1);
}
