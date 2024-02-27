/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dbqwmndns/image/upload/**", // Adjust this based on your Cloudinary URL structure
      },
    ],
  },
};

export default config;
