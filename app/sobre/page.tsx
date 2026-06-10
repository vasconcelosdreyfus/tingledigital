import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { TeamGrid } from "@/components/shared/team-grid";
import { Milestones } from "@/components/shared/milestones";
import { CtaSection } from "@/components/shared/cta-section";
import { sobre } from "@/content/data/sobre";

export const metadata: Metadata = {
  title: "Sobre",
  description: sobre.hero.subtitle,
  openGraph: { title: "Sobre · Tingle Digital", description: sobre.hero.subtitle },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow={sobre.hero.eyebrow}
        title={sobre.hero.title}
        subtitle={sobre.hero.subtitle}
      />

      <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}>
        <Container>
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{sobre.values.eyebrow}</p>
          <h2 className="text-display-2 mb-12 max-w-3xl text-balance" style={{ color: "var(--text)" }}>{sobre.values.title}</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            {sobre.values.items.map((v) => (
              <div key={v.title}>
                <h3 className="text-display-3" style={{ color: "var(--text)" }}>{v.title}</h3>
                <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TeamGrid eyebrow={sobre.team.eyebrow} title={sobre.team.title} members={sobre.team.members} />

      <Milestones eyebrow={sobre.milestones.eyebrow} title={sobre.milestones.title} items={sobre.milestones.items} />

      <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}>
        <Container size="md">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{sobre.location.eyebrow}</p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{sobre.location.title}</h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>{sobre.location.body}</p>
        </Container>
      </section>

      <CtaSection
        title={sobre.finalCta.title}
        body={sobre.finalCta.body}
        primaryCta={{ label: "Iniciar conversa", href: "/contato" }}
        secondaryCta={{ label: "Ver portfólio", href: "/cases" }}
      />
    </>
  );
}
