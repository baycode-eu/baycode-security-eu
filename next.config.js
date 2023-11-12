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
    QUOTE_ENDPOINT_URL: process.env.QUOTE_ENDPOINT_URL,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY
  },
}

module.exports = nextConfig
