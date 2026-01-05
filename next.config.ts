// @ts-ignore: no declaration file for '@prisma/nextjs-monorepo-workaround-plugin'
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
  outputFileTracingIncludes: {
    "/api/**/*": ["./node_modules/.prisma/client/**/*"],
    "/*": ["./node_modules/.prisma/client/**/*"],
  },
};

export default nextConfig;
