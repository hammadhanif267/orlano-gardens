/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/projects", destination: "/portfolio", permanent: true },
      { source: "/projects/:path*", destination: "/portfolio", permanent: true },
      { source: "/testimonials", destination: "/portfolio#client-reviews", permanent: true },
      { source: "/get-custom-design", destination: "/custom-design-service", permanent: true },
      { source: "/services/front-yard-design", destination: "/custom-design-service", permanent: true },
      { source: "/services/backyard-design", destination: "/custom-design-service", permanent: true },
      { source: "/services/garden-bed-entry", destination: "/custom-design-service", permanent: true },
      { source: "/services/patio-outdoor-living", destination: "/custom-design-service", permanent: true },
      { source: "/services/multi-area-property", destination: "/custom-design-service", permanent: true },
      { source: "/premade-designs", destination: "/ready-to-use-designs", permanent: true },
      { source: "/premade-designs/:path*", destination: "/ready-to-use-designs/:path*", permanent: true },
    ];
  },
};

module.exports = nextConfig;
