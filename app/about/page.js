import Image from "next/image";
import Link from "next/link";
import ReviewProof from "@/components/ReviewProof";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, ETSY_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Orlano Gardens",
  description:
    "Learn how Orlano Gardens combines thoughtful design judgment with real space mockups to help homeowners and landscape companies communicate outdoor ideas.",
  path: "/about",
});

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Orlano Gardens",
    url: absoluteUrl("/about"),
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy motion-rise">
            <div className="eyebrow">About Orlano Gardens</div>
            <h1>Visual clarity for real outdoor spaces.</h1>
            <p className="lead">
              Orlano Gardens is a remote outdoor design studio built around one
              practical idea: understand the direction before spending on
              plants, materials or installation.
            </p>
            <div className="hero__proofs">
              <span className="chip">Human design judgment</span>
              <span className="chip">Real space mockups</span>
              <span className="chip">Practical handoff</span>
              <span className="chip">Property led direction</span>
              <span className="chip">Partnership ready</span>
            </div>
          </div>
          <div className="about-hero__statement motion-rise motion-delay-1">
            <span>Studio principle</span>
            <blockquote>
              “A narrow bed does not need more plants. It needs a stronger
              rhythm.”
            </blockquote>
            <p>
              Every project begins with the real property, fixed constraints and
              the decision the client needs to make.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="image-frame">
            <span className="image-label">
              Original Space · Digital Design Concept
            </span>
            <Image
              src="/assets/images/front-yard-before-after.webp"
              alt="Original front yard beside an Orlano Gardens digital design concept"
              width={1200}
              height={820}
              priority
            />
          </div>
          <div>
            <div className="eyebrow">What the studio does</div>
            <h2>Design the idea before local work begins.</h2>
            <p>
              Client photos, measurements, climate, budget direction and
              maintenance preferences shape the visual concept. Human judgment
              controls hierarchy, access, mature scale and material
              relationships.
            </p>
            <p>
              Real space mockups support visual planning. They do not replace
              site measurement, horticultural verification, engineering,
              permits or skilled installation.
            </p>
            <Link className="btn btn--primary" href="/how-it-works">
              See the Complete Process
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow--gold">Studio standards</div>
              <h2>Four rules protect the usefulness of the work.</h2>
            </div>
          </div>
          <div className="grid grid--4">
            <article className="card card--dark">
              <span className="card__number">01</span>
              <h3>Real space first</h3>
              <p>The submitted property controls the concept.</p>
            </article>
            <article className="card card--dark">
              <span className="card__number">02</span>
              <h3>Clear service boundary</h3>
              <p>Visualization is never presented as completed installation.</p>
            </article>
            <article className="card card--dark">
              <span className="card__number">03</span>
              <h3>Practical direction</h3>
              <p>Images are paired with layout, plant and material guidance.</p>
            </article>
            <article className="card card--dark">
              <span className="card__number">04</span>
              <h3>Local verification</h3>
              <p>
                Site facts and technical decisions remain with local experts.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container partnership-intro">
          <div>
            <div className="eyebrow">Professional collaboration</div>
            <h2>Visualization support for landscape companies.</h2>
          </div>
          <div>
            <p>
              Landscape professionals can add Orlano Gardens visual concepts to
              selected client proposals. The landscape company remains
              responsible for field measurement, technical design, pricing and
              installation.
            </p>
            <Link
              className="btn btn--outline"
              href="/portfolio#professional-partnerships"
            >
              Explore Partnership Options
            </Link>
          </div>
        </div>
      </section>
      <ReviewProof />
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <div className="eyebrow eyebrow--gold">Official order route</div>
            <h2>Choose a custom package through Etsy.</h2>
          </div>
          <a
            className="btn btn--gold"
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Etsy Shop <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
