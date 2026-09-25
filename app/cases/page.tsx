import type { Metadata } from "next";
import { Container } from "@/components/primitives/container";
import { PageHero } from "@/components/shared/page-hero";
import { AppsShowcase } from "@/components/apps/apps-showcase";
import { apps } from "@/content/data/apps";

export const metadata: Metadata = {
  title: "Aplicações e cases",
  description:
    "Apps nas lojas, plataformas em produção e experiências em festivais e eventos feitos pela Tingle Digital, com telas reais e o status de cada um.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Aplicações e cases"
        title="O que a Tingle já colocou no ar."
        subtitle="Apps nas lojas, plataformas em produção e experiências que rodaram em festivais e salas de aula, cada um com o status real de hoje."
      />
      <section className="pb-24 lg:pb-32">
        <Container size="lg">
          <AppsShowcase apps={apps} />
        </Container>
      </section>
    </>
  );
}
