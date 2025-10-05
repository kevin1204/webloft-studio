/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vercel handles static generation automatically
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Ensure proper SEO
  trailingSlash: false,
  // Enable compression
  compress: true,
};

export default nextConfig;
