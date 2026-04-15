import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Full static export so the site can be hosted on any static host (Cloudflare Pages, GitHub Pages, etc.)
  output: "export",
  images: {
    // Static export doesn't run Next's image optimizer. Serve the originals as-is.
    unoptimized: true,
  },
};

export default nextConfig;
