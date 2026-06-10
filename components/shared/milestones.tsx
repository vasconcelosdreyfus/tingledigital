import * as React from "react";
import { Container } from "@/components/primitives/container";

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
    <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <Container>
        <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{eyebrow}</p>
        <h2 className="text-display-2 mb-16 max-w-3xl text-balance" style={{ color: "var(--text)" }}>{title}</h2>
        <ol className="space-y-10 relative pl-10" style={{ borderLeft: "2px solid var(--border)" }}>
          {items.map((m) => (
            <li key={m.year} className="relative">
              <div
                className="absolute -left-[46px] top-1 h-4 w-4 rounded-full"
                style={{ backgroundColor: "var(--text)", boxShadow: "0 0 0 4px var(--bg)" }}
              />
              <div className="flex items-baseline gap-4">
                <span className="text-display-3 font-semibold" style={{ color: "var(--text)" }}>{m.year}</span>
                <span className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
              </div>
              <h3 className="mt-2 text-xl font-semibold" style={{ color: "var(--text)" }}>{m.title}</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{m.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
