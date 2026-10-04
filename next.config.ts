import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "CDN-Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "CDN-Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
