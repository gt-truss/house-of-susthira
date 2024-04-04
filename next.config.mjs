/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
            {
              protocol: "https",
              hostname: "storage.googleapis.com",
            },
    ],
	  //domains: ['storage.googleapis.com']
  },
  env: {
    // ENDPOINT_URL:'http://localhost:8000'
    ENDPOINT_URL:'https://busy-gaiters-toad.cyclic.app'
    // ENDPOINT_URL:'http://34.93.117.21'
  },

};

export default nextConfig;
