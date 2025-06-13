import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'], // 👈 allow images from http://localhost
  },
};

export default nextConfig;
