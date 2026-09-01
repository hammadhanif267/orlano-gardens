/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
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
      {
        source: "/terms-of-service",
        destination: "/terms-and-conditions",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
