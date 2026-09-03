import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Read clear answers about Orlano Gardens remote outdoor design, pricing, delivery, revisions, photos, plants and implementation.",
  path: "/faq",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: absoluteUrl("/faq"),
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly does Orlano Gardens provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A remote digital outdoor design service. You send property photos and project details, then receive custom visual concepts and practical plant, material and layout guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Payment is completed through the official Orlano Gardens Etsy shop after scope confirmation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the design take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical delivery is 3 to 5 working days after all required photos, measurements and decisions are complete.",
      },
    },
    {
      "@type": "Question",
      name: "Is a revision included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. One focused revision is included after you select one concept, provided the change remains inside the purchased scope.",
      },
    },
    {
      "@type": "Question",
      name: "Can I give the design to a landscaper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The handoff can support discussion with a local installer, who must verify physical conditions, quantities, codes and construction requirements.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content">
        <section className="faq-hero">
          <div className="container faq-hero__grid">
            <div>
              <div className="eyebrow">Frequently Asked Questions</div>
              <h1>
                Clear answers before <span className="accent">checkout.</span>
              </h1>
              <p className="lead">
                Understand the service, package, inputs, delivery and
                implementation boundaries before starting a project.
              </p>
              <label
                className="search-field"
                style={{
                  display: "block",
                  maxWidth: "480px",
                  marginTop: "1.5rem",
                }}
              >
                <span className="sr-only">
                  Search frequently asked questions
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m20 20-4-4"></path>
                </svg>
                <input
                  type="search"
                  placeholder="Search all questions"
                  data-faq-search=""
                />
              </label>
            </div>
            <div className="card card--dark">
              <div className="eyebrow eyebrow--gold">First answer</div>
              <h2 style={{ fontSize: "2.7rem" }}>This is digital design.</h2>
              <p>
                Orlano Gardens does not visit, install, deliver materials or
                send a landscaping crew. The service creates custom visual
                direction and practical guidance from your photos.
              </p>
              <a className="btn btn--gold" href="/custom-design-service">
                Start a Project
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="faq-layout">
              <nav className="faq-nav" aria-label="FAQ categories">
                <a className="filter-btn" href="#service">
                  Service + boundaries
                </a>
                <a className="filter-btn" href="#pricing">
                  Packages + payment
                </a>
                <a className="filter-btn" href="#delivery">
                  Delivery + revisions
                </a>
                <a className="filter-btn" href="#inputs">
                  Photos + project inputs
                </a>
                <a className="filter-btn" href="#implementation">
                  Plants + implementation
                </a>
                <div className="card card--gold">
                  <h3>Still uncertain?</h3>
                  <p>
                    Send the actual space so the question can be answered in
                    context.
                  </p>
                  <a href="/contact">Contact Orlano Gardens</a>
                </div>
              </nav>
              <div>
                <section className="faq-group" id="service" data-faq-group="">
                  <h2>Service + boundaries</h2>
                  <div className="accordion">
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-1"
                        data-accordion-trigger=""
                      >
                        What exactly does Orlano Gardens provide?
                        <span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-1" hidden>
                        <div>
                          A remote digital outdoor design service. You send
                          property photos and project details; you receive
                          custom visual concepts and practical plant, material
                          and layout guidance.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-2"
                        data-accordion-trigger=""
                      >
                        Do you visit the property?
                        <span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-2" hidden>
                        <div>
                          No. There is no site visit, on site measurement or in
                          person consultation.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-3"
                        data-accordion-trigger=""
                      >
                        Do you install the design or send a landscaper?
                        <span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-3" hidden>
                        <div>
                          No. Physical landscaping, labor and installation are
                          not included. Implement the direction yourself or hire
                          a local professional.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-4"
                        data-accordion-trigger=""
                      >
                        Are plants and materials included?
                        <span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-4" hidden>
                        <div>
                          No. The package covers digital design work only.
                          Plants, materials, tools and delivery remain local.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-5"
                        data-accordion-trigger=""
                      >
                        Are the concept images completed projects?
                        <span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-5" hidden>
                        <div>
                          No. Real space mockups are labeled Digital Design
                          Concept and must not be mistaken for photographs of
                          completed construction.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="faq-group" id="pricing" data-faq-group="">
                  <h2>Packages + payment</h2>
                  <div className="accordion">
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-6"
                        data-accordion-trigger=""
                      >
                        Which package should I choose?
                        <span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-6" hidden>
                        <div>
                          Send the full area first when the scope is uncertain.
                          Small focused areas fit $29 or $49; medium complete
                          areas generally fit $89; large or multiple area
                          properties begin at $149.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-7"
                        data-accordion-trigger=""
                      >
                        Where do I pay?<span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-7" hidden>
                        <div>
                          Payment is completed through the official Orlano
                          Gardens Etsy shop after scope confirmation.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-8"
                        data-accordion-trigger=""
                      >
                        Can I buy before sending photos?
                        <span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-8" hidden>
                        <div>
                          Do not buy first if the project could be medium, large
                          or multiple area. The property must control the
                          package.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-9"
                        data-accordion-trigger=""
                      >
                        What does the priority add on include?
                        <span className="accordion__icon"></span>
                      </button>
                      <div className="accordion__panel" id="faq-panel-9" hidden>
                        <div>
                          The optional $29 add on is 24 hour delivery only when
                          feasibility is confirmed before purchase. It is not
                          automatically available.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-10"
                        data-accordion-trigger=""
                      >
                        Do prices include implementation costs?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-10"
                        hidden
                      >
                        <div>
                          No. The listed prices cover remote digital design
                          only, not plants, materials, contractors or
                          installation.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="faq-group" id="delivery" data-faq-group="">
                  <h2>Delivery + revisions</h2>
                  <div className="accordion">
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-11"
                        data-accordion-trigger=""
                      >
                        How long does the design take?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-11"
                        hidden
                      >
                        <div>
                          Typical delivery is 3 to 5 working days after all
                          required photos, measurements and decisions are
                          complete.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-12"
                        data-accordion-trigger=""
                      >
                        When does the delivery clock begin?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-12"
                        hidden
                      >
                        <div>
                          Only after complete project information has been
                          received and the scope is confirmed.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-13"
                        data-accordion-trigger=""
                      >
                        How many concepts do I receive?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-13"
                        hidden
                      >
                        <div>
                          The $29 package includes two. The $49 and $89 packages
                          include four. Multiple area output depends on the
                          confirmed scope.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-14"
                        data-accordion-trigger=""
                      >
                        Is a revision included?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-14"
                        hidden
                      >
                        <div>
                          Yes. One focused revision is included after you select
                          one concept, provided the change remains inside the
                          purchased scope.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-15"
                        data-accordion-trigger=""
                      >
                        Can I redesign a different area during revision?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-15"
                        hidden
                      >
                        <div>
                          No. A revision refines the selected concept; it does
                          not add a new area or replace the original project
                          brief.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="faq-group" id="inputs" data-faq-group="">
                  <h2>Photos + project inputs</h2>
                  <div className="accordion">
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-16"
                        data-accordion-trigger=""
                      >
                        What photos should I send?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-16"
                        hidden
                      >
                        <div>
                          Send wide horizontal photos from the front, left and
                          right when possible. Avoid very wide angle distortion
                          and include the full boundaries of the area.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-17"
                        data-accordion-trigger=""
                      >
                        Should I send a video?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-17"
                        hidden
                      >
                        <div>
                          A slow walking video is strongly recommended for
                          backyards, multiple area properties and spaces with
                          unclear connections.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-18"
                        data-accordion-trigger=""
                      >
                        Why is my exact location needed?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-18"
                        hidden
                      >
                        <div>
                          City and region help inform climate, general plant
                          direction and the need for local verification.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-19"
                        data-accordion-trigger=""
                      >
                        Do you publish my property photos?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-19"
                        hidden
                      >
                        <div>
                          Not without separate permission. Project media is used
                          to understand the site and create the requested
                          design.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-20"
                        data-accordion-trigger=""
                      >
                        Can you work without measurements?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-20"
                        hidden
                      >
                        <div>
                          Sometimes, but missing scale can reduce accuracy.
                          Measurements or a simple plan are required when the
                          photograph cannot establish the dimensions reliably.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="faq-group"
                  id="implementation"
                  data-faq-group=""
                >
                  <h2>Plants + implementation</h2>
                  <div className="accordion">
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-21"
                        data-accordion-trigger=""
                      >
                        Are the plants natural or artificial?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-21"
                        hidden
                      >
                        <div>
                          Designs normally use natural plants selected for local
                          conditions, but artificial options can be considered
                          when the client requests them.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-22"
                        data-accordion-trigger=""
                      >
                        Do you guarantee every plant will survive?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-22"
                        hidden
                      >
                        <div>
                          No. Final suitability depends on local microclimate,
                          soil, watering and maintenance. Verify selections with
                          a reputable local nursery or extension resource.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-23"
                        data-accordion-trigger=""
                      >
                        Can you include hardscape features?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-23"
                        hidden
                      >
                        <div>
                          Yes, concepts can include patios, pavers, pergolas,
                          fountains, fire features, paths and seating layouts as
                          visualization and planning direction, not engineering
                          or construction drawings.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-24"
                        data-accordion-trigger=""
                      >
                        Can I give the design to a landscaper?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-24"
                        hidden
                      >
                        <div>
                          Yes. The handoff can support discussion with a local
                          installer, who must verify physical conditions,
                          quantities, codes and construction requirements.
                        </div>
                      </div>
                    </div>
                    <div className="accordion__item" data-faq-item="">
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                        aria-controls="faq-panel-25"
                        data-accordion-trigger=""
                      >
                        Do I need permits?
                        <span className="accordion__icon"></span>
                      </button>
                      <div
                        className="accordion__panel"
                        id="faq-panel-25"
                        hidden
                      >
                        <div>
                          Possibly, depending on the feature and location.
                          Confirm property lines, utilities, permits and
                          structural requirements locally before work.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="empty-state" data-faq-empty="" hidden>
                  No FAQ matches that search. Try a shorter term or contact
                  Orlano Gardens.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <div className="eyebrow eyebrow--gold">
                Ready when the space is
              </div>
              <h2>The next answer depends on the property.</h2>
              <p>
                Share clear photos and priorities so the correct scope can be
                confirmed before Etsy checkout.
              </p>
            </div>
            <a className="btn btn--gold" href="/custom-design-service">
              Get Your Custom Design
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
