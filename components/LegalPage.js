export default function LegalPage({
  eyebrow,
  title,
  summary,
  updated = "September 1, 2026",
  sections,
}) {
  return (
    <main id="main-content">
      <header className="legal-hero">
        <div className="container split">
          <div>
            <div className="eyebrow eyebrow--gold">{eyebrow}</div>
            <h1>{title}</h1>
            <p className="lead">{summary}</p>
            <p className="small" style={{ color: "var(--gold)" }}>
              Effective and last updated: {updated}
            </p>
          </div>
          <aside className="card">
            <div className="eyebrow">Plain language notice</div>
            <h2 style={{ fontSize: "2.4rem" }}>
              The current website setup is stated directly.
            </h2>
            <p>
              Orders and payments occur on Etsy. This website currently has no
              account system, file upload, analytics, or advertising code.
            </p>
          </aside>
        </div>
      </header>
      <section className="section">
        <div className="container legal-layout">
          <nav className="legal-toc" aria-label={`${title} contents`}>
            <div className="eyebrow">Contents</div>
            {sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}>
                {String(index + 1).padStart(2, "0")}. {section.title}
              </a>
            ))}
          </nav>
          <article className="legal-copy">
            {sections.map((section, index) => (
              <section id={section.id} key={section.id}>
                <div className="eyebrow">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
