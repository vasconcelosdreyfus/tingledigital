import * as React from "react";
import { Container } from "@/components/primitives/container";

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface TimelineProps {
  eyebrow?: string;
  title?: string;
  steps: TimelineStep[];
}

export function Timeline({ eyebrow, title, steps }: TimelineProps) {
  return (
    <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          {eyebrow && <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{eyebrow}</p>}
          {title && <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{title}</h2>}
        </div>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl p-6"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}
            >
              <p className="text-eyebrow" style={{ color: "var(--text-secondary)" }}>
                {String(step.number).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold" style={{ color: "var(--text)" }}>{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
