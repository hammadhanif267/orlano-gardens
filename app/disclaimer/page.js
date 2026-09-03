import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Explains the limits of real space mockups, garden guidance and remote digital design.",
  path: "/disclaimer",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orlano Gardens",
  url: absoluteUrl("/disclaimer"),
  email: "orlanogardens@gmail.com",
  sameAs: [
    "https://orlanogardens.etsy.com/",
    "https://www.instagram.com/orlanogardens",
    "https://www.facebook.com/orlanogardens",
  ],
  description:
    "Remote digital outdoor design created from client supplied property photos.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content">
        <header className="legal-hero">
          <div className="container split">
            <div>
              <div className="eyebrow eyebrow--gold">Legal / Disclaimer</div>
              <h1>Disclaimer</h1>
              <p className="lead">
                The website provides visualization and planning direction, not
                physical verification, engineering, permitting or guaranteed
                results.
              </p>
              <p className="small" style={{ color: "var(--gold)" }}>
                Effective: 1 September 2026  •  Last updated: 1 September 2026
              </p>
            </div>
            <div className="card">
              <div className="eyebrow">Clear controls</div>
              <h2 style={{ fontSize: "2.4rem" }}>
                Legal information should be usable, not buried.
              </h2>
              <p>
                Explains the limits of real space mockups, garden
                guidance and remote digital design.
              </p>
              <a
                className="btn btn--gold"
                href="mailto:orlanogardens@gmail.com"
              >
                Contact Orlano Gardens
              </a>
            </div>
          </div>
        </header>
        <section className="section">
          <div className="container">
            <div className="legal-layout">
              <nav className="legal-toc" aria-label="Disclaimer contents">
                <div className="eyebrow">Contents</div>
                <a href="#visual">01. Digital design concepts</a>
                <a href="#not-professional">
                  02. Not engineering or site certification
                </a>
                <a href="#plants">03. Plant and material guidance</a>
                <a href="#hardscape">04. Hardscape and structures</a>
                <a href="#costs">05. Costs and availability</a>
                <a href="#articles">06. Garden Guides</a>
                <a href="#external">07. External links</a>
                <a href="#contact">08. Questions</a>
                <hr
                  style={{
                    border: "0",
                    borderTop: "1px solid var(--line)",
                    margin: "1rem 0",
                  }}
                />
                <p className="small muted">
                  Review this page whenever the website, service tools or legal
                  requirements change.
                </p>
              </nav>
              <article className="legal-copy">
                <section id="visual">
                  <div className="eyebrow">01</div>
                  <h2>Digital design concepts</h2>
                  <p>
                    All transformed outdoor images are planning visualizations.
                    They do not prove physical installation, construction
                    quality, regulatory approval or a guaranteed outcome.
                  </p>
                </section>
                <section id="not-professional">
                  <div className="eyebrow">02</div>
                  <h2>Not engineering or site certification</h2>
                  <p>
                    Orlano Gardens does not provide structural engineering,
                    surveying, architectural construction documents, utility
                    locating, drainage engineering, permit approval or
                    contractor certification.
                  </p>
                </section>
                <section id="plants">
                  <div className="eyebrow">03</div>
                  <h2>Plant and material guidance</h2>
                  <p>
                    Plant and material suggestions are general design direction.
                    Local microclimate, soil, water, pests, toxicity,
                    invasiveness, availability and maintenance can change
                    suitability. Verify final choices locally.
                  </p>
                </section>
                <section id="hardscape">
                  <div className="eyebrow">04</div>
                  <h2>Hardscape and structures</h2>
                  <p>
                    Patios, pergolas, fountains, fire features, retaining
                    elements, paths and other structures shown in concepts
                    require local measurement, product specification, code and
                    professional review before construction.
                  </p>
                </section>
                <section id="costs">
                  <div className="eyebrow">05</div>
                  <h2>Costs and availability</h2>
                  <p>
                    Physical budgets, quantities, prices, suppliers and
                    availability are outside the digital service unless
                    explicitly stated. Obtain current local quotes before
                    purchasing.
                  </p>
                </section>
                <section id="articles">
                  <div className="eyebrow">06</div>
                  <h2>Garden Guides</h2>
                  <p>
                    Articles provide general educational planning guidance. They
                    do not replace authoritative local horticultural, utility,
                    legal, safety or construction advice.
                  </p>
                </section>
                <section id="external">
                  <div className="eyebrow">07</div>
                  <h2>External links</h2>
                  <p>
                    Links to Etsy, social platforms, nurseries, products or
                    other websites are provided for convenience. Their content,
                    availability and practices remain outside Orlano Gardens’
                    control.
                  </p>
                </section>
                <section id="contact">
                  <div className="eyebrow">08</div>
                  <h2>Questions</h2>
                  <p>
                    If a design boundary is unclear, contact{" "}
                    <a href="mailto:orlanogardens@gmail.com">
                      orlanogardens@gmail.com
                    </a>{" "}
                    before purchase or physical work.
                  </p>
                </section>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
