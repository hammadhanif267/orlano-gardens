export function buildMetadata({ title, description, path = "/" }) {
  const fullTitle = title.includes("Orlano Gardens") ? title : `${title} | Orlano Gardens`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL("https://orlanogardens.com"),
    alternates: { canonical: path },
    icons: { icon: "/assets/images/favicon.svg" },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: "Orlano Gardens",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Orlano Gardens — Remote Outdoor Design" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
