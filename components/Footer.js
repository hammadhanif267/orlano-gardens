import Image from "next/image";
import Link from "next/link";
import { ETSY_URL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__intro">
            <Link className="brand" href="/" aria-label="Orlano Gardens home">
              <Image
                src="/assets/images/orlano-gardens-logo.png"
                alt=""
                className="brand__logo"
                width={56}
                height={56}
              />
              <span className="brand__copy">
                <span className="brand__name">ORLANO GARDENS</span>
                <span className="brand__tag">Remote Outdoor Design</span>
              </span>
            </Link>
            <p>
              Remote digital outdoor design for homeowners and visual planning
              support for landscape professionals.
            </p>
            <a
              className="etsy-status"
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Etsy Star Seller</strong>
              <span>Official checkout and verified shop record</span>
            </a>
          </div>
          <div className="footer-column">
            <strong>Services</strong>
            <Link href="/services">Services Overview</Link>
            <Link href="/custom-design-service">Custom Design Service</Link>
            <Link href="/ready-to-use-designs">Ready-to-Use Designs</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="footer-column">
            <strong>Explore</strong>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/garden-guides">Garden Guides</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-column">
            <strong>Policies</strong>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/site-map">Site Map</Link>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} Orlano Gardens. Remote digital outdoor
            design.
          </span>
          <span>
            <a href={ETSY_URL} target="_blank" rel="noopener noreferrer">
              Etsy
            </a>{" "}
            ·{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{" "}
            ·{" "}
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
