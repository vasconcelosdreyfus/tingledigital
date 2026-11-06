import type { Metadata } from "next";
import { socialImages } from "@/lib/social-metadata";
import { ServicePage } from "@/components/composites/service-page";
import { utilities } from "@/content/data/services/utilities";

export const metadata: Metadata = {
  title: "Utilities",
  description: utilities.heroSubtitle,
  openGraph: { images: socialImages, title: "Utilities · Tingle Digital", description: utilities.heroSubtitle },
};

export default function UtilitiesPage() {
  return <ServicePage data={utilities} />;
}
