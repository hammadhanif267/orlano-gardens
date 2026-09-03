import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, premadePlans } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Premade Garden Designs",
  description:
    "Shop ready made garden plans for common outdoor spaces. Review specifications, included guidance and Etsy purchase details for each design.",
  path: "/ready-to-use-designs",
});

export default function PremadeDesignsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Premade garden designs",
    url: absoluteUrl("/ready-to-use-designs"),
    hasPart: premadePlans.map((plan) => ({
      "@type": "CreativeWork",
      name: plan.name,
      description: plan.summary,
    })),
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="premade-hero">
        <div className="container premade-hero__grid">
          <div className="premade-hero__copy motion-rise">
            <div className="eyebrow">Ready made garden plans</div>
            <h1>Choose a plan. Start with a clearer direction.</h1>
            <p className="lead">
              Shop practical garden plans created for common outdoor spaces.
              Review the fit, included direction and planning notes before
              continuing to Etsy.
            </p>
            <div className="hero__proofs">
              <span className="chip">Clear layout direction</span>
              <span className="chip">Plant and material guidance</span>
              <span className="chip">Available through Etsy</span>
            </div>
            <p className="service-clarifier">
              Select any design to review suitable spaces, suggested dimensions,
              maintenance level and purchase information.
            </p>
          </div>
          <div className="premade-hero__mosaic motion-rise motion-delay-1">
            {premadePlans.slice(0, 3).map((plan) => (
              <Image
                src={plan.image}
                alt=""
                width={700}
                height={500}
                priority
                key={plan.slug}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Premade collection</div>
              <h2>Ready made plans for common outdoor spaces.</h2>
            </div>
            <p>
              Each product page shows how the design can guide a compatible real
              space. Always verify final plants and measurements locally.
            </p>
          </div>
          <div className="premade-square-grid">
            {premadePlans.map((plan, index) => (
              <Link
                className="premade-square"
                href={`/ready-to-use-designs/${plan.slug}`}
                key={plan.slug}
              >
                <span className="premade-square__media">
                  <span className="image-label">Digital Design Concept</span>
                  <Image
                    src={plan.image}
                    alt={`${plan.name} real space design example`}
                    width={760}
                    height={760}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </span>
                <span className="premade-square__body">
                  <span className="tag">Premade design</span>
                  <h2>{plan.name}</h2>
                  <p>{plan.summary}</p>
                  <strong>View design details →</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <div className="eyebrow eyebrow--gold">
              Need an exact property solution?
            </div>
            <h2>
              Choose custom design when the real space must control the plan.
            </h2>
          </div>
          <Link className="btn btn--gold" href="/custom-design-service">
            Explore Custom Design
          </Link>
        </div>
      </section>
    </main>
  );
}
