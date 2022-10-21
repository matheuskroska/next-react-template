/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: 'http://localhost:8080/graphql',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
