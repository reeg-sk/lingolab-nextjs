/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "cdn.lingolab.sk",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
