import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";

export function PartnerExperience() {
  return (
    <section aria-labelledby="experience-title" className="py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
      <Container>
        <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>Experiência que se soma</p>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 id="experience-title" className="text-display-2 text-balance">Quem conhece a operação sabe onde transformar.</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>A experiência que sustenta a Tingle reúne gestão de operações, digitalização de canais de atendimento, eficiência energética e desenvolvimento de negócios, construída em distribuidoras de energia e empresas de serviços.</p>
            <p>Essa visão se conecta à nossa atuação em produtos digitais, educação, cultura e impacto social. Combinamos estratégia, tecnologia e articulação de parceiros para conduzir projetos da concepção à operação.</p>
            <Link href="/sobre" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline-offset-4 hover:underline" style={{ color: "var(--text)" }}>Conheça a Tingle <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
