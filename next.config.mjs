const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sds-construction.ca" }],
        destination: "https://sds-construction.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
