/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure environment variables are available in serverless functions
  env: {
    // Explicitly expose RESEND_API_KEY for serverless functions
    // This will be read from process.env at build time and bundled
    // Use empty string as fallback to avoid undefined values
    RESEND_API_KEY: process.env.RESEND_API_KEY || '',
  },
}

module.exports = nextConfig

