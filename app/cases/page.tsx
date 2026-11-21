import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { AppsShowcase } from "@/components/apps/apps-showcase";
import Link from "next/link";
import { ServiceCases } from "@/components/shared/service-cases";
import { portfolio } from "@/content/data/portfolio";
import { SITE_URL, buildPageMetadata } from "@/lib/social-metadata";
import styles from "../justified-copy.module.css";

const groups = [
  { key: "products", id: "aplicacoes" },
  { key: "experiences", id: "experiencias-digitais" },
  { key: "energy", id: "energia-negocios" },
  { key: "culture", id: "cultura-impacto" },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) === "en" ? "en" : "pt";
  return buildPageMetadata({
    title: locale === "en" ? "Cases and applications" : "Cases e aplicações",
    description:
      locale === "en"
        ? "Explore our own products, digital experiences and projects in energy, culture and social impact. See every solution in production."
        : "Conheça nossos produtos próprios, experiências digitais e projetos em energia, cultura e impacto social. Veja cada entrega em uso.",
    canonical: `${SITE_URL}/cases`,
    locale,
  });
}

export default async function CasesPage() {
  const english = (await getLocale()) === "en";
  const t = await getTranslations("portfolio");
  return (
    <div className={styles.page}>
      <Breadcrumbs
        items={[
          { label: english ? "Home" : "Início", href: "/" },
          { label: "Cases", href: "/cases" },
        ]}
      />
      <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <Container>
        <nav aria-label={t("navLabel")} className="mb-12 flex flex-wrap gap-3">
          {groups.map(({ key, id }) => (
            <Link key={key} href={`#${id}`} className="rounded-full border px-5 py-3 text-sm font-medium hover:underline" style={{ borderColor: "var(--border)" }}>{t(`${key}.label`)} · {portfolio[key].length}</Link>
          ))}
        </nav>
      </Container>
      {groups.slice(0, 2).map(({ key, id }) => {
        if (key !== "products" && key !== "experiences") return null;
        return (
          <section key={key} id={id} data-portfolio-group={key} className="scroll-mt-24 py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
            <Container size="lg">
              <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{t(`${key}.label`)}</p>
              <h2 className="text-display-2 mb-6 max-w-3xl text-balance">{t(`${key}.title`)}</h2>
              <p className="mb-12 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>{t(`${key}.description`)}</p>
              <AppsShowcase apps={portfolio[key]} />
            </Container>
          </section>
        );
      })}
      <div id="projetos" className="scroll-mt-24">
        <ServiceCases cases={portfolio.energy} id="energia-negocios" eyebrow={t("energy.label")} title={t("energy.title")} />
        <ServiceCases cases={portfolio.culture} id="cultura-impacto" eyebrow={t("culture.label")} title={t("culture.title")} />
      </div>
    </div>
  );
}
