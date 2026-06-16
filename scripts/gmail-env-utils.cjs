/**
 * Shared Gmail env resolution for Amplify build scripts.
 * Handles Gmail_user, GMAIL_USER, Gmail-app-password (legacy hyphenated), etc.
 */

function normalizePassword(value) {
  return String(value || '').replace(/\s+/g, '').trim();
}

function normalizeUser(value) {
  return String(value || '').trim();
}

function isUserKey(key) {
  const k = String(key).toLowerCase().replace(/-/g, '_');
  return k === 'gmail_user' || k === 'gmailuser';
}

function isPasswordKey(key) {
  const k = String(key).toLowerCase().replace(/-/g, '_');
  return (
    k === 'gmail_app_password' ||
    k === 'gmail_apppassword' ||
    k === 'gmailapppassword'
  );
}

function pickFromEnv(env, predicate) {
  if (!env || typeof env !== 'object') return '';
  const explicit = Object.keys(env).filter(predicate);
  explicit.sort((a, b) => {
    const score = (key) => {
      const k = key.toUpperCase();
      if (k === 'GMAIL_USER' || k === 'GMAIL_APP_PASSWORD') return 0;
      if (k.includes('_')) return 1;
      return 2;
    };
    return score(a) - score(b);
  });
  for (const key of explicit) {
    const value = env[key];
    if (typeof value === 'string' && value.trim() !== '') {
      return value.trim();
    }
  }
  return '';
}

function pickGmailUser(env = process.env) {
  const raw = pickFromEnv(env, isUserKey);
  return normalizeUser(raw);
}

function pickGmailPassword(env = process.env) {
  const raw = pickFromEnv(env, isPasswordKey);
  return normalizePassword(raw);
}

function listGmailishKeys(env = process.env) {
  return Object.keys(env || {}).filter((k) => /gmail/i.test(k));
}

module.exports = {
  pickGmailUser,
  pickGmailPassword,
  listGmailishKeys,
  normalizePassword,
  normalizeUser,
  isUserKey,
  isPasswordKey,
};
