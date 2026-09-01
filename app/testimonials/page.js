import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { TestimonialCard, testimonials } from "@/components/Testimonials";

export const metadata = buildMetadata({
  title: "Client Testimonials | Orlano Gardens",
  description:
    "Read verified client feedback about Orlano Gardens remote digital front yard, backyard, patio and garden design concepts.",
  path: "/testimonials",
});

const feedbackThemes = [
  {
    number: "01",
    title: "A clearer picture before buying",
    copy:
      "Clients use the visual concepts to compare directions and make decisions before committing to plants, materials or installation.",
  },
  {
    number: "02",
    title: "Designs shaped around the real property",
    copy:
      "The feedback repeatedly points to concepts that account for the existing slope, fence lines, entrances and usable space.",
  },
  {
    number: "03",
    title: "One direction across the whole space",
    copy:
      "Planting, circulation and outdoor-use zones are considered together so the final direction feels coordinated rather than pieced together.",
  },
];

export default function TestimonialsPage() {
  return (
    <main id="main-content">
      <header className="hero testimonials-hero">
        <div className="container split">
          <div>
            <div className="eyebrow">Client testimonials</div>
            <h1>What clients say after seeing their space redesigned.</h1>
            <p className="lead">
              These reviews describe the remote digital design experience:
              clearer decisions, layouts based on the real property and a
              practical direction before local installation begins.
            </p>
            <div className="btn-row">
              <a
                className="btn btn--primary"
                href="https://orlanogardens.etsy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Verified Etsy Reviews
              </a>
              <Link className="btn btn--outline" href="/get-custom-design">
                Get Your Custom Design
              </Link>
            </div>
          </div>

          <aside className="card testimonial-trust-card" aria-label="Review context">
            <div className="eyebrow">Review context</div>
            <div className="testimonial-trust-card__stars" aria-hidden="true">
              ★★★★★
            </div>
            <h2>Feedback about digital design, not physical installation.</h2>
            <p>
              Orlano Gardens provides remote visual concepts, plant and material
              direction, and layout guidance. Landscaping labor, construction
              and installation are not included.
            </p>
          </aside>
        </div>
      </header>

      <section className="section" aria-labelledby="client-feedback-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Selected client feedback</div>
              <h2 id="client-feedback-title">Reviews across different outdoor spaces.</h2>
            </div>
            <p>
              Front yards, backyards, patios, entries and connected property
              areas require different solutions, but every project starts with
              the client&apos;s actual photos and constraints.
            </p>
          </div>

          <div className="testimonials-page__grid">
            {testimonials.map((item) => (
              <TestimonialCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sage" aria-labelledby="feedback-themes-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">What the feedback reflects</div>
              <h2 id="feedback-themes-title">The value clients describe most often.</h2>
            </div>
            <p>
              A useful concept does more than look attractive. It should reduce
              uncertainty and give the homeowner a direction that fits the
              property.
            </p>
          </div>

          <div className="grid grid--3">
            {feedbackThemes.map((theme) => (
              <article className="card" key={theme.number}>
                <div className="eyebrow">{theme.number}</div>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <div className="eyebrow eyebrow--gold">Your space, your constraints</div>
            <h2>See the direction before you spend on the setup.</h2>
            <p>
              Send clear photos and the project details. The right package can
              then be confirmed before checkout.
            </p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/get-custom-design">
              Get Your Custom Design
            </Link>
            <Link className="btn btn--light" href="/how-it-works">
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
