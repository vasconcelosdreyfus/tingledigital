import type { Metadata } from "next";

export const SITE_URL = "https://tingledigital.com";
export const SITE_NAME = "Tingle Digital";

// Pages with their own openGraph object replace inherited metadata.
export const socialImages = [
  {
    url: "/opengraph-image.png?v=20261106",
    width: 1200,
    height: 630,
    alt: "Tingle Digital: tecnologia com alma criativa",
  },
];

interface BuildMetadataOptions {
  title: string;
  description: string;
  canonical: string;
  locale?: "pt" | "en";
  absoluteTitle?: boolean;
  robots?: Metadata["robots"];
}

export function buildPageMetadata({
  title,
  description,
  canonical,
  locale = "pt",
  absoluteTitle = false,
  robots,
}: BuildMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} · ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical },
    ...(robots ? { robots } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === "en" ? "en_US" : "pt_BR",
      type: "website",
      images: socialImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: socialImages.map((img) => img.url),
    },
  };
}
