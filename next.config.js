/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Turbopack ignores stray lockfiles outside the project
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
