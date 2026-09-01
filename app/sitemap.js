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
  "/projects",
  "/testimonials",
  "/pricing",
  "/privacy-policy",
  "/services",
  "/site-map",
  "/terms-and-conditions",
  "/garden-guides/backyard-zoning",
  "/garden-guides/choosing-landscape-stone",
  "/garden-guides/front-yard-bed-five-years",
  "/garden-guides/low-maintenance-front-yard",
  "/projects/backyard-zoning-case-study",
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
