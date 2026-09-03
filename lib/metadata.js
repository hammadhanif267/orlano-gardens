import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
  image = "/og-image.jpg",
}) {
  return {
    title: title.includes(SITE_NAME) ? { absolute: title } : title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: path },
    openGraph: {
      title: title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title}, ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}
