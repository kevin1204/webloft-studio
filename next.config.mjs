/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: false,
  assetPrefix: '',
  basePath: '',
};

export default nextConfig;
