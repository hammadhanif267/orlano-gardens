import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Get Your Custom Outdoor Design | Orlano Gardens",
  description: "Send project photos, location and priorities so Orlano Gardens can confirm the correct remote digital design scope before Etsy checkout.",
  path: "/get-custom-design"
});

const structuredData = {
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"Orlano Gardens",
  "url":"https://orlanogardens.com/get-custom-design",
  "email":"orlanogardens@gmail.com",
  "sameAs":["https://orlanogardens.etsy.com/","https://www.instagram.com/orlanogardens","https://www.facebook.com/orlanogardens"],
  "description":"Remote digital outdoor design created from client-supplied property photos."
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main id="main-content">
      <section className="hero hero--dark"><div className="container hero__grid"><div><div className="eyebrow eyebrow--gold">Get Your Custom Design</div><h1>Start with the real space—not a <span className="accent">package guess.</span></h1><p className="lead">Send the property, location and priorities. The correct service and package are confirmed before official Etsy checkout.</p><div className="hero__proofs"><span className="chip">Photo-based design</span><span className="chip">3–5 working days</span><span className="chip">One focused revision</span></div><p className="service-clarifier" style={{color: "#e6c56d"}}>Remote digital design only. No physical landscaping, products or installation.</p></div><div className="hero__visual"><span className="image-label">Digital Design Concept</span><img className="hero__image" src="/assets/images/multi-area-hero.webp" alt="Custom multi-area digital outdoor design concept" /><div className="hero__caption"><strong>Clear project details produce better concepts.</strong><span>Show the whole area and state what must stay, move or be removed.</span></div></div></div></section>
      <section className="section"><div className="container"><div className="custom-start card card--gold"><div className="eyebrow">Project intake</div><h2>Ready to share your space?</h2><p>Use the contact page to send your project details. Scope can be confirmed before official checkout.</p><a className="btn btn--primary" href="/contact">Contact Orlano Gardens</a></div></div></section>
      <section className="section section--ivory"><div className="container"><div className="section-heading"><div><div className="eyebrow">What happens next</div><h2>Scope before payment.</h2></div><p>The inquiry does not create an order or charge a card.</p></div><div className="process-line"><div className="process-step"><span className="process-step__number">01</span><h3>Review</h3><p>The photos and project information are checked for scope and missing views.</p></div><div className="process-step"><span className="process-step__number">02</span><h3>Clarify</h3><p>Any necessary questions are sent before the package is recommended.</p></div><div className="process-step"><span className="process-step__number">03</span><h3>Checkout</h3><p>The official Etsy listing is used after the correct scope is confirmed.</p></div><div className="process-step"><span className="process-step__number">04</span><h3>Design</h3><p>The 3–5 working day delivery window begins after complete inputs.</p></div></div></div></section>
      <section className="section section--dark"><div className="container split"><div><div className="eyebrow eyebrow--gold">Payment boundary</div><h2>The website does not take payment.</h2><p>Checkout is completed through the official Orlano Gardens Etsy shop after the service scope is confirmed.</p><a className="btn btn--gold" href="https://orlanogardens.etsy.com/" target="_blank" rel="noopener">Visit Official Etsy Shop</a></div><div className="card card--dark"><h3>Do not send through forms or email</h3><ul className="plain-list"><li>Payment-card numbers</li><li>Account passwords</li><li>Government identification</li><li>Medical or other sensitive information</li></ul></div></div></section>
      </main>
    </>
  );
}
