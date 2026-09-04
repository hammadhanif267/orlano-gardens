import Image from "next/image";
import Link from "next/link";
import ReviewProof from "@/components/ReviewProof";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, packages } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Custom Outdoor Design Service",
  description:
    "Personalized remote outdoor design created from your property photos, priorities, location and preferred style. Packages start at $29 through Etsy.",
  path: "/custom-design-service",
});

const projectTypes = [
  ["Front yards", "Entrances, foundation beds and curb appeal"],
  ["Backyards", "Seating, privacy, planting and open space"],
  ["Patios", "Furniture zones, shade context and planting edges"],
  ["Garden beds", "Focused planting and material direction"],
  ["Side yards", "Circulation, screening and utility access"],
  ["Multiple areas", "One design language across connected spaces"],
];

export default function CustomDesignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Outdoor Design Service",
    serviceType: "Remote digital outdoor design",
    provider: {
      "@type": "ProfessionalService",
      name: "Orlano Gardens",
      url: absoluteUrl("/"),
    },
    areaServed: ["United States", "Canada", "United Kingdom"],
    offers: packages.map((item) => ({
      "@type": "Offer",
      price: item.price,
      priceCurrency: "USD",
      url: item.link,
    })),
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="custom-hero">
        <div className="container custom-hero__grid">
          <div className="custom-hero__copy motion-rise">
            <div className="eyebrow eyebrow--gold">Custom Design Service</div>
            <h1>Your property sets the brief.</h1>
            <p className="lead">
              Send the real space, the problem and the priorities. Orlano
              Gardens creates visual concepts and a practical handoff before you
              purchase materials or arrange local installation.
            </p>
            <div className="btn-row">
              <a className="btn btn--gold" href="#packages">
                Choose Your Package
              </a>
              <Link className="btn btn--light" href="/portfolio">
                See Design Examples
              </Link>
            </div>
            <p className="service-clarifier">
              Remote digital design only. No site visit, construction drawing,
              product delivery or installation.
            </p>
          </div>
          <div className="custom-hero__board motion-rise motion-delay-1">
            <Image
              src="/assets/images/multi-area-hero.webp"
              alt="Custom outdoor design concept across connected property areas"
              width={1200}
              height={900}
              priority
            />
            <div className="custom-hero__note custom-hero__note--one">
              <small>Input</small>
              <strong>Your real photos</strong>
            </div>
            <div className="custom-hero__note custom-hero__note--two">
              <small>Output</small>
              <strong>Clear visual direction</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Suitable projects</div>
              <h2>One service. Many outdoor applications.</h2>
            </div>
            <p>
              Front yard, backyard and patio are not separate services. They are
              project types covered by the same custom process.
            </p>
          </div>
          <div className="project-type-grid">
            {projectTypes.map(([title, copy], index) => (
              <article className="project-type" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container split">
          <div>
            <div className="eyebrow eyebrow--gold">What you receive</div>
            <h2>More than a polished picture.</h2>
            <p>
              The final handoff helps you understand the design direction and
              discuss implementation with local suppliers or professionals.
            </p>
            <Image
              src="/assets/images/project-triptych.webp"
              alt="Outdoor design concept and handoff examples"
              width={1100}
              height={700}
              loading="lazy"
            />
          </div>
          <div className="deliverable-stack">
            <div>
              <span>01</span>
              <strong>Custom visual concepts</strong>
              <p>Directions created around the submitted view and goals.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Plant and material guidance</strong>
              <p>A practical palette to verify and source locally.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Layout direction</strong>
              <p>Placement, spacing and relationship guidance.</p>
            </div>
            <div>
              <span>04</span>
              <strong>Setup and care notes</strong>
              <p>A clear next step after the preferred concept is selected.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="packages">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Choose by scope</div>
              <h2>Four packages. One official Etsy checkout.</h2>
            </div>
            <Link className="text-link" href="/pricing">
              Compare every package detail →
            </Link>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <article
                className={`package-card${item.price === 89 ? " package-card--featured" : ""}`}
                key={item.price}
              >
                {item.price === 89 && (
                  <span className="package-card__label">Complete area</span>
                )}
                <span className="eyebrow">{item.concepts}</span>
                <h3>{item.name}</h3>
                <div className="package-card__price">${item.price}</div>
                <p>{item.scope}</p>
                <a
                  className={
                    item.price === 89 ? "btn btn--primary" : "btn btn--outline"
                  }
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Choose on Etsy <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Photo requirements</div>
              <h2>Show the complete problem, not one attractive angle.</h2>
            </div>
          </div>
          <div className="grid grid--4">
            <article className="card">
              <span className="card__number">01</span>
              <h3>Wide view</h3>
              <p>Capture the entire design area and its boundaries.</p>
            </article>
            <article className="card">
              <span className="card__number">02</span>
              <h3>Left angle</h3>
              <p>Show depth, access and adjacent features.</p>
            </article>
            <article className="card">
              <span className="card__number">03</span>
              <h3>Right angle</h3>
              <p>Reveal the opposite side and anything hidden.</p>
            </article>
            <article className="card">
              <span className="card__number">04</span>
              <h3>Slow video</h3>
              <p>Walk the area steadily when relationships remain unclear.</p>
            </article>
          </div>
        </div>
      </section>
      <ReviewProof />
    </main>
  );
}
