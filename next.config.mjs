const isPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "hire";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isPages ? `/${repoName}` : "",
  assetPrefix: isPages ? `/${repoName}/` : "",
};

export default nextConfig;
