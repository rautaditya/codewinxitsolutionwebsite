/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true, // ✅ skip ESLint errors
  },

  typescript: {
    ignoreBuildErrors: true, // ✅ skip TS errors
  },
};

module.exports = nextConfig;