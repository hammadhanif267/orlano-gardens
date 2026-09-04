import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "How Custom Outdoor Design Works",
  description:
    "Follow the Orlano Gardens process from property photos and Etsy checkout to visual concepts, revision and practical handoff.",
  path: "/how-it-works",
});

const steps = [
  [
    "Share Your Space",
    "Send your location, clear photos, approximate measurements, preferred style and anything that must stay or change.",
    "Wide, left and right views help the design respond to the complete area rather than one camera angle.",
  ],
  [
    "Confirm the Scope",
    "Choose the project area and package that match the real space and the number of design directions you need.",
    "If the scope is unclear, ask before ordering so the correct package is selected.",
  ],
  [
    "Order Through Etsy",
    "Complete payment through the matched Etsy listing and keep official order communication in Etsy messages.",
    "This creates one clear place for the brief, files, timing and order record.",
  ],
  [
    "Explore Directions",
    "Review custom visual directions created around the same property, priorities and preferred style.",
    "Compare the options for scale, circulation, maintenance and the feeling you want the space to create.",
  ],
  [
    "Select and Refine",
    "Choose one preferred direction for a focused revision within the purchased package scope.",
    "Clear feedback helps preserve the strongest parts of the design while resolving the final details.",
  ],
  [
    "Receive the Handoff",
    "Receive the final visual direction with practical layout, plant role, material, setup and care guidance.",
    "Use it to organize purchases and communicate the intended result to local suppliers or installers.",
  ],
  [
    "Verify Locally",
    "Confirm dimensions, quantities, utilities, drainage, permits and plant suitability before installation.",
    "A local professional should verify every technical or safety decision that depends on site conditions.",
  ],
];

export default function HowItWorksPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Orlano Gardens custom outdoor design works",
    totalTime: "P5D",
    step: steps.map(([name, text, detail], index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name,
      text: `${text} ${detail}`,
    })),
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="process-hero">
        <div className="container">
          <div className="process-hero__heading motion-rise">
            <div className="eyebrow eyebrow--gold">A clear remote process</div>
            <h1>From your photos to a usable outdoor plan.</h1>
            <p className="lead">
              Seven simple steps keep the project grounded in the real property,
              make Etsy ordering clear and prepare the final direction for local use.
            </p>
          </div>
          <div className="process-hero__image motion-rise motion-delay-1">
            <Image
              src="/assets/images/project-triptych.webp"
              alt="Three stages of custom outdoor design visualization"
              width={1500}
              height={760}
              priority
            />
          </div>
        </div>
      </section>
      <section className="section process-steps-section">
        <div className="container">
          <div className="step-list">
            {steps.map(([name, text, detail], index) => (
              <article key={name}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{name}</h2>
                  <p>{text}</p>
                  <p className="step-list__detail">{detail}</p>
                  {index === 1 && (
                    <Link className="text-link" href="/pricing">
                      Compare package scopes →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container split">
          <div>
            <div className="eyebrow eyebrow--gold">
              What improves the result
            </div>
            <h2>Complete inputs prevent avoidable guessing.</h2>
            <ul className="check-list">
              <li>Wide photos showing every boundary</li>
              <li>Left and right views showing depth</li>
              <li>Exact city and climate information</li>
              <li>Keep, move and remove instructions</li>
              <li>Maintenance and physical budget direction</li>
            </ul>
          </div>
          <div className="card">
            <div className="eyebrow">Service limit</div>
            <h3>The concept is not a construction document.</h3>
            <p>
              Local professionals must verify measurements, utilities, drainage,
              permits, structures, plant suitability and installation details.
            </p>
            <Link className="btn btn--primary" href="/custom-design-service">
              Review Custom Design
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
