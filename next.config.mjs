/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "www.sds-construction.ca",
        destination: "https://sds-construction.ca",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
