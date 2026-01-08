import "@yooo_/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,

  images: {
    remotePatterns: [
      new URL("https://tr.rbxcdn.com/**"),
      new URL("https://placehold.co/**"),
      new URL("https://t3.rbxcdn.com/**"),
    ]
  }
};

export default nextConfig;
