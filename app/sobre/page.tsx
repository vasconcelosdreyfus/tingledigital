import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
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
        pillarColor="cyan"
      />

      <Section spacing="lg" tone="elevated">
        <Container>
          <Eyebrow color="yellow">{sobre.values.eyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 mb-12 max-w-3xl text-balance">{sobre.values.title}</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            {sobre.values.items.map((v) => (
              <div key={v.title}>
                <h3 className="text-display-3">{v.title}</h3>
                <p className="mt-4 text-lg text-[--color-text-muted] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TeamGrid
        eyebrow={sobre.team.eyebrow}
        title={sobre.team.title}
        members={sobre.team.members}
      />

      <Milestones
        eyebrow={sobre.milestones.eyebrow}
        title={sobre.milestones.title}
        items={sobre.milestones.items}
      />

      <Section spacing="lg" tone="elevated">
        <Container size="md">
          <Eyebrow>{sobre.location.eyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 text-balance">{sobre.location.title}</h2>
          <p className="mt-6 text-lg text-[--color-text-muted] leading-relaxed">
            {sobre.location.body}
          </p>
        </Container>
      </Section>

      <CtaSection
        title={sobre.finalCta.title}
        body={sobre.finalCta.body}
        primaryCta={{ label: "Iniciar conversa", href: "/contato" }}
        secondaryCta={{ label: "Ver portfólio", href: "/cases" }}
        tone="accent-yellow"
      />
    </>
  );
}
