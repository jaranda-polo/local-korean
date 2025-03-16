/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // Disable webpack caching in development to prevent ENOENT errors
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    // NextJS 14.0.1 is using this version
    swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]],
  };
}

module.exports = nextConfig;
