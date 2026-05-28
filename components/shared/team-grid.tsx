import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";

export interface TeamMember {
  name: string;
  role: string;
  initials?: string;
}

interface TeamGridProps {
  eyebrow: string;
  title: string;
  members: TeamMember[];
}

export function TeamGrid({ eyebrow, title, members }: TeamGridProps) {
  return (
    <Section spacing="lg" tone="elevated">
      <Container>
        <Eyebrow color="cyan">{eyebrow}</Eyebrow>
        <h2 className="text-display-2 mt-4 mb-12 max-w-3xl text-balance">{title}</h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <div className="aspect-square w-full rounded-3xl bg-[--color-bg]/40 border border-[--color-border] flex items-center justify-center text-display-3 font-black text-[--color-text-subtle]">
                {m.initials ?? m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <p className="mt-4 font-bold">{m.name}</p>
              <p className="text-sm text-[--color-text-muted]">{m.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
