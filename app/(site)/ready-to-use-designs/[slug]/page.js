import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, ETSY_URL, premadePlans } from "@/lib/site";
import { getPublicRecords } from "@/lib/cms-records";

export function generateStaticParams() {
  return premadePlans.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const saved = (await getPublicRecords("products")).find((item) => item.slug === slug);
  const original = premadePlans.find((item) => item.slug === slug);
  const plan = saved ? normalizePlan(saved, original) : original;
  if (!plan) return {};
  return buildMetadata({
    title: `${plan.name} Premade Garden Plan`,
    description: `${plan.summary} Review space, sun, maintenance, plant and material guidance before checking availability on Etsy.`,
    path: `/ready-to-use-designs/${plan.slug}`,
  });
}

export default async function PremadePlanPage({ params }) {
  const { slug } = await params;
  const saved = (await getPublicRecords("products")).find((item) => item.slug === slug);
  const original = premadePlans.find((item) => item.slug === slug);
  const plan = saved ? normalizePlan(saved, original) : original;
  if (!plan) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: plan.name,
    description: plan.description,
    url: absoluteUrl(`/ready-to-use-designs/${plan.slug}`),
    brand: { "@type": "Brand", name: "Orlano Gardens" },
    category: "Premade garden design plan",
  };

  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="product-hero">
        <div className="container product-hero__grid">
          <div className="product-gallery motion-rise">
            {plan.gallery.map((image, index) => (
              <div className={index === 0 ? "product-gallery__main" : "product-gallery__thumb"} key={image}>
                {index === 0 && <span className="image-label">Real Space Design Mockup</span>}
                <Image
                  src={image}
                  alt={`${plan.name} shown in a real space mockup view ${index + 1}`}
                  width={1100}
                  height={820}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          <div className="product-summary motion-rise motion-delay-1">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/ready-to-use-designs">Ready-to-Use Designs</Link>
              <span aria-hidden="true">/</span>
              <span>{plan.name}</span>
            </nav>
            <div className="eyebrow">Premade garden design</div>
            <h1>{plan.name}</h1>
            <p className="lead">{plan.description}</p>
            <div className="product-purchase-note">
              <strong>Ready to use as a planning direction</strong>
              <span>Review the specifications below, then complete your purchase and communication through Etsy.</span>
            </div>
            <div className="product-facts">
              <div><span>Best for</span><strong>{plan.suitableFor}</strong></div>
              <div><span>Maintenance</span><strong>{plan.maintenance}</strong></div>
              <div><span>Sun</span><strong>{plan.sun}</strong></div>
            </div>
            <a className="btn btn--primary product-summary__cta" href={plan.etsyUrl||ETSY_URL} target="_blank" rel="noopener noreferrer">
              Buy on Etsy <span aria-hidden="true">↗</span>
            </a>
            <p className="product-notice">
              Etsy is the official purchase and communication channel. Final plants,
              quantities and site conditions must be verified for your location.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container product-details">
          <div>
            <div className="eyebrow">Plan specifications</div>
            <h2>Know where this direction fits.</h2>
          </div>
          <dl className="product-specs">
            <div><dt>Suitable space</dt><dd>{plan.suitableFor}</dd></div>
            <div><dt>Suggested dimensions</dt><dd>{plan.dimensions}</dd></div>
            <div><dt>Light</dt><dd>{plan.sun}</dd></div>
            <div><dt>Climate guidance</dt><dd>{plan.climate}</dd></div>
            <div><dt>Maintenance</dt><dd>{plan.maintenance}</dd></div>
          </dl>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container product-columns">
          <article className="card">
            <div className="eyebrow">What you receive</div>
            <h2>Clear planning direction</h2>
            <ul className="check-list">{plan.included.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <div className="eyebrow">Plant roles</div>
            <h2>Suggested structure</h2>
            <ul className="plain-list">{plan.plantIdeas.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card card--dark">
            <div className="eyebrow eyebrow--gold">Material direction</div>
            <h2>Finishing elements</h2>
            <ul className="plain-list">{plan.materialIdeas.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container product-steps">
          <div>
            <div className="eyebrow">How to use it</div>
            <h2>Apply the design responsibly.</h2>
          </div>
          <ol>
            <li><strong>Measure the real space.</strong><span>Confirm bed depth, paths, doors, windows, utilities and drainage.</span></li>
            <li><strong>Verify local suitability.</strong><span>Match every plant to the local growing zone, light, soil and mature size.</span></li>
            <li><strong>Mark the layout.</strong><span>Test circulation and spacing on site before purchasing materials.</span></li>
            <li><strong>Install in sequence.</strong><span>Prepare the site, place structure plants first, then complete lower layers and finishing materials.</span></li>
          </ol>
        </div>
      </section>
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div><div className="eyebrow eyebrow--gold">Need a plan for your exact property?</div><h2>Choose custom design when the real space must control every decision.</h2></div>
          <Link className="btn btn--gold" href="/custom-design-service">Explore Custom Design</Link>
        </div>
      </section>
    </main>
  );
}

function normalizePlan(saved,original={}){
  const image=saved.image||original.image;
  return {...original,...saved,name:saved.title||original.name,summary:saved.description||original.summary,description:saved.description||original.description,gallery:image?[image,...(original.gallery||[]).filter(x=>x!==image)]:original.gallery||[],suitableFor:original.suitableFor||"Flexible outdoor spaces",dimensions:original.dimensions||"Verify dimensions on site",sun:original.sun||"Verify local light conditions",climate:original.climate||"Verify plants for the local growing zone",maintenance:original.maintenance||"Varies by selection",included:original.included||["Layout direction","Plant guidance","Material notes"],plantIdeas:original.plantIdeas||["Choose locally suitable plants"],materialIdeas:original.materialIdeas||["Verify materials and quantities locally"]};
}
