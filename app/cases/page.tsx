import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { PageHero } from "@/components/shared/page-hero";
import { AppsShowcase } from "@/components/apps/apps-showcase";
import { apps } from "@/content/data/apps";
import Link from "next/link";
import { ServiceCases } from "@/components/shared/service-cases";
import { serviceCases } from "@/content/data/service-cases";

export const metadata: Metadata = {
  title: "Aplicações e cases",
  description:
    "Cases da Tingle em eficiência energética, cultura, educação e tecnologia: trocadores de calor, Circuito Musical das Águas, projetos de P&D e aplicações digitais.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Aplicações e cases"
        title="Da estratégia ao resultado. Em campo e no digital."
        subtitle="Negócios no setor elétrico, shows com o Estado, educação e produtos digitais. Conheça os projetos e a atuação da Tingle em cada entrega."
      />
      <Container>
        <nav aria-label="Seções dos cases" className="mb-12 flex flex-wrap gap-3">
          <Link href="#projetos" className="rounded-full border px-5 py-3 text-sm font-medium hover:underline" style={{ borderColor: "var(--border)" }}>Projetos e consultoria · {serviceCases.length}</Link>
          <Link href="#aplicacoes" className="rounded-full border px-5 py-3 text-sm font-medium hover:underline" style={{ borderColor: "var(--border)" }}>Aplicações e experiências · {apps.length}</Link>
        </nav>
      </Container>
      <ServiceCases cases={serviceCases} title="Projetos que conectam estratégia, operação e resultado." />
      <section id="aplicacoes" className="scroll-mt-24 py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
        <Container size="lg">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>Aplicações e experiências</p>
          <h2 className="text-display-2 mb-6 max-w-3xl text-balance">Produtos que já chegaram às pessoas.</h2>
          <p className="mb-12 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>Apps nas lojas, plataformas em produção e experiências em eventos, com o status de cada projeto.</p>
          <AppsShowcase apps={apps} />
        </Container>
      </section>
    </>
  );
}
