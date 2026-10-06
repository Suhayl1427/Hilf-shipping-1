/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["172.20.10.6", "172.20.10.*", "192.168.*.*", "10.*.*.*"],
  turbopack: { root: import.meta.dirname },
  images: { formats: ["image/avif", "image/webp"] },
};
export default nextConfig;
