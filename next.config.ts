import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "example.com",
      "i.pinimg.com",
      "m.media-amazon.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "in.pinterest.com",
      },
    ],
  },
};

export default nextConfig;
