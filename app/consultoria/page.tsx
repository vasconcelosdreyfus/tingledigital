import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { SITE_URL, buildPageMetadata } from "@/lib/social-metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ServicePage } from "@/components/composites/service-page";
import { consultoria } from "@/content/data/services/consultoria";

export const metadata: Metadata = buildPageMetadata({
  title: "Consultoria em gestão e tecnologia",
  description:
    "Consultoria em gestão, tecnologia e projetos sociais e culturais sob medida. Solicite um diagnóstico para o seu projeto.",
  canonical: `${SITE_URL}/consultoria`,
});

export default async function ConsultoriaPage() {
  const english = (await getLocale()) === "en";
  return (
    <>
      <Breadcrumbs
        items={[
          { label: english ? "Home" : "Início", href: "/" },
          { label: english ? "Consulting" : "Consultoria", href: "/consultoria" },
        ]}
      />
      <ServicePage data={consultoria} />
    </>
  );
}
