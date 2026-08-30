const routes = [
  "/",
  "/about",
  "/accessibility",
  "/contact",
  "/cookie-policy",
  "/disclaimer",
  "/faq",
  "/garden-guides",
  "/get-custom-design",
  "/how-it-works",
  "/portfolio",
  "/pricing",
  "/privacy-policy",
  "/services",
  "/site-map",
  "/terms-of-service",
  "/terms-and-conditions",
  "/garden-guides/backyard-zoning",
  "/garden-guides/choosing-landscape-stone",
  "/garden-guides/front-yard-bed-five-years",
  "/garden-guides/low-maintenance-front-yard",
  "/portfolio/backyard-zoning-case-study",
  "/services/backyard-design",
  "/services/front-yard-design",
  "/services/garden-bed-entry",
  "/services/multi-area-property",
  "/services/patio-outdoor-living"
];

export default function sitemap() {
  return routes.map((path) => ({
    url: `https://orlanogardens.com${path === "/" ? "" : path}`,
    lastModified: new Date(),
  }));
}
