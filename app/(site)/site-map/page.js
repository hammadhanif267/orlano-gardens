import Link from "next/link";
import { guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/metadata";
import { premadePlans } from "@/lib/site";

export const metadata = buildMetadata({
  title: "HTML Site Map",
  description:
    "Browse every Orlano Gardens service, portfolio study, garden guide, business page, and policy.",
  path: "/site-map",
});

const groups = [
  [
    "Start here",
    [
      ["Home", "/"],
      ["Services", "/services"],
      ["Portfolio", "/portfolio"],
      ["How It Works", "/how-it-works"],
      ["Pricing", "/pricing"],
    ],
  ],
  [
    "Business",
    [
      ["About the Studio", "/about"],
      ["FAQ", "/faq"],
      ["Contact", "/contact"],
    ],
  ],
  [
    "Services",
    [
      ["Custom Design Service", "/custom-design-service"],
      ["Ready-to-Use Designs", "/ready-to-use-designs"],
    ],
  ],
  [
    "Policies",
    [
      ["Privacy Policy", "/privacy-policy"],
      ["Cookie Policy", "/cookie-policy"],
      ["Terms and Conditions", "/terms-and-conditions"],
      ["Disclaimer", "/disclaimer"],
      ["Accessibility", "/accessibility"],
    ],
  ],
];

export default function SiteMapPage() {
  return (
    <main id="main-content">
      <section className="legal-hero">
        <div className="container--narrow">
          <div className="eyebrow eyebrow--gold">Navigation</div>
          <h1>Site Map</h1>
          <p className="lead">
            Every indexable page in one readable directory.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            {groups.map(([title, links]) => (
              <section className="card" key={title}>
                <h2 style={{ fontSize: "2rem" }}>{title}</h2>
                <ul className="plain-list">
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <section className="section section--tight">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Garden guides</div>
                <h2>{guides.length} articles</h2>
              </div>
            </div>
            <div className="grid grid--3">
              {guides.map((guide) => (
                <Link
                  className="card"
                  href={`/garden-guides/${guide.slug}`}
                  key={guide.slug}
                >
                  <strong>{guide.title}</strong>
                  <span>{guide.category}</span>
                </Link>
              ))}
            </div>
          </section>
          <section className="section section--tight">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Premade designs</div>
                <h2>Plan examples</h2>
              </div>
            </div>
            <div className="grid grid--3">
              {premadePlans.map((plan) => (
                <Link className="card" href={`/ready-to-use-designs/${plan.slug}`} key={plan.slug}>
                  <strong>{plan.name}</strong>
                  <span>{plan.type}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
