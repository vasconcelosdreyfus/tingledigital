import type { Metadata } from "next";
import { socialImages } from "@/lib/social-metadata";
import { ServicePage } from "@/components/composites/service-page";
import { consultoria } from "@/content/data/services/consultoria";

export const metadata: Metadata = {
  title: "Consultoria",
  description: consultoria.heroSubtitle,
  openGraph: { images: socialImages, title: "Consultoria · Tingle Digital", description: consultoria.heroSubtitle },
};

export default function ConsultoriaPage() {
  return <ServicePage data={consultoria} />;
}
