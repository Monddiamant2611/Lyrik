import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/Lyrik";

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export" as const,
        basePath: githubPagesBasePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;