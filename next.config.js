/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "/projects/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
