/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    optimizeFonts: false,
    ignoreBuildErrors: true
  },
  env: {
    BLOG: process.env.BLOG,
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    SOLUTIONS: process.env.SOLUTIONS,
    QUOTE_ENDPOINT_URL: process.env.QUOTE_ENDPOINT_URL
  },
}

module.exports = nextConfig
