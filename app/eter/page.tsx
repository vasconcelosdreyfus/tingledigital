import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/social-metadata";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ProductPage } from "@/components/composites/product-page";
import { eter } from "@/content/data/products/eter";

export const metadata: Metadata = buildPageMetadata({
  title: "Eter: mensageiro privado com E2E",
  description:
    "Mensageiro privado com Signal Protocol, cadastro só por username e chamadas cifradas. Baixe na App Store ou no Google Play.",
  canonical: "https://eter.social",
});

export default async function EterPage() {
  const english = (await getLocale()) === "en";
  return (
    <>
      <Breadcrumbs
        items={[
          { label: english ? "Home" : "Início", href: "/" },
          { label: "Cases", href: "/cases" },
          { label: "Eter", href: "/eter" },
        ]}
      />
      <ProductPage data={eter} />
    </>
  );
}
