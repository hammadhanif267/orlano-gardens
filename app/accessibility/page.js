import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Accessibility",
  description:
    "Describes the website’s accessibility features, known limits and feedback route.",
  path: "/accessibility",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Orlano Gardens",
  url: absoluteUrl("/accessibility"),
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
              <div className="eyebrow eyebrow--gold">Legal / Accessibility</div>
              <h1>Accessibility</h1>
              <p className="lead">
                Orlano Gardens aims to provide a clear, keyboard friendly and
                readable experience across devices and assistive technologies.
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
                Describes the website’s accessibility features, known limits and
                feedback route.
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
              <nav className="legal-toc" aria-label="Accessibility contents">
                <div className="eyebrow">Contents</div>
                <a href="#commitment">01. Commitment</a>
                <a href="#features">02. Accessibility features</a>
                <a href="#limits">03. Known limitations</a>
                <a href="#compatibility">04. Compatibility</a>
                <a href="#feedback">05. Accessibility feedback</a>
                <a href="#review">06. Ongoing review</a>
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
                <section id="commitment">
                  <div className="eyebrow">01</div>
                  <h2>Commitment</h2>
                  <p>
                    Orlano Gardens aims to make the website usable by people
                    with different devices, input methods, vision, hearing and
                    cognitive needs.
                  </p>
                </section>
                <section id="features">
                  <div className="eyebrow">02</div>
                  <h2>Accessibility features</h2>
                  <ul>
                    <li>Semantic headings and landmarks</li>
                    <li>
                      Keyboard operable navigation, filters and accordions
                    </li>
                    <li>Visible focus indicators</li>
                    <li>Text alternatives for meaningful images</li>
                    <li>Responsive layouts and readable contrast</li>
                    <li>Reduced motion support</li>
                    <li>Print friendly article and legal pages</li>
                  </ul>
                </section>
                <section id="limits">
                  <div className="eyebrow">03</div>
                  <h2>Known limitations</h2>
                  <p>
                    Some detailed project imagery may contain complex visual
                    information that cannot be fully described in a short text
                    alternative. Contact Orlano Gardens for a plain language
                    description of a specific concept.
                  </p>
                </section>
                <section id="compatibility">
                  <div className="eyebrow">04</div>
                  <h2>Compatibility</h2>
                  <p>
                    The site is designed for current versions of major browsers
                    and common assistive technologies. Very old browsers may not
                    support every interactive enhancement, but core links and
                    content remain available.
                  </p>
                </section>
                <section id="feedback">
                  <div className="eyebrow">05</div>
                  <h2>Accessibility feedback</h2>
                  <p>
                    If you cannot access information or complete a task, email{" "}
                    <a href="mailto:orlanogardens@gmail.com?subject=Accessibility%20feedback">
                      orlanogardens@gmail.com
                    </a>
                    . Include the page, problem, device or assistive technology
                    and the format you need.
                  </p>
                </section>
                <section id="review">
                  <div className="eyebrow">06</div>
                  <h2>Ongoing review</h2>
                  <p>
                    Accessibility is reviewed as the site changes. Third party
                    advertising or embedded content must be checked before
                    activation because those services can introduce new
                    barriers.
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
