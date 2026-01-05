/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // outputFileTracingIncludes: {
  // "/*": ["./node_modules/.prisma/client/**/*", "./generated/prisma/**/*"],
  // },
};

export default nextConfig;
