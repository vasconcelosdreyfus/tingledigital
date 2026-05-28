"use client";

import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { cn } from "@/lib/utils";

export interface NumberStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  accent?: "yellow" | "pink" | "cyan" | "lime";
}

interface NumbersStripProps {
  stats: NumberStat[];
  tone?: "default" | "elevated";
  spacing?: "sm" | "md" | "lg";
}

const accentMap = {
  yellow: "text-[--color-accent-yellow]",
  pink: "text-[--color-accent-pink]",
  cyan: "text-[--color-accent-cyan]",
  lime: "text-[--color-accent-lime]",
  default: "text-[--color-text]",
} as const;

export function NumbersStrip({
  stats,
  tone = "default",
  spacing = "md",
}: NumbersStripProps) {
  return (
    <Section spacing={spacing} tone={tone}>
      <Container>
        <div
          className={cn(
            "grid gap-10",
            stats.length === 2 && "sm:grid-cols-2",
            stats.length === 3 && "sm:grid-cols-3",
            stats.length === 4 && "grid-cols-2 sm:grid-cols-4"
          )}
        >
          {stats.map((stat, i) => (
            <div key={`${stat.label}-${i}`}>
              <p
                className={cn(
                  "text-display-1",
                  stat.accent ? accentMap[stat.accent] : accentMap.default
                )}
              >
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-eyebrow text-[--color-text-muted] mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
