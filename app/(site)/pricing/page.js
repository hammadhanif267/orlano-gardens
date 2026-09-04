import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, packages } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Custom Outdoor Design Pricing",
  description:
    "Compare the $29, $49, $89 and $149 Orlano Gardens custom design packages and continue to the matching Etsy listing.",
  path: "/pricing",
});

export default function PricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom outdoor design",
    provider: { "@type": "Organization", name: "Orlano Gardens" },
    offers: packages.map((item) => ({
      "@type": "Offer",
      price: item.price,
      priceCurrency: "USD",
      name: item.name,
      url: item.link,
    })),
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="pricing-hero">
        <div className="container pricing-hero__grid">
          <div className="pricing-hero__copy motion-rise">
            <div className="eyebrow">Custom design pricing</div>
            <h1>Pay for the scope your property actually needs.</h1>
            <p className="lead">
              Start with one focused area or coordinate a larger property. Every
              package is a remote digital service completed through Etsy.
            </p>
            <div className="hero__proofs">
              <span className="chip">From $29</span>
              <span className="chip">One focused revision</span>
              <span className="chip">Etsy Star Seller</span>
            </div>
          </div>
          <div className="pricing-hero__decision motion-rise motion-delay-1">
            <div className="eyebrow eyebrow--gold">Choose by real scope</div>
            <h2>One clear decision before checkout.</h2>
            <ol>
              <li><span>01</span><p><strong>Define the area</strong>One small bed, a complete area or several connected spaces.</p></li>
              <li><span>02</span><p><strong>Choose the depth</strong>Compare two directions or explore four complete concepts.</p></li>
              <li><span>03</span><p><strong>Continue on Etsy</strong>Open the exact listing for the package that fits.</p></li>
            </ol>
            <div className="pricing-hero__range"><span>Four clear packages</span><strong>$29 to $149</strong></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="pricing-group">
            <div className="pricing-group__intro">
              <span className="card__number">01</span>
              <div className="eyebrow">Small focused area</div>
              <h2>Choose how many directions you want to compare.</h2>
              <p>
                Use these packages for one bed, porch corner, tree bed, driveway
                strip or another clearly bounded small area.
              </p>
            </div>
            <div className="package-grid package-grid--two">
              {packages.slice(0, 2).map((item) => (
                <PackageCard item={item} key={item.price} />
              ))}
            </div>
          </div>
          <div className="pricing-group pricing-group--dark">
            <div className="pricing-group__intro">
              <span className="card__number">02</span>
              <div className="eyebrow eyebrow--gold">
                Complete or connected scope
              </div>
              <h2>Coordinate the wider property before buying.</h2>
              <p>
                Use these packages when the design must connect a full area,
                several functions or multiple related views.
              </p>
            </div>
            <div className="package-grid package-grid--two">
              {packages.slice(2).map((item) => (
                <PackageCard item={item} key={item.price} dark />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container split">
          <div>
            <div className="eyebrow">Included with every package</div>
            <h2>A usable visual handoff.</h2>
            <ul className="check-list">
              <li>Custom concepts based on submitted photos</li>
              <li>Plant and material direction</li>
              <li>Layout and placement guidance</li>
              <li>Setup and care notes</li>
              <li>One focused revision after concept selection</li>
            </ul>
          </div>
          <div className="card">
            <div className="eyebrow">Not included</div>
            <h3>Physical work and technical verification</h3>
            <ul className="plain-list">
              <li>Site visits or measured surveys</li>
              <li>Plants, products, tools or delivery</li>
              <li>Landscaping crews or installation</li>
              <li>Engineering, drainage or permit documents</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <div className="eyebrow eyebrow--gold">Still unsure?</div>
            <h2>Send the space before choosing.</h2>
            <p>
              Use the contact page when the correct project scope is not
              obvious.
            </p>
          </div>
          <Link className="btn btn--gold" href="/contact">
            Ask About Your Scope
          </Link>
        </div>
      </section>
    </main>
  );
}

function PackageCard({ item, dark = false }) {
  return (
    <article className={`package-card${dark ? " package-card--dark" : ""}`}>
      <span className="eyebrow">{item.concepts}</span>
      <h3>{item.name}</h3>
      <div className="package-card__price">${item.price}</div>
      <p>{item.scope}</p>
      <ul className="check-list">
        <li>Planting layout</li>
        <li>Plant and material list</li>
        <li>Setup guidance</li>
        <li>One focused revision</li>
      </ul>
      <a
        className={dark ? "btn btn--gold" : "btn btn--primary"}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Choose ${item.price} on Etsy <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
