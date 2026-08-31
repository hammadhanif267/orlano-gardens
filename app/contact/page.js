import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact | Orlano Gardens",
  description: "Contact Orlano Gardens about remote outdoor design, package guidance, an existing Etsy order or a privacy request.",
  path: "/contact"
});

const structuredData = {
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"Orlano Gardens",
  "url":"https://orlanogardens.com/contact",
  "email":"orlanogardens@gmail.com",
  "sameAs":["https://orlanogardens.etsy.com/","https://www.instagram.com/orlanogardens","https://www.facebook.com/orlanogardens"],
  "description":"Remote digital outdoor design created from client-supplied property photos."
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main id="main-content">
      <section className="hero"><div className="container hero__grid"><div><div className="eyebrow">Contact</div><h1>Tell us what the space needs to <span className="accent">solve.</span></h1><p className="lead">Use the inquiry form for general questions. For a project review, include the full area, location, priorities and clear photographs.</p><div className="hero__proofs"><span className="chip">Reply by email</span><span className="chip">Scope before checkout</span><span className="chip">Etsy payment only</span></div><p className="service-clarifier">Do not send passwords, payment-card details, government identifiers or other sensitive information.</p></div><div className="card card--dark"><div className="eyebrow eyebrow--gold">Direct contact</div><h2 style={{fontSize: "clamp(1.5rem, 6.2vw, 2.7rem)", overflowWrap: "anywhere", wordBreak: "break-word"}}>orlanogardens@gmail.com</h2><p>Use email for a slow walkthrough video or a photo set that is too large for the inquiry form.</p><a className="btn btn--gold" href="mailto:orlanogardens@gmail.com">Open Email</a><hr style={{border: "0", borderTop: "1px solid #365744", margin: "1.5rem 0"}} /><p className="small">Instagram: @orlanogardens<br />Etsy: official Orlano Gardens shop</p></div></div></section>
      <section className="section"><div className="container split split--top"><div><div className="eyebrow">Before contacting</div><h2>Send enough context for a useful answer.</h2><ul className="check-list"><li>Exact city, state/province and country</li><li>The area that needs design</li><li>Preferred style and maintenance level</li><li>What must stay or be removed</li><li>Budget direction for physical implementation</li><li>Clear wide photos from useful angles</li></ul><div className="card card--gold"><h3>About file attachments</h3><p>The form can preview selected images on your device, but static websites cannot send attachments securely by themselves. The form prepares an email summary; attach photos or video in your email app before sending.</p></div></div><form className="form-shell" data-email-form="contact"><div className="eyebrow">General inquiry</div><h2>Send a clear message.</h2><div className="form-grid"><div className="field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="Name" autoComplete="name" required /></div><div className="field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="Email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="contact-location">City / state / country</label><input id="contact-location" name="Location" autoComplete="address-level2" /></div><div className="field"><label htmlFor="contact-topic">Topic</label><select id="contact-topic" name="Topic"><option>Package guidance</option><option>Existing Etsy order</option><option>Garden guide question</option><option>Privacy or data request</option><option>Other</option></select></div><div className="field field--full"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="Message" required placeholder="Describe the area, question and what you need clarified."></textarea></div></div><button className="btn btn--primary" type="submit">Send Email</button><p className="form-status" data-form-status="" aria-live="polite" hidden></p></form></div></section>
      <section className="section section--dark"><div className="container"><div className="section-heading"><div><div className="eyebrow">The right route</div><h2>Choose the shortest path to the answer.</h2></div><p>Do not bury a project request inside a vague social message.</p></div><div className="grid grid--3"><article className="card card--dark"><span className="card__number">01</span><h3>New custom project</h3><p>Use the structured custom-design form with photos and scope details.</p><a className="btn btn--gold btn--sm" href="/get-custom-design">Start Project</a></article><article className="card card--dark"><span className="card__number">02</span><h3>Existing Etsy order</h3><p>Keep order-specific questions in Etsy messages whenever possible.</p><a className="btn btn--light btn--sm" href="https://orlanogardens.etsy.com/" target="_blank" rel="noopener">Open Etsy</a></article><article className="card card--dark"><span className="card__number">03</span><h3>Common service question</h3><p>Read delivery, revision, pricing and installation answers first.</p><a className="btn btn--light btn--sm" href="/faq">Read FAQ</a></article></div></div></section>
      <section className="cta-band"><div className="container cta-band__inner"><div><div className="eyebrow eyebrow--gold">Ready when the space is</div><h2>Need a design—not just an answer?</h2><p>Share clear photos and priorities so the correct scope can be confirmed before Etsy checkout.</p></div><a className="btn btn--gold" href="/get-custom-design">Get Your Custom Design</a></div></section>
      </main>
    </>
  );
}
