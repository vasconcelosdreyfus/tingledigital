import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";

export interface Milestone {
  year: number;
  title: string;
  description: string;
}

interface MilestonesProps {
  eyebrow: string;
  title: string;
  items: Milestone[];
}

export function Milestones({ eyebrow, title, items }: MilestonesProps) {
  return (
    <Section spacing="lg">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-display-2 mt-4 mb-16 max-w-3xl text-balance">{title}</h2>
        <ol className="space-y-12 relative border-l border-[--color-border] pl-8">
          {items.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-[--color-accent-yellow] ring-4 ring-[--color-bg]" />
              <p className="text-eyebrow text-[--color-accent-yellow]">{m.year}</p>
              <h3 className="mt-2 text-xl font-bold">{m.title}</h3>
              <p className="mt-2 max-w-2xl text-base text-[--color-text-muted] leading-relaxed">
                {m.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
