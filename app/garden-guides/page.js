import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Garden and Outdoor Design Guides",
  description:
    "Ten source linked guides covering current outdoor living, low maintenance, climate, planting and layout decisions.",
  path: "/garden-guides",
});

export default function GuidesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Orlano Gardens design guides",
    url: absoluteUrl("/garden-guides"),
    hasPart: guides.map((guide) => ({
      "@type": "Article",
      headline: guide.title,
      url: absoluteUrl(`/garden-guides/${guide.slug}`),
    })),
  };
  const featured = guides[0];
  return (
    <main id="main-content">
      <StructuredData data={schema} />
      <section className="guides-hero">
        <div className="container guides-hero__inner">
          <div className="guides-hero__intro motion-rise">
            <div className="eyebrow">Ten focused garden guides</div>
            <h1>Outdoor decisions explained clearly.</h1>
            <p className="lead">
              Use the guides to understand layout, maintenance and material
              tradeoffs before spending on the wrong direction.
            </p>
            <a className="btn btn--primary" href="#guide-library">
              Browse All Guides
            </a>
          </div>
          <Link className="featured-guide motion-rise motion-delay-1" href={`/garden-guides/${featured.slug}`}>
            <span className="featured-guide__media">
              <Image src={featured.image} alt="" width={1200} height={800} priority />
            </span>
            <div className="featured-guide__body">
              <span className="tag">Featured guide</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="text-link">Read featured guide →</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="section" id="guide-library">
        <div className="container" data-filter-system="">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Guide library</div>
              <h2>Open any card to read the complete guide.</h2>
            </div>
            <p>
              Every article includes sources, practical checks and clear limits
              for decisions that require local verification.
            </p>
          </div>
          <div className="toolbar">
            <label className="search-field">
              <span className="sr-only">Search guides</span>
              <input
                type="search"
                placeholder="Search topics or problems"
                data-filter-search=""
              />
            </label>
          </div>
          <div className="guide-grid">
            {guides.map((guide, index) => (
              <Link
                className="guide-item guide-card guide-card--link"
                data-category="trends"
                data-search={`${guide.title} ${guide.excerpt}`}
                href={`/garden-guides/${guide.slug}`}
                key={guide.slug}
              >
                <Image
                  src={guide.image}
                  alt=""
                  width={760}
                  height={475}
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <div className="guide-card__body">
                  <div className="guide-card__meta">
                    <span>{guide.category}</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="guide-card__title">{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                  <span className="text-link">Read guide →</span>
                </div>
              </Link>
            ))}
            <div className="empty-state" data-filter-empty="" hidden>
              No guide matches that search.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
