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
  },
}

module.exports = nextConfig

