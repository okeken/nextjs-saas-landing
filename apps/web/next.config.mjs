import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@metallicjs/ui"],
  trailingSlash: false,
  async redirects() {
    return [{ source: "/:path(.+)/", destination: "/:path", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    // Find the existing rule that handles SVGs and remove it
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});
export default withMDX(nextConfig);
