/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/careers', destination: '/work-with-us', permanent: true },
    ]
  },
  // Do NOT list Gmail or other secrets in `env` — Next.js would inline them at
  // build time (often as empty). API routes read process.env at runtime from
  // Amplify Hosting (branch env vars). amplify.yml still writes .env.production
  // during build for any tooling that needs it; resolveGmailCredentials() reads
  // GMAIL_USER / Gmail_user and GMAIL_APP_PASSWORD / Gmail_app_password at runtime.
}

module.exports = nextConfig

