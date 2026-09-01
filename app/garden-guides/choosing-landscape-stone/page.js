import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title:
    "How to choose landscape stone without making the bed look busy | Orlano Gardens",
  description:
    "Use stone as a supporting surface: limit colors, control the edge, respect drainage and make sure the material can be maintained.",
  path: "/garden-guides/choosing-landscape-stone",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orlano Gardens",
  url: "https://orlanogardens.com/garden-guides/choosing-landscape-stone",
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
        <div
          className="article-progress"
          data-article-progress=""
          aria-hidden="true"
        ></div>
        <header className="article-header">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/garden-guides">Garden Guides</Link>
              <span>/</span>
              <span aria-current="page">Materials</span>
            </nav>
            <span className="tag">Materials</span>
            <h1>
              How to choose landscape stone without making the bed look busy
            </h1>
            <p className="article-deck">
              Use stone as a supporting surface: limit colors, control the edge,
              respect drainage and make sure the material can be maintained.
            </p>
            <div className="article-meta">
              <span>Written by Orlano Gardens</span>
              <span>Updated August 24, 2026</span>
              <span>8 minute read</span>
              <button
                className="btn btn--outline btn--sm"
                type="button"
                data-copy-link=""
              >
                Copy link
              </button>
              <button
                className="btn btn--outline btn--sm"
                type="button"
                data-print=""
              >
                Print
              </button>
            </div>
          </div>
        </header>
        <section className="section">
          <div className="container">
            <div className="article-layout">
              <nav
                className="article-toc"
                aria-label="Article contents"
                data-article-toc=""
              >
                <strong>In this article</strong>
                <a href="#section-1">01. Start with one dominant material</a>
                <a href="#section-2">02. Match stone scale to the bed</a>
                <a href="#section-3">03. Protect drainage and the building</a>
                <a href="#section-4">04. Use fabric selectively</a>
                <a href="#section-5">05. Judge maintenance honestly</a>
              </nav>
              <article className="article-body" data-article="">
                <p>
                  Stone can make a small outdoor bed look crisp, but too many
                  colors and uncontrolled borders turn it into visual noise.
                </p>
                <p>
                  Choose the material by function, scale and maintenance—not by
                  selecting every attractive bag at the supplier.
                </p>
                <div className="pull-quote">
                  Plan for the mature, working property—not the temporary
                  appearance on installation day.
                </div>
                <section>
                  <h2 id="section-1">Start with one dominant material</h2>
                  <p>
                    Most small beds need one primary surface. A second stone
                    should define a specific border or focal area, not fill
                    leftover shapes.
                  </p>
                  <p>
                    Repeat the same material elsewhere only when it helps
                    connect the property.
                  </p>
                  <h3>Use this check</h3>
                  <ul>
                    <li>One dominant color</li>
                    <li>One controlled contrast</li>
                    <li>Consistent stone size</li>
                    <li>A deliberate border</li>
                  </ul>
                </section>
                <section>
                  <h2 id="section-2">Match stone scale to the bed</h2>
                  <p>
                    Large rock overwhelms narrow beds. Very small gravel
                    migrates and shows debris quickly.
                  </p>
                  <p>
                    Compare the particle size with the bed depth, plant mass and
                    distance from which the area is viewed.
                  </p>
                  <h3>Use this check</h3>
                  <ul>
                    <li>Bed width</li>
                    <li>Plant mass</li>
                    <li>Foot traffic</li>
                    <li>Leaf debris</li>
                  </ul>
                  <figure>
                    <img
                      src="/assets/images/focused-bed-handoff.webp"
                      alt="Illustrated materials planning example"
                    />
                    <figcaption>
                      Digital Design Concept. Example only; verify final choices
                      against the real site and local requirements.
                    </figcaption>
                  </figure>
                  <div
                    className="ad-placeholder"
                    aria-label="Reserved advertising position"
                  >
                    Advertisement
                  </div>
                </section>
                <section>
                  <h2 id="section-3">Protect drainage and the building</h2>
                  <p>
                    Do not pile stone against siding, vents, door thresholds or
                    drainage outlets.
                  </p>
                  <p>
                    Confirm that water still moves away from the structure and
                    that downspouts remain functional.
                  </p>
                  <h3>Use this check</h3>
                  <ul>
                    <li>Foundation clearance</li>
                    <li>Downspout discharge</li>
                    <li>Low-point drainage</li>
                    <li>Utility access</li>
                  </ul>
                </section>
                <section>
                  <h2 id="section-4">Use fabric selectively</h2>
                  <p>
                    A suitable permeable separator may help under decorative
                    stone when installed correctly.
                  </p>
                  <p>
                    Do not assume the same approach belongs under organic mulch
                    where soil improvement and plant spread are expected.
                  </p>
                  <h3>Use this check</h3>
                  <ul>
                    <li>Permeability</li>
                    <li>Planting openings</li>
                    <li>Edge containment</li>
                    <li>Future removal</li>
                  </ul>
                  <figure>
                    <img
                      src="/assets/images/focused-bed-handoff.webp"
                      alt="Illustrated materials planning example"
                    />
                    <figcaption>
                      Digital Design Concept. Example only; verify final choices
                      against the real site and local requirements.
                    </figcaption>
                  </figure>
                  <div
                    className="ad-placeholder"
                    aria-label="Reserved advertising position"
                  >
                    Advertisement
                  </div>
                </section>
                <section>
                  <h2 id="section-5">Judge maintenance honestly</h2>
                  <p>
                    Light stone shows soil and organic debris. Dark stone
                    absorbs heat and can emphasize dust.
                  </p>
                  <p>
                    Choose the finish you are willing to clean and top up—not
                    the one that looks best only on installation day.
                  </p>
                  <h3>Use this check</h3>
                  <ul>
                    <li>Heat exposure</li>
                    <li>Leaf cleanup</li>
                    <li>Weed control</li>
                    <li>Material availability</li>
                  </ul>
                </section>
                <section>
                  <h2 id="final-check">Before you act</h2>
                  <p>
                    Confirm plant suitability, utilities, drainage, permits,
                    property boundaries and product installation requirements
                    using authoritative local sources. This article provides
                    general planning guidance, not engineering, horticultural
                    certification or construction approval.
                  </p>
                </section>
                <div className="article-callout article-callout--dark">
                  <div className="eyebrow eyebrow--gold">
                    Custom digital design
                  </div>
                  <h3>See your space before you spend.</h3>
                  <p>
                    Send clear photos and priorities. The correct scope is
                    confirmed before Etsy checkout.
                  </p>
                  <a className="btn btn--gold" href="/get-custom-design">
                    View Design Packages
                  </a>
                </div>
              </article>
              <aside className="article-aside">
                <div className="article-callout article-callout--dark">
                  <div className="eyebrow eyebrow--gold">
                    Designing your space?
                  </div>
                  <h3>See the direction first.</h3>
                  <p>
                    Receive custom visual concepts, plant direction and layout
                    guidance from your real photos.
                  </p>
                  <a
                    className="btn btn--gold btn--sm"
                    href="/get-custom-design"
                  >
                    Start a Project
                  </a>
                </div>
                <div className="article-callout">
                  <div className="eyebrow">Editorial note</div>
                  <p>
                    AI-assisted project imagery is labeled as digital
                    visualization and should not be mistaken for completed
                    physical installation.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section className="section section--ivory">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Continue reading</div>
                <h2>Related garden guides</h2>
              </div>
              <p>
                Use the same site-first reasoning across different outdoor
                decisions.
              </p>
            </div>
            <div className="guide-grid">
              <article className="guide-card">
                <img
                  src="/assets/images/backyard-zones.webp"
                  alt="Backyard zoning guide"
                />
                <div className="guide-card__body">
                  <h3>Plan a backyard around use</h3>
                  <a href="/garden-guides/backyard-zoning">Read article →</a>
                </div>
              </article>
              <article className="guide-card">
                <img
                  src="/assets/images/focused-bed-handoff.webp"
                  alt="Landscape material planning guide"
                />
                <div className="guide-card__body">
                  <h3>Choose landscape stone carefully</h3>
                  <a href="/garden-guides/choosing-landscape-stone">
                    Read article →
                  </a>
                </div>
              </article>
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
