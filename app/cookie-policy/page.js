import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cookie Policy | Orlano Gardens",
  description: "Explains essential, analytics and advertising storage and lets visitors manage optional choices.",
  path: "/cookie-policy"
});

const structuredData = {
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"Orlano Gardens",
  "url":"https://orlanogardens.com/cookie-policy",
  "email":"orlanogardens@gmail.com",
  "sameAs":["https://orlanogardens.etsy.com/","https://www.instagram.com/orlanogardens","https://www.facebook.com/orlanogardens"],
  "description":"Remote digital outdoor design created from client-supplied property photos."
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main id="main-content">
      <header className="legal-hero"><div className="container split"><div><div className="eyebrow eyebrow--gold">Legal / Cookie Policy</div><h1>Cookie Policy</h1><p className="lead">This policy separates essential site storage from optional analytics and advertising technologies.</p><p className="small" style={{color: "var(--gold)"}}>Effective: 24 August 2026  •  Last updated: 24 August 2026</p></div><div className="card"><div className="eyebrow">Clear controls</div><h2 style={{fontSize: "2.4rem"}}>Legal information should be usable, not buried.</h2><p>Explains essential, analytics and advertising storage and lets visitors manage optional choices.</p><button className="btn btn--gold" type="button" data-cookie-open="">Manage Cookie Choices</button></div></div></header>
      <section className="section"><div className="container"><div className="legal-layout"><nav className="legal-toc" aria-label="Cookie Policy contents"><div className="eyebrow">Contents</div><a href="#overview">01. What cookies are</a><a href="#status">02. Current build status</a><a href="#essential">03. Essential storage</a><a href="#analytics">04. Analytics cookies</a><a href="#advertising">05. Advertising cookies</a><a href="#choices">06. Managing choices</a><a href="#changes">07. Changes and contact</a><hr style={{border: "0", borderTop: "1px solid var(--line)", margin: "1rem 0"}} /><p className="small muted">Review this page whenever the website, service tools or legal requirements change.</p></nav><article className="legal-copy"><section id="overview"><div className="eyebrow">01</div><h2>What cookies are</h2><p>Cookies and similar storage technologies are small records placed on a device or accessed by a website. Some support basic operation; others measure use or support advertising.</p></section><section id="status"><div className="eyebrow">02</div><h2>Current build status</h2><p>This downloadable static build uses local storage only to remember cookie choices. It does not include live analytics or advertising code. The developer must update this policy when actual production tools are installed.</p></section><section id="essential"><div className="eyebrow">03</div><h2>Essential storage</h2><p>Essential storage remembers privacy preferences and may support security or core site operation. It cannot be disabled through the cookie panel because the choice itself must be remembered.</p></section><section id="analytics"><div className="eyebrow">04</div><h2>Analytics cookies</h2><p>If enabled after valid consent, analytics tools may measure pages visited, interaction patterns, device and approximate location information. Do not activate this category until the provider, retention and consent rules are documented.</p></section><section id="advertising"><div className="eyebrow">05</div><h2>Advertising cookies</h2><p>If advertising is enabled, third-party vendors, including Google, may place or read cookies or use web beacons and IP addresses for ad delivery, fraud prevention, frequency control and measurement. Consent must be collected where required.</p></section><section id="choices"><div className="eyebrow">06</div><h2>Managing choices</h2><p>Use the cookie controls on this site to accept, reject or adjust optional categories. Browser settings may also block or delete storage, but doing so can remove remembered preferences.</p></section><section id="changes"><div className="eyebrow">07</div><h2>Changes and contact</h2><p>Review this policy whenever a new analytics, advertising, embedded-media or consent provider is installed. Questions: <a href="mailto:orlanogardens@gmail.com">orlanogardens@gmail.com</a>.</p></section><div className="legal-callout" style={{background: "var(--gold-soft)"}}><div className="eyebrow" style={{color: "var(--clay)"}}>Implementation requirement</div><p>Before public launch, replace assumptions with the real hosting, form, analytics, advertising, storage and consent configuration. A qualified professional should review the final legal text for the countries served.</p></div></article></div></div></section>
      </main>
    </>
  );
}
