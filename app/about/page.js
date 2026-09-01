import { buildMetadata } from "@/lib/metadata";
import Testimonials from "@/components/Testimonials";

export const metadata = buildMetadata({
  title: "About Orlano Gardens | Orlano Gardens",
  description:
    "Learn how Orlano Gardens turns real property photos and priorities into honest remote digital outdoor design direction.",
  path: "/about",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orlano Gardens",
  url: "https://orlanogardens.com/about",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content">
        <section className="hero">
          <div className="container hero__grid">
            <div>
              <div className="eyebrow">About Orlano Gardens</div>
              <h1>
                See the direction before you{" "}
                <span className="accent">build it.</span>
              </h1>
              <p className="lead">
                Orlano Gardens is an independent remote design studio helping
                homeowners turn real photos and priorities into clear outdoor
                design direction.
              </p>
              <div className="hero__proofs">
                <span className="chip">80+ design projects</span>
                <span className="chip">100% remote</span>
                <span className="chip">Digital design only</span>
              </div>
              <a className="btn btn--primary" href="/get-custom-design">
                Get Your Custom Design
              </a>
            </div>
            <div className="hero__visual">
              <span className="image-label">Built from your actual space</span>
              <img
                className="hero__image"
                src="/assets/images/project-triptych.webp"
                alt="Three Orlano Gardens digital design projects"
              />
              <div className="hero__caption">
                <strong>
                  Photos and priorities in. Practical direction out.
                </strong>
                <span>
                  Every project is shaped around the real site—not a generic
                  garden template.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Why this work exists</div>
                <h2>The hard part is choosing before you can see.</h2>
              </div>
              <p>
                Outdoor projects become expensive quickly. A visual direction
                makes choices more deliberate.
              </p>
            </div>
            <div className="grid grid--3">
              <article className="card">
                <span className="card__number">01</span>
                <h3>The uncertainty</h3>
                <p>
                  Plant lists, materials and layout ideas are difficult to judge
                  in isolation.
                </p>
              </article>
              <article className="card">
                <span className="card__number">02</span>
                <h3>The method</h3>
                <p>
                  Start with actual property photos, priorities, constraints and
                  local context.
                </p>
              </article>
              <article className="card">
                <span className="card__number">03</span>
                <h3>The value</h3>
                <p>
                  Compare a visual direction before committing money, labor and
                  permanent choices.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section section--dark">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Clear service boundaries</div>
                <h2>A design studio—not a landscaping crew.</h2>
              </div>
              <p>
                The work stays focused on remote visual design and practical
                decision support.
              </p>
            </div>
            <div className="grid grid--2">
              <article className="card card--dark">
                <div className="eyebrow eyebrow--gold">
                  What Orlano Gardens does
                </div>
                <h3>Remote design direction</h3>
                <ul className="check-list">
                  <li>Realistic AI-assisted digital concepts</li>
                  <li>Plant and material direction</li>
                  <li>Layout and placement guidance</li>
                  <li>Tool and setup guidance</li>
                  <li>One focused revision</li>
                </ul>
              </article>
              <article className="card">
                <div className="eyebrow" style={{ color: "var(--clay)" }}>
                  What it does not include
                </div>
                <h3>Physical project delivery</h3>
                <ul className="plain-list">
                  <li>Property visits or site measurement</li>
                  <li>Installation or landscaping labor</li>
                  <li>Plants, products or material delivery</li>
                  <li>Contractor, permit or engineering services</li>
                  <li>Construction documents or guarantees</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Design standards</div>
                <h2>Five principles behind every project.</h2>
              </div>
              <p>These standards keep the work useful, grounded and honest.</p>
            </div>
            <div className="grid grid--3">
              <article className="card">
                <span className="card__number">01</span>
                <h3>Site fidelity</h3>
                <p>
                  Design from the supplied photos and visible conditions—not a
                  generic template.
                </p>
              </article>
              <article className="card">
                <span className="card__number">02</span>
                <h3>Mature scale</h3>
                <p>
                  Consider growth, clearance, circulation and long-term
                  relationships.
                </p>
              </article>
              <article className="card">
                <span className="card__number">03</span>
                <h3>Buildable restraint</h3>
                <p>
                  Prioritize a coherent direction instead of filling every area.
                </p>
              </article>
              <article className="card">
                <span className="card__number">04</span>
                <h3>Practical handoff</h3>
                <p>
                  Pair the visual concept with plant, material and placement
                  guidance.
                </p>
              </article>
              <article className="card">
                <span className="card__number">05</span>
                <h3>Honest boundaries</h3>
                <p>
                  Separate visualization from installation, engineering and site
                  verification.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section section--sage">
          <div className="container split">
            <div className="image-frame">
              <span className="image-label">Example client handoff</span>
              <img
                src="/assets/images/front-yard-deliverables.webp"
                alt="Example custom outdoor design handoff"
              />
            </div>
            <div>
              <div className="eyebrow">The working method</div>
              <h2>Real photos in. Clear direction out.</h2>
              <div
                className="process-line"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <div className="process-step">
                  <span className="process-step__number">01</span>
                  <h3>Share</h3>
                  <p>Photos, video, measurements, location and priorities.</p>
                </div>
                <div className="process-step">
                  <span className="process-step__number">02</span>
                  <h3>Confirm</h3>
                  <p>Agree the scope before payment.</p>
                </div>
                <div className="process-step">
                  <span className="process-step__number">03</span>
                  <h3>Develop</h3>
                  <p>Build concepts around real limits.</p>
                </div>
                <div className="process-step">
                  <span className="process-step__number">04</span>
                  <h3>Handoff</h3>
                  <p>
                    Receive visuals and guidance in 3–5 working days after
                    complete inputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Proof through the work</div>
                <h2>80+ custom design projects.</h2>
              </div>
            </div>
            <div className="grid grid--3">
              <div className="image-frame">
                <span className="image-label">Digital Design Concept</span>
                <img
                  src="/assets/images/front-yard-card.webp"
                  alt="Front yard concept"
                />
                <h3>Front yard direction</h3>
                <p>Curb appeal, scale, access and planting structure.</p>
              </div>
              <div className="image-frame">
                <span className="image-label">Digital Design Concept</span>
                <img
                  src="/assets/images/backyard-card.webp"
                  alt="Backyard concept"
                />
                <h3>Backyard direction</h3>
                <p>Zones, circulation, privacy and outdoor use.</p>
              </div>
              <div className="image-frame">
                <span className="image-label">Digital Design Concept</span>
                <img
                  src="/assets/images/garden-bed-card.webp"
                  alt="Focused garden bed concept"
                />
                <h3>Focused area direction</h3>
                <p>Garden beds, entries and small high-impact spaces.</p>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <section className="section section--tight section--ivory">
          <div className="container">
            <div className="section-heading" style={{ marginBottom: 0 }}>
              <div>
                <div className="eyebrow">Transparency</div>
                <h2>Digital by design.</h2>
              </div>
              <p>
                Concept imagery is AI-assisted digital visualization—not a
                photograph of completed installation. Final choices should be
                checked against local climate, utilities, codes, product
                instructions and site conditions.
              </p>
            </div>
          </div>
        </section>
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
