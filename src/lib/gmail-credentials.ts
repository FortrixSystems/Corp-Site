/**
 * Gmail SMTP credentials for nodemailer, aligned with AWS Amplify env naming
 * (see amplify.yml — Gmail_user / GMAIL_USER and Gmail_app_password / GMAIL_APP_PASSWORD).
 */
export function resolveGmailCredentials(): { user: string; password: string } | null {
  const rawUser =
    process.env.GMAIL_USER ||
    process.env.gmail_user ||
    process.env.Gmail_User ||
    process.env.Gmail_user;

  let rawPassword =
    process.env.GMAIL_APP_PASSWORD ||
    process.env.gmail_app_password ||
    process.env.Gmail_App_Password ||
    process.env.Gmail_app_password;

  if (rawPassword) {
    rawPassword = rawPassword.replace(/\s+/g, '').trim();
  }

  if (!rawUser || !rawPassword) {
    return null;
  }

  return { user: rawUser.trim(), password: rawPassword };
}
