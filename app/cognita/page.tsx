import type { Metadata } from "next";
import { socialImages } from "@/lib/social-metadata";
import { ProductPage } from "@/components/composites/product-page";
import { cognita } from "@/content/data/products/cognita";

export const metadata: Metadata = {
  title: "Cognita — Plataforma de gestão escolar",
  description: cognita.heroSubtitle,
  openGraph: { images: socialImages,
    title: "Cognita · Tingle Digital",
    description: cognita.heroSubtitle,
  },
};

export default function CognitaPage() {
  return <ProductPage data={cognita} />;
}
