import { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Allows all hosts (use cautiously)
            },
        ],
        unoptimized: true, // If you want to bypass Next.js image optimization
    },
};

export default nextConfig;
