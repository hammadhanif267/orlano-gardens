import Image from "next/image";
import Link from "next/link";
import ReviewProof from "@/components/ReviewProof";
import StructuredData from "@/components/StructuredData";
import { guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, ETSY_URL, etsyProof } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Remote Digital Outdoor Design",
  description:
    "See your real yard redesigned before you buy plants or materials. Compare custom outdoor design packages and ready made garden plans from Orlano Gardens.",
  path: "/",
});

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Remote digital outdoor design",
    provider: {
      "@type": "ProfessionalService",
      name: "Orlano Gardens",
      url: absoluteUrl("/"),
    },
    areaServed: ["United States", "Canada", "United Kingdom"],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "29",
      highPrice: "149",
      priceCurrency: "USD",
      url: absoluteUrl("/pricing"),
    },
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="hero home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy motion-rise">
            <div className="eyebrow">Custom designs from your photos</div>
            <h1>
              <span className="home-hero__line">See your space</span>
              <span className="home-hero__line">
                <span className="accent">before</span> you
              </span>
              <span className="home-hero__line">spend.</span>
            </h1>
            <p className="lead">
              Receive realistic outdoor concepts, practical layout direction,
              and plant and material guidance based on your real property.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/custom-design-service">
                Get Your Custom Design
              </Link>
              <Link className="btn btn--outline" href="/portfolio">
                View Portfolio
              </Link>
            </div>
            <div className="hero__proofs">
              <span className="chip">Etsy {etsyProof.status}</span>
              <span className="chip chip--rating">
                <span className="chip__stars" aria-hidden="true">★★★★★</span>
                {etsyProof.rating} client rating
              </span>
              <span className="chip">3 to 5 working days</span>
            </div>
            <p className="service-clarifier">
              Remote digital design only. Physical landscaping and installation
              are not included.
            </p>
          </div>
          <div className="home-hero__visual motion-rise motion-delay-1">
            <span className="image-label">
              Original Space · Digital Design Concept
            </span>
            <Image
              src="/assets/images/hero-comparison.webp"
              alt="Original front yard beside a custom digital design concept"
              width={1400}
              height={1050}
              priority
              sizes="(max-width: 960px) 100vw, 54vw"
            />
            <div className="hero__caption">
              <strong>One real space. A clearer direction.</strong>
              <span>
                Compare the idea before committing to plants, materials or local
                installation.
              </span>
            </div>
          </div>
        </div>
      </section>
      <ReviewProof compact />
      <section className="section why-important">
        <div className="container why-important__grid">
          <div>
            <div className="eyebrow">Why this is important</div>
            <h2>Every outdoor choice affects the next one.</h2>
          </div>
          <div className="why-important__copy">
            <p className="lead">
              Plants, materials and labor become expensive once they are on
              site. A clear real space mockup lets you test the full direction
              while changes are still simple.
            </p>
            <div className="why-important__points">
              <article>
                <span>01</span>
                <h3>See scale before buying</h3>
                <p>Understand how planting, furniture and hard surfaces relate to the real property.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Prevent costly restarts</h3>
                <p>Resolve layout and style conflicts before materials, plants or local labor are committed.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Give installers clarity</h3>
                <p>Share one coherent direction with suppliers and the landscape professional you choose.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section service-choice">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Two ways to start</div>
              <h2>Choose the level of help you actually need.</h2>
            </div>
            <p>
              Custom design responds to your property. Premade designs provide a
              ready direction for a compatible space.
            </p>
          </div>
          <div className="choice-grid">
            <article className="choice-card choice-card--custom motion-rise">
              <div className="choice-card__number">01</div>
              <div>
                <span className="tag">Personalized service</span>
                <h3>Custom Design Service</h3>
                <p>
                  Send your property photos, location, preferences and
                  priorities. Receive concepts built around the real space.
                </p>
                <ul className="check-list">
                  <li>Based on your exact property</li>
                  <li>Four package levels from $29</li>
                  <li>One focused revision</li>
                </ul>
                <Link className="btn btn--gold" href="/custom-design-service">
                  Explore Custom Design
                </Link>
              </div>
            </article>
            <article className="choice-card choice-card--premade motion-rise motion-delay-1">
              <div className="choice-card__number">02</div>
              <div>
                <span className="tag">Ready made direction</span>
                <h3>Ready-to-Use Designs</h3>
                <p>
                  Choose a ready made garden plan for a compatible common
                  outdoor space and review all details before buying on Etsy.
                </p>
                <ul className="check-list">
                  <li>Ready to browse by space type</li>
                  <li>Clear suitability and care notes</li>
                  <li>Simple Etsy purchase route</li>
                </ul>
                <Link className="btn btn--primary" href="/ready-to-use-designs">
                  Browse Ready-to-Use Designs
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow--gold">
                What the service solves
              </div>
              <h2>Design confidence before site work.</h2>
            </div>
            <p>
              Every concept separates visual planning from the local checks
              required before installation.
            </p>
          </div>
          <div className="process-line">
            <div className="process-step">
              <span className="process-step__number">01</span>
              <h3>Share the space</h3>
              <p>
                Send clear views, location, measurements and the decisions you
                need to make.
              </p>
            </div>
            <div className="process-step">
              <span className="process-step__number">02</span>
              <h3>Compare direction</h3>
              <p>
                Review concepts shaped around the actual property and
                priorities.
              </p>
            </div>
            <div className="process-step">
              <span className="process-step__number">03</span>
              <h3>Select one</h3>
              <p>
                Choose the direction that fits your style, budget and
                maintenance level.
              </p>
            </div>
            <div className="process-step">
              <span className="process-step__number">04</span>
              <h3>Use the handoff</h3>
              <p>
                Take the plan to local suppliers or your chosen landscape
                professional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Garden Guides</div>
              <h2>Plan with evidence, not trend images.</h2>
            </div>
            <p>
              Ten source linked guides cover current outdoor priorities and the
              decisions homeowners repeatedly get wrong.
            </p>
          </div>
          <div className="guide-grid">
            {guides.slice(0, 3).map((guide) => (
              <Link
                className="guide-card guide-card--link"
                href={`/garden-guides/${guide.slug}`}
                key={guide.slug}
              >
                <Image
                  src={guide.image}
                  alt=""
                  width={760}
                  height={475}
                  loading="lazy"
                />
                <span className="guide-card__body">
                  <span className="guide-card__meta">
                    <span>{guide.category}</span>
                    <span>{guide.readTime}</span>
                  </span>
                  <strong className="guide-card__title">{guide.title}</strong>
                  <span>{guide.excerpt}</span>
                  <span className="text-link">Read guide →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <div className="eyebrow eyebrow--gold">Ready to move forward?</div>
            <h2>Choose the package that matches the real scope.</h2>
            <p>
              Official payment and order communication take place through Etsy.
            </p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/pricing">
              Compare Packages
            </Link>
            <a
              className="btn btn--light"
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Etsy <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
