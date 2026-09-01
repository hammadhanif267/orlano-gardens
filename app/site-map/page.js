import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Site Map | Orlano Gardens",
  description: "A complete human-readable index of every Orlano Gardens website page.",
  path: "/site-map"
});

const structuredData = {
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"Orlano Gardens",
  "url":"https://orlanogardens.com/site-map",
  "email":"orlanogardens@gmail.com",
  "sameAs":["https://orlanogardens.etsy.com/","https://www.instagram.com/orlanogardens","https://www.facebook.com/orlanogardens"],
  "description":"Remote digital outdoor design created from client-supplied property photos."
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main id="main-content">
      <section className="hero"><div className="container"><div className="eyebrow">Site Map</div><h1>Every page. No dead ends.</h1><p className="lead">Use this index to reach every service, project, guide and policy page in the website.</p></div></section>
      <section className="section"><div className="container"><div className="grid grid--2"><article className="card"><h2 style={{fontSize: "2rem"}}>Main</h2><ul className="plain-list"><li><Link href="/">Home</Link></li><li><a href="/services">Services</a></li><li><a href="/projects">Projects</a></li><li><a href="/testimonials">Testimonials</a></li><li><a href="/pricing">Pricing</a></li><li><a href="/garden-guides">Garden Guides</a></li><li><a href="/about">About</a></li><li><a href="/contact">Contact</a></li><li><a href="/faq">FAQ</a></li><li><a href="/get-custom-design">Get Your Custom Design</a></li></ul></article><article className="card"><h2 style={{fontSize: "2rem"}}>Services</h2><ul className="plain-list"><li><a href="/services/front-yard-design">Front Yard Design</a></li><li><a href="/services/backyard-design">Backyard Design</a></li><li><a href="/services/garden-bed-entry">Garden Bed + Entry</a></li><li><a href="/services/patio-outdoor-living">Patio + Outdoor Living</a></li><li><a href="/services/multi-area-property">Multi-Area Property</a></li></ul></article><article className="card"><h2 style={{fontSize: "2rem"}}>Projects + Guides</h2><ul className="plain-list"><li><a href="/projects/backyard-zoning-case-study">Backyard Zoning Case Study</a></li><li><a href="/garden-guides/front-yard-bed-five-years">Front Yard Bed in Five Years</a></li><li><a href="/garden-guides/backyard-zoning">Backyard Zoning</a></li><li><a href="/garden-guides/low-maintenance-front-yard">Low-Maintenance Front Yards</a></li><li><a href="/garden-guides/choosing-landscape-stone">Choosing Landscape Stone</a></li></ul></article><article className="card"><h2 style={{fontSize: "2rem"}}>Legal + Access</h2><ul className="plain-list"><li><a href="/privacy-policy">Privacy Policy</a></li><li><a href="/cookie-policy">Cookie Policy</a></li><li><a href="/terms-and-conditions">Terms + Conditions</a></li><li><a href="/disclaimer">Disclaimer</a></li><li><a href="/accessibility">Accessibility</a></li></ul></article></div></div></section>
      </main>
    </>
  );
}
