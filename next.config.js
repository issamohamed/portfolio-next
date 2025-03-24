/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to allow for server-side rendering
  // Remove basePath as it's not needed for Vercel deployment
  images: {
    domains: ['*'], // Allow images from any domain
  },
}

module.exports = nextConfig
