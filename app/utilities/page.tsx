import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { SITE_URL, buildPageMetadata } from "@/lib/social-metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ServicePage } from "@/components/composites/service-page";
import { utilities } from "@/content/data/services/utilities";
import styles from "../justified-copy.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Utilities, energia, AI e IoT",
  description:
    "P&D regulatório, eficiência energética, AI, IoT e hiperautomação para energia e água. Agende uma conversa técnica com nossa equipe.",
  canonical: `${SITE_URL}/utilities`,
});

export default async function UtilitiesPage() {
  const english = (await getLocale()) === "en";
  return (
    <div className={styles.page}>
      <Breadcrumbs
        items={[
          { label: english ? "Home" : "Início", href: "/" },
          { label: "Utilities", href: "/utilities" },
        ]}
      />
      <ServicePage data={utilities} />
    </div>
  );
}
