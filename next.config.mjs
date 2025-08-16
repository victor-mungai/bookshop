/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
@type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export (replaces next export command)
  output: 'export',
  
  // Optional: Configure trailing slashes
  trailingSlash: true,
  
  // Optional: Configure image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Disable server-side features that don't work with static export
  experimental: {
    // Enable if you need app directory features
    // appDir: true
  }
}

module.exports = nextConfig
