/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Ensure proper static generation
  generateBuildId: async () => {
    return 'static-build'
  }
};

export default nextConfig;
