/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
            {
              protocol: "https",
              hostname: "storage.googleapis.com",
            },
    ],
  },
  env: {
    ENDPOINT_URL:'http://localhost:4000'
  },

};

export default nextConfig;
