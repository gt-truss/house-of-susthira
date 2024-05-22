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
    ENDPOINT_URL:'https://api.houseofsusthira.in'
  },

};

export default nextConfig;
