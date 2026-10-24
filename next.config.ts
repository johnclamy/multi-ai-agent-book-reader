import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents: true,
  // partialPrefetching: true,
  // turbopack: {
  //   rules: {
  //     "*.css": {
  //       loaders: ["@tailwindcss/turbopack"],
  //       as: "*.css",
  //     },
  //   },
  // },
  
  // 1. Move this to the root and use the new flag
  cacheComponents: true,
  partialPrefetching: true, // Add this to pair with cacheComponents 

  // 2. Clear out any deleted experimental sub-keys
  experimental: {
    // Remove dynamicIO and ppr from here
  },
};

export default nextConfig;
