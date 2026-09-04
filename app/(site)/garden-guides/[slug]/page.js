import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import StructuredData from "@/components/StructuredData";
import { AdSlot } from "@/components/AdSense";
import ArticleActions from "@/components/ArticleActions";
import { getGuide, guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { getPublishedArticle } from "@/lib/cms-articles";
import ArticleTemplate from "@/components/ArticleTemplate";
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = (await getPublishedArticle(slug)) || getGuide(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/garden-guides/${slug}`,
    type: "article",
    image: guide.featuredImage || guide.image,
  });
}

const anchor = (title, index) =>
  `${index + 1}-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

const supportingVisuals = {
  "2026-outdoor-living-zones": [
    ["/assets/images/backyard-zones.webp", "A backyard concept organized into distinct outdoor living zones"],
    ["/assets/images/backyard-second-view.webp", "A second viewpoint showing circulation between backyard activity areas"],
  ],
  "low-maintenance-landscape-2026": [
    ["/assets/images/focused-bed-handoff.webp", "A focused planting plan with a restrained low-maintenance palette"],
    ["/assets/images/front-yard-deliverables.webp", "A visual design handoff showing planting and material direction"],
  ],
  "native-pollinator-front-yard": [
    ["/assets/images/front-yard-before-after.webp", "A front yard before-and-after concept with layered flowering plants"],
    ["/assets/images/focused-bed-before-after.webp", "A planting bed concept showing layered structure and seasonal interest"],
  ],
  "lawn-alternatives-clover-groundcovers": [
    ["/assets/images/multi-area-before-after.webp", "A multi-area yard concept balancing planted and open surfaces"],
    ["/assets/images/side-yard-before-after.webp", "A narrow side-yard concept using planted edges and a walkable route"],
  ],
  "pergola-pavilion-placement": [
    ["/assets/images/patio-before-after.webp", "A patio concept showing the relationship between structure and seating"],
    ["/assets/images/patio-handoff.webp", "A patio planning view with material and layout direction"],
  ],
  "water-wise-drought-tolerant-design": [
    ["/assets/images/focused-bed-before-after.webp", "A compact bed concept with a clear planting hierarchy"],
    ["/assets/images/focused-bed-handoff.webp", "A planting handoff illustrating spacing and material direction"],
  ],
  "pet-friendly-backyard-layout": [
    ["/assets/images/backyard-before-after.webp", "A backyard concept retaining usable open space and clear circulation"],
    ["/assets/images/backyard-zones.webp", "A zoned backyard layout separating active and quiet areas"],
  ],
  "edible-landscape-fruit-trees": [
    ["/assets/images/front-yard-deliverables.webp", "A planting plan reference for arranging layered landscape elements"],
    ["/assets/images/front-yard-before-after.webp", "A front-yard concept demonstrating mature planting scale"],
  ],
  "warm-mixed-material-patio": [
    ["/assets/images/patio-before-after.webp", "A patio transformation combining planting and hardscape"],
    ["/assets/images/project-triptych.webp", "Three planning views used to compare outdoor layout and material choices"],
  ],
  "wildfire-aware-landscape-basics": [
    ["/assets/images/multi-area-before-after.webp", "A property concept showing separated outdoor planning areas"],
    ["/assets/images/side-yard-before-after.webp", "A side-yard concept with a clear access route beside the home"],
  ],
};

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const cmsArticle = await getPublishedArticle(slug);
  const guide = cmsArticle || getGuide(slug);
  if (!guide) notFound();
  if (cmsArticle) return <ArticleTemplate article={cmsArticle} />;
  const path = `/garden-guides/${slug}`;
  const related = guides
    .filter((item) => item.slug !== slug && item.category === guide.category)
    .slice(0, 3);
  const articleVisuals = supportingVisuals[slug] ?? supportingVisuals["2026-outdoor-living-zones"];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(guide.image),
    author: {
      "@type": "Organization",
      name: "Orlano Gardens",
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: "Orlano Gardens",
      url: absoluteUrl("/"),
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Garden Guides",
        item: absoluteUrl("/garden-guides"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: absoluteUrl(path),
      },
    ],
  };
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />
      <div className="article-progress" aria-hidden="true">
        <span data-article-progress="" />
      </div>
      <header className="article-header">
        <div className="container--narrow">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/garden-guides">Garden Guides</Link>
            <span>/</span>
            <span>{guide.category}</span>
          </nav>
          <span className="tag">{guide.category}</span>
          <h1>{guide.title}</h1>
          <p className="article-deck">{guide.excerpt}</p>
          <div className="article-meta">
            <span>Written by Orlano Gardens</span>
            <span>Updated {guide.updated}</span>
            <span>{guide.readTime} read</span>
          </div>
          <ArticleActions />
        </div>
      </header>
      <section className="section section--tight article-figure-section">
        <div className="container--narrow">
          <figure className="image-frame">
            <Image
              src={guide.image}
              alt={`${guide.title} illustrated with an Orlano Gardens real space design`}
              width={1400}
              height={860}
              priority
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </figure>
        </div>
      </section>
      <section className="section article-content-section">
        <div className="container article-layout">
          <aside className="article-toc">
            <strong>In this guide</strong>
            {guide.sections.map(([title], index) => (
              <a
                data-article-toc=""
                href={`#${anchor(title, index)}`}
                key={title}
              >
                {title}
              </a>
            ))}
            <a data-article-toc="" href="#decision-to-site">
              From idea to site decision
            </a>
            <a data-article-toc="" href="#field-checklist">
              Field checklist
            </a>
            <a data-article-toc="" href="#common-questions">
              Common questions
            </a>
          </aside>
          <article className="article-body" data-article="">
            <p className="lead">{guide.intro}</p>
            <div className="article-callout">
              <strong>Scope note</strong>
              <p>
                This educational guide supports early planning. It does not
                replace a site visit, survey, engineering, code review, utility
                marking, plant diagnosis, fire guidance or local installation
                expertise.
              </p>
            </div>
            {guide.sections.map(([title, copy], index) => (
              <Fragment key={title}>
                <section>
                  <h2 id={anchor(title, index)}>{title}</h2>
                  <p>{copy}</p>
                </section>
                {(index === 1 || index === 3) && (
                  <figure className="article-support-visual">
                    <Image
                      src={articleVisuals[index === 1 ? 0 : 1][0]}
                      alt={articleVisuals[index === 1 ? 0 : 1][1]}
                      width={1536}
                      height={1024}
                      loading="lazy"
                      sizes="(max-width: 900px) 100vw, 720px"
                    />
                  </figure>
                )}
              </Fragment>
            ))}
            <section>
              <h2 id="decision-to-site">Turn the idea into a site decision</h2>
              <p>
                Photograph the current condition from the same viewpoints you
                will use to judge the result. Add a rough base plan with doors,
                windows, paths, utilities, drainage clues, grade changes and
                anything that must remain. Then write the desired outcome in one
                sentence. For this topic, your first evidence should address{" "}
                <strong>{guide.checklist[0].toLowerCase()}</strong> and{" "}
                <strong>{guide.checklist[1].toLowerCase()}</strong>. That keeps
                the project focused on the problem rather than a shopping list.
              </p>
              <p>
                Compare at least two workable directions against the same
                criteria: daily use, mature scale, water, maintenance, access,
                safety, implementation cost and reversibility. Eliminate any
                option that only succeeds when a site fact is ignored. A visual
                concept can expose these tradeoffs, but final quantities and
                technical decisions should come from field measurements, product
                information and qualified local advice.
              </p>
              <p>
                Before ordering, mark the proposed footprint at full size and
                live with it for several days when possible. Request current
                quotes and availability, identify permits or specialist reviews
                and write the sequence of work. Record the final reasons for the
                choice so later substitutions preserve the design intent instead
                of starting the decision again.
              </p>
            </section>
            <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT} />
            <section>
              <h2 id="field-checklist">Field checklist</h2>
              <ul className="check-list">
                {guide.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 id="common-questions">Common questions</h2>
              {guide.faq.map(([question, answer]) => (
                <div className="faq-inline" key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </section>
            <section className="author-note">
              <div className="eyebrow">Editorial responsibility</div>
              <h2>Prepared by Orlano Gardens</h2>
              <p>
                Orlano Gardens publishes photo based outdoor design guidance for
                homeowners who want to compare a direction before buying plants,
                materials or local installation. Every guide distinguishes
                visualization from completed work and identifies decisions that
                require authoritative local verification.
              </p>
              <Link href="/about">
                Learn about the studio and its boundaries →
              </Link>
            </section>
          </article>
          <aside className="article-aside">
            <div className="card card--gold">
              <div className="eyebrow">Apply it to your space</div>
              <h3>Need a visual direction?</h3>
              <p>
                Choose a custom design package, then continue to Etsy for the
                official order.
              </p>
              <Link
                className="btn btn--primary btn--sm"
                href="/custom-design-service"
              >
                Explore Custom Design
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="section section--soft related-guides">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Continue planning</div>
              <h2>Related decision guides.</h2>
            </div>
          </div>
          <div className="guide-grid">
            {related.map((item) => (
              <Link
                className="guide-card guide-card--link related-guide-card"
                href={`/garden-guides/${item.slug}`}
                key={item.slug}
              >
                <Image
                  src={item.image}
                  alt=""
                  width={700}
                  height={440}
                  loading="lazy"
                />
                <div className="guide-card__body">
                  <div className="guide-card__meta">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="text-link">
                    Read “{item.title}” →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
