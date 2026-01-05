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
    outputFileTracingIncludes: {
      "/api/**/*": ["./node_modules/.prisma/client/**/*"],
      "/*": ["./node_modules/.prisma/client/**/*"],
    },
  },
};

export default nextConfig;
