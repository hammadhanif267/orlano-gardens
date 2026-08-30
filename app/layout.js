import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieControls from "@/components/CookieControls";
import SiteEnhancements from "@/components/SiteEnhancements";

export const metadata = {
  metadataBase: new URL("https://orlanogardens.com"),
  title: { default: "Orlano Gardens | Remote Outdoor Design", template: "%s | Orlano Gardens" },
  description: "Remote digital outdoor design created from real property photos and priorities.",
  icons: { icon: "/assets/images/favicon.svg" },
  robots: { index: true, follow: true },
  keywords: ["remote outdoor design", "garden design", "front yard design", "backyard design", "landscape design", "Orlano Gardens"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        {children}
        <Footer />
        <CookieControls />
        <SiteEnhancements />
      </body>
    </html>
  );
}
