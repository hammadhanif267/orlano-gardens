import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, premadePlans } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Outdoor Design Services",
  description:
    "Compare personalized custom outdoor design with ready made garden plans from Orlano Gardens.",
  path: "/services",
});

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Orlano Gardens design options",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Custom Design Service",
        url: absoluteUrl("/custom-design-service"),
      },
      {
        "@type": "Service",
        position: 2,
        name: "Ready-to-Use Designs",
        url: absoluteUrl("/ready-to-use-designs"),
      },
    ],
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="services-hero">
        <div className="container">
          <div className="services-hero__intro motion-rise">
            <div className="eyebrow eyebrow--gold">Two clear design paths</div>
            <h1>Choose custom direction or a ready made starting point.</h1>
            <p className="lead">
              Do not choose by yard type. Choose by whether the design must
              respond to your exact property.
            </p>
          </div>
          <div className="services-hero__choices">
            <Link
              className="service-path service-path--light"
              href="/custom-design-service"
            >
              <span>01</span>
              <div>
                <small>Made for your property</small>
                <h2>Custom Design Service</h2>
                <p>
                  Personalized concepts created from your photos, location,
                  priorities and preferred style.
                </p>
                <strong>Explore custom design →</strong>
              </div>
              <Image
                src="/assets/images/services-diptych.webp"
                alt="Custom outdoor design examples"
                width={900}
                height={600}
                priority
              />
            </Link>
            <Link
              className="service-path service-path--gold"
              href="/ready-to-use-designs"
            >
              <span>02</span>
              <div>
                <small>Ready made garden plans</small>
                <h2>Ready-to-Use Designs</h2>
                <p>
                  Shop focused garden plans created for compatible common
                  outdoor spaces.
                </p>
                <strong>Browse ready-to-use designs →</strong>
              </div>
              <Image
                src="/assets/images/focused-bed-handoff.webp"
                alt="Premade garden design"
                width={900}
                height={600}
                priority
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Direct comparison</div>
              <h2>Know what changes before choosing.</h2>
            </div>
          </div>
          <div
            className="comparison-table"
            role="table"
            aria-label="Custom and ready-to-use design comparison"
          >
            <div
              className="comparison-table__row comparison-table__head"
              role="row"
            >
              <span role="columnheader">Feature</span>
              <strong role="columnheader">Custom Design</strong>
              <strong role="columnheader">Ready-to-Use Design</strong>
            </div>
            {[
              ["Based on your photos", "Yes", "No"],
              ["Made for the exact property", "Yes", "No"],
              ["Personalized concepts", "Yes", "No"],
              ["Focused revision", "Included", "Not included"],
              [
                "Best for",
                "Unique spaces and priorities",
                "Compatible common spaces",
              ],
              ["Purchase route", "Exact Etsy package", "Product page and Etsy"],
            ].map((row) => (
              <div className="comparison-table__row" role="row" key={row[0]}>
                {row.map((cell, index) => (
                  <span
                    role="cell"
                    key={cell}
                    className={index === 0 ? "comparison-table__label" : ""}
                  >
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Premade garden plans</div>
              <h2>Premade plans for the spaces clients repeatedly need.</h2>
            </div>
            <p>
              Browse the collection by space type, then open a product page to
              review specifications, included direction and the Etsy purchase route.
            </p>
          </div>
          <div className="premade-square-grid">
            {premadePlans.map((plan) => (
              <Link
                className="premade-square"
                href={`/ready-to-use-designs/${plan.slug}`}
                key={plan.slug}
              >
                <Image
                  src={plan.image}
                  alt={`${plan.name} real space design example`}
                  width={760}
                  height={520}
                  loading="lazy"
                />
                <span className="premade-square__body">
                  <span className="tag">Premade design</span>
                  <h3>{plan.name}</h3>
                  <p>{plan.summary}</p>
                  <strong>View design details →</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
