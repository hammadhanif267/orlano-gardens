import Image from "next/image";
import Link from "next/link";
import ReviewProof from "@/components/ReviewProof";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import {
  absoluteUrl,
  EMAIL,
  ETSY_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  etsyProof,
} from "@/lib/site";

export const metadata = buildMetadata({
  title: "Portfolio and Client Results",
  description:
    "Explore Orlano Gardens digital outdoor concepts, verified Etsy proof and visualization support for homeowners and landscape companies.",
  path: "/portfolio",
});

const work = [
  {
    title: "A clearer front entrance",
    type: "Custom client design",
    image: "/assets/images/front-yard-before-after.webp",
    problem:
      "The property needed stronger entry hierarchy without covering windows or circulation.",
    decision:
      "A limited plant rhythm and continuous bed shape created structure.",
    scope: "Front foundation and entrance",
    priorities: "Window clearance, simple maintenance, stronger arrival",
    deliverables: "Real space mockup, layout direction, plant roles and material guidance",
  },
  {
    title: "A backyard with defined use",
    type: "Custom client design",
    image: "/assets/images/backyard-before-after.webp",
    problem: "Open lawn had no destination and furniture felt disconnected.",
    decision:
      "The concept protected the center while defining dining and rest zones.",
    scope: "Backyard zoning and outdoor living",
    priorities: "Open circulation, useful destinations, balanced planting",
    deliverables: "Multiple visual directions, zoning guidance and final handoff",
  },
  {
    title: "One language across several areas",
    type: "Custom client design",
    image: "/assets/images/multi-area-before-after.webp",
    problem: "Separate outdoor spaces risked becoming unrelated projects.",
    decision: "Repeated materials and plant roles connected the property.",
    scope: "Connected front, side and backyard areas",
    priorities: "Visual continuity, phased work, repeatable material palette",
    deliverables: "Multi area concepts, shared design language and implementation sequence",
  },
  {
    title: "A focused small bed",
    type: "Portfolio design study",
    image: "/assets/images/focused-bed-before-after.webp",
    problem: "The narrow area needed impact without excessive plant types.",
    decision: "Controlled layers and one crisp edge produced order.",
    scope: "Small focused planting bed",
    priorities: "Low clutter, mature spacing, visible structure",
    deliverables: "Real space design, planting roles and edge treatment",
  },
  {
    title: "A usable patio center",
    type: "Portfolio design study",
    image: "/assets/images/patio-before-after.webp",
    problem: "Furniture and planting competed for the same limited surface.",
    decision: "A clear social zone preserved movement around the perimeter.",
    scope: "Patio and outdoor seating area",
    priorities: "Furniture clearance, softer edges, comfortable movement",
    deliverables: "Patio layout, planting frame and material direction",
  },
  {
    title: "A side yard that keeps access",
    type: "Portfolio design study",
    image: "/assets/images/side-yard-before-after.webp",
    problem:
      "The passage needed visual improvement without blocking utilities.",
    decision:
      "Selective screening improved the view while keeping service space open.",
    scope: "Narrow side yard and utility zone",
    priorities: "Screening, access, drainage and maintenance clearance",
    deliverables: "Access aware layout, screening strategy and care priorities",
  },
];

export default function PortfolioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Orlano Gardens portfolio and client results",
    url: absoluteUrl("/portfolio"),
    about: "Remote outdoor design and landscape visualization",
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="portfolio-hero">
        <div className="container portfolio-hero__grid">
          <div className="portfolio-hero__copy motion-rise">
            <div className="eyebrow eyebrow--gold">
              Portfolio and client results
            </div>
            <h1>Visual proof for decisions made before installation.</h1>
            <p className="lead">
              Orlano Gardens helps homeowners understand a future space and
              helps landscape companies present a clearer vision to their
              clients.
            </p>
            <div className="btn-row">
              <Link className="btn btn--gold" href="/custom-design-service">
                Start a Custom Design
              </Link>
              <a
                className="btn btn--light"
                href={`mailto:${EMAIL}?subject=Landscape%20company%20collaboration`}
              >
                Discuss Collaboration
              </a>
            </div>
            <p className="service-clarifier">
              Concept imagery is digital visualization. It does not claim
              physical installation by Orlano Gardens.
            </p>
          </div>
          <div className="portfolio-hero__collage motion-rise motion-delay-1">
            <Image
              src="/assets/images/front-yard-before-after.webp"
              alt="Front yard before and digital concept"
              width={900}
              height={650}
              priority
            />
            <Image
              src="/assets/images/backyard-second-view.webp"
              alt="Backyard digital design concept"
              width={600}
              height={700}
              priority
            />
            <Image
              src="/assets/images/patio-before-after.webp"
              alt="Patio before and digital concept"
              width={600}
              height={700}
              priority
            />
          </div>
        </div>
      </section>
      <section className="proof-band">
        <div className="container proof-band__grid">
          <div>
            <strong>80+</strong>
            <span>Outdoor spaces designed and visualized</span>
          </div>
          <div>
            <strong>360K+</strong>
            <span>Combined social community, reported August 2026</span>
          </div>
          <div>
            <strong>{etsyProof.rating}</strong>
            <span>Etsy rating from {etsyProof.reviews} reviews</span>
          </div>
          <div>
            <strong>{etsyProof.status}</strong>
            <span>Verified on Etsy {etsyProof.checked}</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Selected work</div>
              <h2>The problem, the decision and the visual direction.</h2>
            </div>
            <p>
              Strong portfolio proof explains why a design changed. It does not
              present a render as a completed landscape.
            </p>
          </div>
          <div className="portfolio-grid">
            {work.map((item) => (
              <article className="portfolio-card" key={item.title}>
                <div className="portfolio-card__media">
                  <span className="image-label">{item.type}</span>
                  <Image
                    src={item.image}
                    alt={`${item.title} before and digital design concept`}
                    width={1000}
                    height={680}
                    loading="lazy"
                  />
                </div>
                <div className="portfolio-card__copy">
                  <span className="tag">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>
                    <strong>Problem:</strong> {item.problem}
                  </p>
                  <p>
                    <strong>Design decision:</strong> {item.decision}
                  </p>
                  <dl className="portfolio-card__details">
                    <div><dt>Scope</dt><dd>{item.scope}</dd></div>
                    <div><dt>Priorities</dt><dd>{item.priorities}</dd></div>
                    <div><dt>Delivered</dt><dd>{item.deliverables}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ReviewProof />
      <section className="section section--dark" id="professional-partnerships">
        <div className="container partnership-grid">
          <div className="partnership-copy">
            <div className="eyebrow eyebrow--gold">For landscape companies</div>
            <h2>Give your clients a clearer vision before the work begins.</h2>
            <p className="lead">
              Add remote visual concept support to your existing landscape
              service without building an in house design team.
            </p>
            <ul className="check-list">
              <li>Present proposed improvements visually</li>
              <li>Help clients compare options before approval</li>
              <li>Support estimates and sales conversations</li>
              <li>Reduce misunderstandings before materials are ordered</li>
              <li>Use co branded or white label presentation where agreed</li>
            </ul>
            <div className="partnership-flow" aria-label="Partnership process">
              <div><span>01</span><strong>Share the client brief</strong></div>
              <div><span>02</span><strong>Confirm scope and presentation style</strong></div>
              <div><span>03</span><strong>Review the visual direction</strong></div>
              <div><span>04</span><strong>Present it to your client</strong></div>
            </div>
            <a
              className="btn btn--gold"
              href={`mailto:${EMAIL}?subject=Landscape%20visualization%20partnership`}
            >
              Discuss a Partnership
            </a>
          </div>
          <div className="partnership-models">
            <article>
              <span>01</span>
              <h3>One Time Support</h3>
              <p>
                Use Orlano Gardens for a specific client presentation or
                difficult proposal.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Recurring Partnership</h3>
              <p>
                Create a repeatable visualization workflow for selected company
                projects.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>White Label Option</h3>
              <p>
                Present agreed deliverables under the landscape company brand.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Co Branded Option</h3>
              <p>Show both the design and installation roles transparently.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container social-proof">
          <div>
            <div className="eyebrow">Audience trust</div>
            <h2>Design education backed by an active social community.</h2>
            <p>
              Orlano Gardens shares visual outdoor ideas across Instagram and
              Facebook, helping homeowners recognize design problems before
              spending.
            </p>
          </div>
          <div className="social-proof__links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <strong>Instagram</strong>
              <span>View Orlano Gardens content →</span>
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              <strong>Facebook</strong>
              <span>View the community →</span>
            </a>
            <a href={ETSY_URL} target="_blank" rel="noopener noreferrer">
              <strong>Etsy</strong>
              <span>Inspect the official shop →</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
