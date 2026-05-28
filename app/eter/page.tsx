import type { Metadata } from "next";
import { ProductPage } from "@/components/composites/product-page";
import { eter } from "@/content/data/products/eter";

export const metadata: Metadata = {
  title: "Eter — Mensageiro com privacidade radical",
  description: eter.heroSubtitle,
  openGraph: {
    title: "Eter · Tingle Digital",
    description: eter.heroSubtitle,
  },
};

export default function EterPage() {
  return <ProductPage data={eter} />;
}
