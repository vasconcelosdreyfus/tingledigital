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

const accentColors = ["#FFEB00", "#00F0FF", "#FF2D75", "#B8FF00", "#FFEB00", "#00F0FF"];

export function Milestones({ eyebrow, title, items }: MilestonesProps) {
  return (
    <Section spacing="lg">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-display-2 mt-4 mb-16 max-w-3xl text-balance">{title}</h2>
        <ol className="space-y-10 relative border-l-2 border-[#2A2A35] pl-10">
          {items.map((m, i) => {
            const color = accentColors[i % accentColors.length]!;
            return (
              <li key={m.year} className="relative group">
                <div
                  className="absolute -left-[46px] top-1 h-4 w-4 rounded-full ring-4 ring-[#0a0a0f] transition-transform group-hover:scale-125"
                  style={{ backgroundColor: color }}
                />
                <div className="flex items-baseline gap-4">
                  <span
                    className="text-display-3 font-black"
                    style={{ color }}
                  >
                    {m.year}
                  </span>
                  <span className="h-px flex-1 bg-[#2A2A35]" />
                </div>
                <h3 className="mt-2 text-xl font-bold text-[#F5F5FA]">{m.title}</h3>
                <p className="mt-2 max-w-2xl text-base text-[#888899] leading-relaxed">
                  {m.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
