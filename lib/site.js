export const SITE_NAME = "Orlano Gardens";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://orlano-gardens-studio.airush819.chatgpt.site";
export const EMAIL = "orlanogardens@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/orlanogardens";
export const FACEBOOK_URL = "https://www.facebook.com/orlanogardens";
export const ETSY_URL = "https://orlanogardens.etsy.com/";
export const ETSY_REVIEWS_URL =
  "https://www.etsy.com/shop/OrlanoGardens/reviews";
export const absoluteUrl = (path = "/") =>
  new URL(path, `${SITE_URL.replace(/\/$/, "")}/`).toString();

export const etsyProof = {
  status: "Star Seller",
  rating: "5.0",
  reviews: 13,
  sales: 86,
  checked: "September 2, 2026",
};

export const packages = [
  {
    price: 29,
    name: "Two Concept Package",
    scope: "One small focused outdoor area",
    concepts: "2 custom concepts",
    link: "https://orlanogardens.etsy.com/listing/4491719963",
  },
  {
    price: 49,
    name: "Four Concept Package",
    scope: "One small focused outdoor area",
    concepts: "4 custom concepts",
    link: "https://orlanogardens.etsy.com/listing/4491816201",
  },
  {
    price: 89,
    name: "Complete Area Package",
    scope: "One medium area or two connected areas",
    concepts: "4 custom concepts",
    link: "https://orlanogardens.etsy.com/listing/4492579628",
  },
  {
    price: 149,
    name: "Multi Area Package",
    scope: "Large, complex or multiple connected areas",
    concepts: "Scope based concepts",
    link: "https://orlanogardens.etsy.com/listing/4498968254",
  },
];

export const verifiedReviews = [
  {
    name: "Moeiz",
    quote: "Hamza goes above and beyond to meet his customer's needs",
  },
  {
    name: "Bob",
    quote: "Very high quality, more views than advertised.",
  },
  {
    name: "Mariya",
    quote: "Excellent designs, quick turnaround, flexible.",
  },
];

export const premadePlans = [
  {
    slug: "low-maintenance-foundation-bed",
    name: "Low Maintenance Foundation Bed",
    type: "Front foundation",
    image: "/assets/images/front-yard-before-after.webp",
    gallery: [
      "/assets/images/front-yard-before-after.webp",
      "/assets/images/front-yard-card.webp",
      "/assets/images/front-yard-deliverables.webp",
    ],
    summary:
      "A calm layered layout that protects windows, access and mature spacing.",
    description:
      "A structured foundation planting concept for homeowners who want a polished entrance without excessive plant varieties or difficult maintenance.",
    suitableFor: "Straight or gently stepped front foundations",
    dimensions: "Best adapted to beds approximately 4 to 8 feet deep",
    sun: "Part sun to full sun with plant substitutions as needed",
    climate: "Plant choices must be matched to the buyer's local growing zone",
    maintenance: "Low to moderate",
    included: ["Layout concept", "Plant role guide", "Spacing direction", "Material notes", "Setup sequence"],
    plantIdeas: ["Compact evergreen anchors", "Flowering shrubs", "Repeated perennial groups", "Seasonal groundcover"],
    materialIdeas: ["Natural mulch", "Defined bed edge", "Optional low voltage lighting"],
  },
  {
    slug: "modern-driveway-strip",
    name: "Modern Driveway Strip",
    type: "Driveway edge",
    image: "/assets/images/focused-bed-before-after.webp",
    gallery: [
      "/assets/images/focused-bed-before-after.webp",
      "/assets/images/focused-bed-handoff.webp",
      "/assets/images/garden-bed-card.webp",
    ],
    summary:
      "A narrow repeatable composition using controlled planting and a clean material edge.",
    description:
      "A streamlined design direction for long, narrow beds beside a driveway, walk or property edge where repetition and clear sightlines matter.",
    suitableFor: "Narrow driveway strips and linear entrance beds",
    dimensions: "Best adapted to strips approximately 3 to 6 feet deep",
    sun: "Full sun or bright part sun",
    climate: "Select equivalent plants for the local growing zone and exposure",
    maintenance: "Low",
    included: ["Repeatable layout", "Plant role guide", "Spacing direction", "Edge treatment", "Care priorities"],
    plantIdeas: ["Upright evergreen accents", "Compact flowering shrubs", "Ornamental grasses", "Low edging plants"],
    materialIdeas: ["Crisp metal or stone edge", "Dark mulch or gravel", "Optional path lighting"],
  },
  {
    slug: "small-tree-bed",
    name: "Small Tree Bed",
    type: "Focused bed",
    image: "/assets/images/garden-bed-card.webp",
    gallery: [
      "/assets/images/garden-bed-card.webp",
      "/assets/images/focused-bed-before-after.webp",
      "/assets/images/front-yard-card.webp",
    ],
    summary:
      "A simple tree focused plan that avoids overcrowding and decorative clutter.",
    description:
      "A balanced planting ring for a small ornamental or young shade tree, designed to frame the trunk while leaving room for healthy growth and maintenance.",
    suitableFor: "Existing lawn trees and small island beds",
    dimensions: "Best adapted to beds approximately 6 to 12 feet wide",
    sun: "Depends on tree canopy and orientation",
    climate: "Plants must suit the local zone, soil and root competition",
    maintenance: "Low to moderate",
    included: ["Circular layout", "Plant role guide", "Mature spacing notes", "Mulch boundary", "Care checklist"],
    plantIdeas: ["Shade tolerant groundcover", "Compact perennials", "One repeated flowering accent", "Low seasonal texture"],
    materialIdeas: ["Natural mulch", "Soft spade edge", "Optional stone accent"],
  },
  {
    slug: "utility-screening-side-yard",
    name: "Utility Screening Side Yard",
    type: "Side yard",
    image: "/assets/images/side-yard-before-after.webp",
    gallery: [
      "/assets/images/side-yard-before-after.webp",
      "/assets/images/multi-area-card.webp",
      "/assets/images/services-diptych.webp",
    ],
    summary:
      "Selective screening that keeps meters, gates and maintenance access usable.",
    description:
      "A practical side yard concept that softens utility views while preserving access to gates, meters, drainage paths and routine maintenance zones.",
    suitableFor: "Narrow side passages with visible utilities",
    dimensions: "Best adapted to passages at least 5 feet wide",
    sun: "Part sun or shade tolerant substitutions",
    climate: "Screening plants require local zone and mature width checks",
    maintenance: "Moderate",
    included: ["Access aware layout", "Screening strategy", "Plant role guide", "Clearance notes", "Maintenance sequence"],
    plantIdeas: ["Narrow evergreen screens", "Shade tolerant shrubs", "Low groundcover", "Container accents"],
    materialIdeas: ["Stepping surface", "Drainage friendly gravel", "Simple privacy panel where permitted"],
  },
  {
    slug: "patio-border-planting",
    name: "Patio Border Planting",
    type: "Outdoor living",
    image: "/assets/images/patio-before-after.webp",
    gallery: [
      "/assets/images/patio-before-after.webp",
      "/assets/images/patio-handoff.webp",
      "/assets/images/backyard-second-view.webp",
    ],
    summary:
      "A restrained planting frame that softens the patio without shrinking circulation.",
    description:
      "A flexible border concept that gives an existing patio a finished edge while protecting chair clearance, door movement and comfortable circulation.",
    suitableFor: "Rectangular patios and small outdoor dining areas",
    dimensions: "Best adapted to borders approximately 3 to 6 feet deep",
    sun: "Full sun to part sun with suitable substitutions",
    climate: "Final plants must be selected for the buyer's zone and exposure",
    maintenance: "Low to moderate",
    included: ["Patio edge layout", "Plant role guide", "Clearance direction", "Material palette", "Care priorities"],
    plantIdeas: ["Compact evergreen structure", "Soft ornamental grasses", "Long flowering perennials", "Low aromatic edging"],
    materialIdeas: ["Mulch or fine gravel", "Defined edge", "Optional low lighting"],
  },
];
