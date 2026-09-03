import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEnhancements from "@/components/SiteEnhancements";
import RouteTransition from "@/components/RouteTransition";
import StructuredData from "@/components/StructuredData";
import { AdSenseScript } from "@/components/AdSense";
import { absoluteUrl, EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Orlano Gardens | Remote Outdoor Design",
    template: "%s | Orlano Gardens",
  },
  description:
    "Remote outdoor design concepts created from photos of your real property, with clear layouts, planting direction, and an Etsy based ordering process.",
  robots: { index: true, follow: true },
  category: "home and garden",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: absoluteUrl("/"),
  email: EMAIL,
  areaServed: "Worldwide",
  serviceType: "Remote digital outdoor design",
  sameAs: [
    "https://orlanogardens.etsy.com/",
    "https://www.instagram.com/orlanogardens",
    "https://www.facebook.com/orlanogardens",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <StructuredData data={organizationSchema} />
        <AdSenseScript />
        <Header />
        <RouteTransition />
        {children}
        <Footer />
        <SiteEnhancements />
      </body>
    </html>
  );
}
