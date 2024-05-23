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
    //ENDPOINT_URL:'http://localhost:4000'
    ENDPOINT_URL: 'https://api.houseofsusthira.in'
>>>>>>> dev
  },

};

export default nextConfig;
