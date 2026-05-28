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

const gradients = [
  "from-[#FFEB00] to-[#FF2D75]",
  "from-[#FF2D75] to-[#7A00FF]",
  "from-[#00F0FF] to-[#5B8DEF]",
  "from-[#B8FF00] to-[#00F0FF]",
  "from-[#FF2D75] to-[#FFEB00]",
  "from-[#7A00FF] to-[#00F0FF]",
  "from-[#FFEB00] to-[#B8FF00]",
  "from-[#00F0FF] to-[#FF2D75]",
];

export function TeamGrid({ eyebrow, title, members }: TeamGridProps) {
  return (
    <Section spacing="lg" tone="elevated">
      <Container>
        <Eyebrow color="cyan">{eyebrow}</Eyebrow>
        <h2 className="text-display-2 mt-4 mb-12 max-w-3xl text-balance">{title}</h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {members.map((m, i) => {
            const gradient = gradients[i % gradients.length];
            const initials = m.initials ?? m.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
            return (
              <div key={m.name} className="group text-center">
                <div className={`relative aspect-square w-full rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center text-display-3 font-black text-[#0a0a0f] overflow-hidden transition-transform group-hover:scale-[1.02]`}>
                  <span className="relative z-10">{initials}</span>
                  <div className="absolute inset-0 bg-[#0a0a0f]/0 group-hover:bg-[#0a0a0f]/10 transition-colors" />
                </div>
                <p className="mt-4 font-bold text-[#F5F5FA]">{m.name}</p>
                <p className="text-sm text-[#888899]">{m.role}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
