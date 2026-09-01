import { buildMetadata } from "@/lib/metadata";
import Testimonials from "@/components/Testimonials";

export const metadata = buildMetadata({
  title: "Remote Digital Outdoor Design | Orlano Gardens",
  description:
    "Custom front yard, backyard and outdoor design concepts created from photos of your real property.",
  path: "/",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orlano Gardens",
  url: "https://orlanogardens.com/",
  email: "orlanogardens@gmail.com",
  sameAs: [
    "https://orlanogardens.etsy.com/",
    "https://www.instagram.com/orlanogardens",
    "https://www.facebook.com/orlanogardens",
  ],
  description:
    "Remote digital outdoor design created from client-supplied property photos.",
};

export default function Page() {
  return (
    <>
      {/* Remove decorative curves from Home page, CTA and footer */}
      <style>{`
        .hero::before,
        .hero::after,
        .cta-band::before,
        .cta-band::after,
        footer::before,
        footer::after,
        .footer::before,
        .footer::after {
          display: none !important;
          content: none !important;
        }

        .hero-rating {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 18px;
          font-size: 14px;
          line-height: 1.4;
        }

        .hero-rating__stars {
          color: #d29b2e;
          font-size: 18px;
          letter-spacing: 2px;
          line-height: 1;
          white-space: nowrap;
        }

        .hero-rating__text {
          color: #173d31;
          font-weight: 500;
        }

        @media (max-width: 640px) {
          .hero-rating {
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 15px;
          }

          .hero-rating__stars {
            font-size: 16px;
            letter-spacing: 1px;
          }

          .hero-rating__text {
            font-size: 13px;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main id="main-content">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <div className="eyebrow">Custom designs from your photos</div>

              <h1 className="hero__title">
                See your space <span className="accent">before</span> you spend.
              </h1>

              <p className="lead">
                Send photos of your real outdoor space and receive custom visual
                concepts, plant and material direction, and a clear layout
                before you buy or install anything.
              </p>

              {/* BUTTONS */}
              <div className="btn-row">
                <a className="btn btn--primary" href="/get-custom-design">
                  Get Your Custom Design
                </a>

                <a className="btn btn--outline" href="/projects">
                  View Projects
                </a>
              </div>

              <div className="hero__proofs">
                <span className="chip">Designed from your photos</span>

                <span className="chip">3–5 working days</span>

                <span className="chip">80+ projects</span>
              </div>
              {/* 5 Stars Section */}
              <div
                className="hero-rating"
                aria-label="5-star feedback from verified Etsy clients"
              >
                <span className="hero-rating__stars" aria-hidden="true">
                  ★★★★★
                </span>

                <span
                  className="hero-rating__text"
                  style={{ fontWeight: "600" }}
                >
                  5-star feedback from verified Etsy clients
                </span>
              </div>

              <p className="service-clarifier">
                Remote digital design only. Physical landscaping and
                installation are not included.
              </p>
            </div>

            <div className="hero__visual">
              <span className="image-label">Digital Design Concept</span>

              <img
                className="hero__image"
                src="/assets/images/hero-comparison.webp"
                alt="Client front yard beside a custom digital design concept"
              />

              <div className="hero__caption">
                <strong>One real space. A clearer direction.</strong>

                <span>
                  Compare the starting point with a practical concept before
                  committing to plants or materials.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TESTIMONIALS
        ========================================================= */}
        <Testimonials />

        {/* =========================================================
            DESIGN SERVICES
        ========================================================= */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Design services</div>

                <h2>Choose the space that needs direction.</h2>
              </div>

              <p>
                Every project begins with the actual shape, scale, light and
                constraints of your property—not a generic inspiration photo.
              </p>
            </div>

            <div className="grid grid--3">
              <a className="media-card" href="/services/front-yard-design">
                <img
                  src="/assets/images/front-yard-card.webp"
                  alt="Front Yard Design digital design example"
                />

                <span className="image-label">Digital Design Concept</span>

                <span className="media-card__body">
                  <span className="eyebrow">01 / Most requested</span>

                  <h3>Front Yard Design</h3>

                  <p>
                    Foundation beds, entrances, curb appeal and awkward open
                    areas.
                  </p>
                </span>

                <span className="media-card__arrow" aria-hidden="true">
                  →
                </span>
              </a>

              <a className="media-card" href="/services/backyard-design">
                <img
                  src="/assets/images/backyard-card.webp"
                  alt="Backyard Design digital design example"
                />

                <span className="image-label">Digital Design Concept</span>

                <span className="media-card__body">
                  <span className="eyebrow">02 / Outdoor living</span>

                  <h3>Backyard Design</h3>

                  <p>Seating, privacy, planting and practical movement.</p>
                </span>

                <span className="media-card__arrow" aria-hidden="true">
                  →
                </span>
              </a>

              <a className="media-card" href="/services/garden-bed-entry">
                <img
                  src="/assets/images/garden-bed-card.webp"
                  alt="Garden Bed + Entry digital design example"
                />

                <span className="image-label">Digital Design Concept</span>

                <span className="media-card__body">
                  <span className="eyebrow">03 / Focused spaces</span>

                  <h3>Garden Bed + Entry</h3>

                  <p>Layered planting for compact, high-impact areas.</p>
                </span>

                <span className="media-card__arrow" aria-hidden="true">
                  →
                </span>
              </a>

              <a className="media-card" href="/services/patio-outdoor-living">
                <img
                  src="/assets/images/patio-card.webp"
                  alt="Patio + Outdoor Living digital design example"
                />

                <span className="image-label">Digital Design Concept</span>

                <span className="media-card__body">
                  <span className="eyebrow">04 / Function + style</span>

                  <h3>Patio + Outdoor Living</h3>

                  <p>Clear zones for gathering, circulation and planting.</p>
                </span>

                <span className="media-card__arrow" aria-hidden="true">
                  →
                </span>
              </a>

              <a className="media-card" href="/services/multi-area-property">
                <img
                  src="/assets/images/multi-area-card.webp"
                  alt="Multi-Area Property digital design example"
                />

                <span className="image-label">Digital Design Concept</span>

                <span className="media-card__body">
                  <span className="eyebrow">05 / Complete scope</span>

                  <h3>Multi-Area Property</h3>

                  <p>
                    One consistent direction across connected outdoor spaces.
                  </p>
                </span>

                <span className="media-card__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================= */}
        <section className="section section--dark">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">How it works</div>

                <h2>From photos to a practical design plan.</h2>
              </div>

              <p>
                A focused four-step process keeps the work grounded in your real
                property.
              </p>
            </div>

            <div className="process-line">
              <div className="process-step">
                <span className="process-step__number">01</span>

                <h3>Share your space</h3>

                <p>
                  Send clear photos, location, measurements and what must stay
                  or change.
                </p>
              </div>

              <div className="process-step">
                <span className="process-step__number">02</span>

                <h3>Receive concepts</h3>

                <p>
                  Compare custom directions built specifically around the
                  submitted area.
                </p>
              </div>

              <div className="process-step">
                <span className="process-step__number">03</span>

                <h3>Select a direction</h3>

                <p>
                  Choose the concept that fits your style, budget and
                  maintenance priorities.
                </p>
              </div>

              <div className="process-step">
                <span className="process-step__number">04</span>

                <h3>Use the handoff</h3>

                <p>
                  Follow the plant, material and layout guidance yourself or
                  with a local installer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SELECTED WORK
        ========================================================= */}
        <section className="section section--ivory">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Selected work</div>

                <h2>Design decisions—not generic inspiration.</h2>
              </div>

              <p>
                Every transformed image remains clearly labeled as a digital
                design concept.
              </p>
            </div>

            <div className="comparison-card">
              <img
                src="/assets/images/project-triptych.webp"
                alt="Three Orlano Gardens digital outdoor design concepts"
              />

              <div className="comparison-card__labels">
                <span>Client spaces</span>

                <span>Digital design concepts</span>
              </div>

              <div className="comparison-card__body">
                <h3>Real properties. Different constraints.</h3>

                <p>
                  Front yard hierarchy, backyard zoning and focused-space
                  planting—each built from the supplied view.
                </p>
              </div>
            </div>

            <div className="btn-row" style={{ marginTop: "1.4rem" }}>
              <a className="btn btn--primary" href="/projects">
                Explore Project Thinking
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY DESIGN FIRST
        ========================================================= */}
        <section className="section">
          <div className="container split">
            <div>
              <div className="eyebrow">Why design first</div>

              <h2>Remove the expensive guesswork.</h2>

              <p className="lead">
                A plant list alone cannot show scale, rhythm, circulation or how
                materials work together. A visual direction lets you compare
                those decisions before permanent work begins.
              </p>

              <ul className="check-list">
                <li>See the effect of mature scale and clearances.</li>

                <li>Compare material and planting directions.</li>

                <li>Protect windows, paths, drainage and utility access.</li>

                <li>
                  Give a local installer a clearer discussion starting point.
                </li>
              </ul>
            </div>

            <div className="card card--dark">
              <span className="card__number">80+</span>

              <h3>Custom digital projects completed.</h3>

              <p>
                Front yards, backyards, patios, focused beds and connected
                properties—each beginning with client-supplied photographs and
                priorities.
              </p>

              <a className="btn btn--gold" href="/about">
                About the Studio
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            PACKAGES
        ========================================================= */}
        <section className="section section--sage">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Clear packages</div>

                <h2>Choose scope, not clutter.</h2>
              </div>

              <p>
                The correct package depends on the size and complexity of the
                real property.
              </p>
            </div>

            <div className="package-grid">
              <article className="package-card">
                <span className="eyebrow">Small / 2 concepts</span>

                <h3>Focused Start</h3>

                <div className="package-card__price">$29</div>

                <p>
                  One small bed, mailbox, porch corner or similarly focused
                  area.
                </p>

                <a className="btn btn--outline" href="/pricing">
                  See Details
                </a>
              </article>

              <article className="package-card">
                <span className="eyebrow">Small / 4 concepts</span>

                <h3>Focused Choice</h3>

                <div className="package-card__price">$49</div>

                <p>More directions for one compact outdoor area.</p>

                <a className="btn btn--outline" href="/pricing">
                  See Details
                </a>
              </article>

              <article className="package-card package-card--featured">
                <span className="package-card__label">Most versatile</span>

                <span className="eyebrow">Medium / 4 concepts</span>

                <h3>Complete Area</h3>

                <div className="package-card__price">$89</div>

                <p>
                  One medium yard or patio, or two directly connected spaces.
                </p>

                <a className="btn btn--primary" href="/pricing">
                  See Details
                </a>
              </article>

              <article className="package-card">
                <span className="eyebrow">Large / complex</span>

                <h3>Multi-Area</h3>

                <div className="package-card__price">$149</div>

                <p>
                  A large property or several spaces that need one direction.
                </p>

                <a className="btn btn--outline" href="/pricing">
                  See Details
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            GARDEN GUIDES
        ========================================================= */}
        <section className="section section--ivory">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Garden Guides</div>

                <h2>Useful planning before plants are purchased.</h2>
              </div>

              <p>
                Original, practical guidance focused on mature scale, site
                constraints, materials and maintenance.
              </p>
            </div>

            <div className="guide-grid">
              <article className="guide-card">
                <img
                  src="/assets/images/front-yard-before-after.webp"
                  alt="Front yard before and digital concept"
                />

                <div className="guide-card__body">
                  <div className="guide-card__meta">
                    <span>Front yard planning</span>

                    <span>9 min</span>
                  </div>

                  <h3>
                    How to plan a front yard bed that still works in five years
                  </h3>

                  <p>
                    Build around mature size, clear access, drainage and
                    realistic maintenance.
                  </p>

                  <a href="/garden-guides/front-yard-bed-five-years">
                    Read article →
                  </a>
                </div>
              </article>

              <article className="guide-card">
                <img
                  src="/assets/images/backyard-zones.webp"
                  alt="Backyard zones digital layout"
                />

                <div className="guide-card__body">
                  <div className="guide-card__meta">
                    <span>Backyard planning</span>

                    <span>8 min</span>
                  </div>

                  <h3>Plan a backyard around use—not leftover space</h3>

                  <p>
                    Protect circulation and open ground while creating useful
                    outdoor rooms.
                  </p>

                  <a href="/garden-guides/backyard-zoning">Read article →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <div className="eyebrow eyebrow--gold">
                Ready when the space is
              </div>

              <h2>Start with the actual space.</h2>

              <p>
                Share clear photos and priorities so the correct scope can be
                confirmed before Etsy checkout.
              </p>
            </div>

            <a className="btn btn--gold" href="/get-custom-design">
              Get Your Custom Design
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
