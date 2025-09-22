import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['raw.githubusercontent.com','github.com'], 
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/**",
      },
    ],
  }
  /* config options here */
};
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
};
export default nextConfig;

