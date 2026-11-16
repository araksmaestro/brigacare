import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Old Wix URLs → new pages
  async redirects() {
    return [
      { source: "/general-5", destination: "/work-with-brigacare", permanent: true },
      { source: "/contact-8", destination: "/contact", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
