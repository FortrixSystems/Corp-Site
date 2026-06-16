/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/careers', destination: '/work-with-us', permanent: true },
    ]
  },
  // Ensure Gmail cred files ship inside API route Lambda traces (Amplify SSR).
  experimental: {
    outputFileTracingIncludes: {
      '/api/contact': [
        './src/lib/gmail-runtime.json',
        './.env.production',
      ],
      '/api/work-with-us': [
        './src/lib/gmail-runtime.json',
        './.env.production',
      ],
    },
  },
}

module.exports = nextConfig

