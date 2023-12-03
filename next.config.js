/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    domains: ['note-quest-api.s3.ap-northeast-2.amazonaws.com'],
  },
}

module.exports = nextConfig
