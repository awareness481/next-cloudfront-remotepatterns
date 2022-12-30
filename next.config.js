/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d36uctqrso86dz.cloudfront.net",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
