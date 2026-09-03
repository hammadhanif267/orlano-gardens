import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, EMAIL, ETSY_URL, INSTAGRAM_URL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Orlano Gardens",
  description:
    "Contact Orlano Gardens through email, Instagram or Etsy for project guidance, professional collaboration or an existing order.",
  path: "/contact",
});

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Orlano Gardens",
    url: absoluteUrl("/contact"),
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div className="contact-hero__copy motion-rise">
            <div className="eyebrow">Choose the right contact route</div>
            <h1>Start the conversation where it can be handled properly.</h1>
            <p className="lead">
              Use Instagram for a quick first question, email for professional
              collaboration, and Etsy for purchases or existing orders.
            </p>
            <p className="service-clarifier">
              Never send payment card details, passwords or government
              identification.
            </p>
          </div>
          <div className="contact-stack motion-rise motion-delay-1">
            <a
              className="contact-option contact-option--etsy"
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>01</span>
              <div>
                <small>Official orders</small>
                <strong>Etsy</strong>
                <p>Purchase a package or continue an existing order.</p>
              </div>
              <b aria-hidden="true">↗</b>
            </a>
            <a
              className="contact-option"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>02</span>
              <div>
                <small>Quick project question</small>
                <strong>Instagram</strong>
                <p>Send initial photos and ask which package fits.</p>
              </div>
              <b aria-hidden="true">↗</b>
            </a>
            <a
              className="contact-option"
              href={`mailto:${EMAIL}?subject=Orlano%20Gardens%20inquiry`}
            >
              <span>03</span>
              <div>
                <small>Detailed inquiry or collaboration</small>
                <strong>Email</strong>
                <p>{EMAIL}</p>
              </div>
              <b aria-hidden="true">→</b>
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Send useful context</div>
              <h2>Make the first message answerable.</h2>
            </div>
            <p>
              A vague message creates another round of questions. Include the
              information relevant to your request.
            </p>
          </div>
          <div className="grid grid--3">
            <article className="card">
              <span className="card__number">01</span>
              <h3>Custom project</h3>
              <ul className="plain-list">
                <li>City, state and country</li>
                <li>Wide photos of the complete area</li>
                <li>Preferred style and maintenance</li>
                <li>What must stay or change</li>
              </ul>
              <Link className="text-link" href="/custom-design-service">
                Review custom design →
              </Link>
            </article>
            <article className="card">
              <span className="card__number">02</span>
              <h3>Existing Etsy order</h3>
              <ul className="plain-list">
                <li>Keep order details inside Etsy</li>
                <li>Include the relevant space or revision</li>
                <li>Do not send payment details by email</li>
              </ul>
              <a
                className="text-link"
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Etsy →
              </a>
            </article>
            <article className="card">
              <span className="card__number">03</span>
              <h3>Landscape company</h3>
              <ul className="plain-list">
                <li>Company and service area</li>
                <li>Typical project type and volume</li>
                <li>Desired presentation format</li>
                <li>White label or co branded preference</li>
              </ul>
              <a
                className="text-link"
                href={`mailto:${EMAIL}?subject=Landscape%20company%20collaboration`}
              >
                Discuss collaboration →
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
