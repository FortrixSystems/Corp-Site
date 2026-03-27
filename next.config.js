/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/careers', destination: '/work-with-us', permanent: true },
    ]
  },
  // Ensure environment variables are available in serverless functions
  env: {
    // Explicitly expose Gmail variables for serverless functions
    // These will be read from process.env at build time and bundled
    // Use empty string as fallback to avoid undefined values
    GMAIL_USER: process.env.GMAIL_USER || '',
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || '',
    // Optional (see amplify.yml): forwarded from Amplify Console when set
    WORK_WITH_US_TO_EMAIL: process.env.WORK_WITH_US_TO_EMAIL || '',
    PUBLIC_FORM_RATE_LIMIT_MAX: process.env.PUBLIC_FORM_RATE_LIMIT_MAX || '',
    PUBLIC_FORM_RATE_LIMIT_WINDOW_MS:
      process.env.PUBLIC_FORM_RATE_LIMIT_WINDOW_MS || '',
    WORK_WITH_US_RATE_LIMIT_MAX: process.env.WORK_WITH_US_RATE_LIMIT_MAX || '',
    WORK_WITH_US_RATE_LIMIT_WINDOW_MS:
      process.env.WORK_WITH_US_RATE_LIMIT_WINDOW_MS || '',
  },
}

module.exports = nextConfig

