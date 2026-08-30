import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__intro">
            <Link className="brand" href="/" aria-label="Orlano Gardens home">
              <img src="/assets/images/orlano-logo.jpg" alt="Orlano Gardens logo" className="brand__logo" />
              <span className="brand__copy"><span className="brand__name">ORLANO GARDENS</span><span className="brand__tag">Remote Outdoor Design</span></span>
            </Link>
            <p>Independent digital outdoor design for homeowners who want a clear direction before buying plants, materials or local installation.</p>
          </div>
          <div className="footer-column"><strong>Services</strong>
            <Link href="/services/front-yard-design">Front Yard</Link><Link href="/services/backyard-design">Backyard</Link><Link href="/services/garden-bed-entry">Garden Bed + Entry</Link><Link href="/services/patio-outdoor-living">Patio + Outdoor Living</Link><Link href="/services/multi-area-property">Multi-Area Property</Link>
          </div>
          <div className="footer-column"><strong>Explore</strong>
            <Link href="/portfolio">Projects</Link><Link href="/pricing">Pricing</Link><Link href="/garden-guides">Garden Guides</Link><Link href="/faq">FAQ</Link><Link href="/site-map">Site Map</Link>
          </div>
          <div className="footer-column"><strong>Information</strong>
            <Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-of-service">Terms of Service</Link><Link href="/cookie-policy">Cookie Policy</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© <span data-current-year="">2026</span> Orlano Gardens. Remote digital outdoor design.</span>
          <span><a href="https://orlanogardens.etsy.com/" target="_blank" rel="noopener noreferrer">Etsy</a> · <a href="https://www.instagram.com/orlanogardens" target="_blank" rel="noopener noreferrer">Instagram</a> · <a href="https://www.facebook.com/orlanogardens" target="_blank" rel="noopener noreferrer">Facebook</a></span>
        </div>
      </div>
    </footer>
  );
}
