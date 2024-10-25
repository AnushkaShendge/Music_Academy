import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add unsplash.com to allowed image domains
  },
};

export default nextConfig;
