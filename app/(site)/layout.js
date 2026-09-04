import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEnhancements from "@/components/SiteEnhancements";
import RouteTransition from "@/components/RouteTransition";
import StructuredData from "@/components/StructuredData";
import { AdSenseScript } from "@/components/AdSense";
import { absoluteUrl, EMAIL, SITE_NAME } from "@/lib/site";

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

export default function SiteLayout({ children }) {
  return (
    <>
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
    </>
  );
}
