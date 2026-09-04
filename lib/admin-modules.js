export const adminCategories = [
  { name: "Homepage & Core Content", modules: [["Home hero & trust points", "/"], ["Reviews & review carousel", "/"], ["Homepage sections", "/"], ["About page", "/about"], ["FAQ", "/faq"], ["How It Works", "/how-it-works"], ["Pricing packages", "/pricing"], ["Announcement banner", "/"], ["Reusable CTAs", "/"]] },
  { name: "Custom Design Service", modules: [["Custom design service", "/custom-design-service"], ["Custom design packages", "/custom-design-service"]] },
  { name: "Ready-to-Use Designs", modules: [["Ready-to-Use Designs", "/ready-to-use-designs"], ["Ready-to-Use product details", "/ready-to-use-designs"], ["Ready-to-Use product gallery", "/ready-to-use-designs"]] },
  { name: "Portfolio & Client Proof", modules: [["Portfolio projects", "/portfolio"], ["Portfolio categories & locations", "/portfolio"], ["Before & after images", "/portfolio"], ["Case studies", "/portfolio"], ["Client reviews & verification", "/portfolio"], ["Etsy Star Seller", "/portfolio"], ["Completed-project count", "/portfolio"], ["Social audience statistics", "/portfolio"]] },
  { name: "Garden Guides", modules: [["Garden guide articles", "/garden-guides"], ["Article SEO & media", "/garden-guides"], ["Related articles", "/garden-guides"]] },
  { name: "Legal Pages", modules: [["Terms & Conditions", "/terms-and-conditions"], ["Privacy Policy", "/privacy-policy"], ["Cookie Policy", "/cookie-policy"], ["Disclaimer", "/disclaimer"], ["Accessibility", "/accessibility"]] },
  { name: "Site-wide & Navigation", modules: [["Contact & social links", "/contact"], ["Header navigation & CTA", "/"], ["Footer & legal links", "/"], ["Logo & favicon", "/"]] },
  { name: "Media & SEO", modules: [["Media library & alt text", "/"], ["SEO & canonical", "/"], ["Open Graph", "/"], ["Sitemap & indexing", "/site-map"], ["AdSense", "/"], ["Cookie consent", "/cookie-policy"]] },
];
export const slugifyModule = (name) => name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export function findModule(slug) { for (const category of adminCategories) for (const [name, path] of category.modules) if (slugifyModule(name) === slug) return { name, path, category: category.name }; return null; }
