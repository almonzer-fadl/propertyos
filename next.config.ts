import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tenet/portal/:path*",
        destination: "/tenant/portal/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
