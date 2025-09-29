/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: true,
  assetPrefix: '',
  basePath: '',
};

export default nextConfig;
