import { guides } from "@/lib/guides";
import { absoluteUrl, premadePlans } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/about",
  "/accessibility",
  "/contact",
  "/cookie-policy",
  "/custom-design-service",
  "/disclaimer",
  "/faq",
  "/garden-guides",
  "/how-it-works",
  "/portfolio",
  "/ready-to-use-designs",
  "/pricing",
  "/privacy-policy",
  "/services",
  "/site-map",
  "/terms-and-conditions",
];

export default function sitemap() {
  const guideRoutes = guides.map(({ slug }) => `/garden-guides/${slug}`);
  const premadeRoutes = premadePlans.map(
    ({ slug }) => `/ready-to-use-designs/${slug}`,
  );
  return [...staticRoutes, ...guideRoutes, ...premadeRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-09-01"),
    changeFrequency: path.startsWith("/garden-guides") ? "monthly" : "yearly",
    priority:
      path === "/"
        ? 1
        : path === "/garden-guides" || path === "/portfolio"
          ? 0.9
          : 0.7,
  }));
}
