import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { SITE_URL, buildPageMetadata } from "@/lib/social-metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ProductPage } from "@/components/composites/product-page";
import { cognita } from "@/content/data/products/cognita";

export const metadata: Metadata = buildPageMetadata({
  title: "Cognita: gestão educacional e social",
  description:
    "Plataforma educacional e ERP para projetos sociais: alunos, turmas, pesquisas e prestação de contas. Solicite uma demonstração.",
  canonical: `${SITE_URL}/cognita`,
});

export default async function CognitaPage() {
  const english = (await getLocale()) === "en";
  return (
    <>
      <Breadcrumbs
        items={[
          { label: english ? "Home" : "Início", href: "/" },
          { label: "Cases", href: "/cases" },
          { label: "Cognita", href: "/cognita" },
        ]}
      />
      <ProductPage data={cognita} />
    </>
  );
}
