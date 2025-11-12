import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 This enables static site export
  output: "export",

  // 👇 Optional: if you use <Image /> component, disable optimization
  images: {
    unoptimized: true,
  },

  // 👇 Optional: if you use environment variables during build
  // env: {
  //   NEXT_PUBLIC_API_URL: "https://api.example.com",
  // },
};

export default nextConfig;
