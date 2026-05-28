import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { BentoCard } from "@/components/shared/bento-card";

interface PillarItem {
  pillar: "cognita" | "eter" | "consultoria" | "utilities";
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  size?: "default" | "wide" | "tall";
}

interface HomePillarsProps {
  eyebrow: string;
  title: string;
  pillars: PillarItem[];
}

export function HomePillars({ eyebrow, title, pillars }: HomePillarsProps) {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mb-16 max-w-3xl">
          <Eyebrow color="yellow">{eyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 text-balance">{title}</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 lg:auto-rows-[280px]">
          {pillars.map((p) => (
            <BentoCard
              key={p.pillar}
              pillar={p.pillar}
              eyebrow={p.eyebrow}
              title={p.title}
              description={p.description}
              href={p.href}
              ctaLabel={p.ctaLabel}
              size={p.size}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
