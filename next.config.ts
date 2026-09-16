import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from /<repo>, so basePath
// is supplied at build time via NEXT_PUBLIC_BASE_PATH. Empty locally / on Vercel.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
