import type { Metadata } from "next";
import { ServicePage } from "@/components/composites/service-page";
import { utilities } from "@/content/data/services/utilities";

export const metadata: Metadata = {
  title: "Utilities",
  description: utilities.heroSubtitle,
  openGraph: { title: "Utilities · Tingle Digital", description: utilities.heroSubtitle },
};

export default function UtilitiesPage() {
  return <ServicePage data={utilities} />;
}
