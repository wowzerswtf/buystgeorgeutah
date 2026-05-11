import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-0d816a334949494d8c7d08fe5484030b.r2.dev",
      },
      {
        protocol: "https",
        hostname: "pub-935521d3cfcb470c96e59231470db2be.r2.dev",
      },
      {
        protocol: "https",
        hostname: "pub-97eacfa7d019409baa18e5cd6727ecb3.r2.dev",
      },
      {
        protocol: "https",
        hostname: "kaydenpalmerrealestate.com",
      },
    ],
  },
};

export default nextConfig;
