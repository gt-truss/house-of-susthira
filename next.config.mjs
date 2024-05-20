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
>>>>>>> dev
    // ENDPOINT_URL:'http://34.93.117.21'
  },

};

export default nextConfig;
