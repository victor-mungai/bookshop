/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export (replaces next export command)
  output: 'export',
  
  // Configure trailing slashes for better Apache serving
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Disable server-side features that don't work with static export
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
