/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure environment variables are available in serverless functions
  env: {
    // Explicitly expose GMAIL variables for serverless functions
    // These will be read from process.env at build time and bundled
    // Use empty string as fallback to avoid undefined values
    GMAIL_USER: process.env.GMAIL_USER || '',
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || '',
  },
}

module.exports = nextConfig

