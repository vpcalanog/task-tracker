import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces .next/standalone: a minimal server.js plus only the node_modules
  // it actually needs. The Dockerfile copies this folder into a small image.
  output: "standalone",
};

export default nextConfig;
