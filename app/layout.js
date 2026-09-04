import "./globals.css";
import { SITE_URL } from "@/lib/site";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
