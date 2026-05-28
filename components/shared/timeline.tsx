import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface TimelineProps {
  eyebrow?: string;
  title?: string;
  steps: TimelineStep[];
  accent?: "yellow" | "pink" | "cyan" | "lime" | "default";
}

const accentMap = {
  yellow: { text: "text-[--color-accent-yellow]", bar: "bg-[--color-accent-yellow]" },
  pink: { text: "text-[--color-accent-pink]", bar: "bg-[--color-accent-pink]" },
  cyan: { text: "text-[--color-accent-cyan]", bar: "bg-[--color-accent-cyan]" },
  lime: { text: "text-[--color-accent-lime]", bar: "bg-[--color-accent-lime]" },
  default: { text: "text-[--color-text]", bar: "bg-[--color-text]" },
} as const;

export function Timeline({ eyebrow, title, steps, accent = "default" }: TimelineProps) {
  const a = accentMap[accent];
  return (
    <Section spacing="lg">
      <Container>
        {eyebrow && (
          <Eyebrow color={accent === "default" ? "default" : accent}>{eyebrow}</Eyebrow>
        )}
        {title && (
          <h2 className="text-display-2 mt-4 mb-16 max-w-3xl text-balance">{title}</h2>
        )}
        <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative pt-6 border-t border-[--color-border]"
            >
              <span className={cn("absolute top-0 -mt-px h-0.5 w-1/3", a.bar)} />
              <p className={cn("text-eyebrow", a.text)}>
                {String(step.number).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm text-[--color-text-muted] leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
