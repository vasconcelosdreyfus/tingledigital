import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import {
  ArrowRight,
  Bot,
  CircuitBoard,
  Cpu,
  Gauge,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  arrow: ArrowRight,
  bot: Bot,
  circuit: CircuitBoard,
  cpu: Cpu,
  gauge: Gauge,
  layers: Layers,
  lightbulb: Lightbulb,
  lineChart: LineChart,
  lock: Lock,
  messageSquare: MessageSquare,
  network: Network,
  rocket: Rocket,
  shield: ShieldCheck,
  sparkles: Sparkles,
  users: Users,
  workflow: Workflow,
  zap: Zap,
} as const;

export type FeatureIconName = keyof typeof iconMap;

export interface FeatureItem {
  title: string;
  description: string;
  iconName: FeatureIconName;
}

type AccentColor = "yellow" | "pink" | "cyan" | "lime" | "default";

interface FeatureGridProps {
  eyebrow?: string;
  title?: string;
  items: FeatureItem[];
  accent?: AccentColor;
  columns?: 2 | 3 | 4;
  tone?: "default" | "elevated";
}

const accentMap: Record<AccentColor, string> = {
  yellow: "text-[--color-accent-yellow]",
  pink: "text-[--color-accent-pink]",
  cyan: "text-[--color-accent-cyan]",
  lime: "text-[--color-accent-lime]",
  default: "text-[--color-text]",
};

const colsMap: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({
  eyebrow,
  title,
  items,
  accent = "default",
  columns = 3,
  tone = "default",
}: FeatureGridProps) {
  return (
    <Section spacing="lg" tone={tone}>
      <Container>
        {eyebrow && <Eyebrow color={accent}>{eyebrow}</Eyebrow>}
        {title && <h2 className="text-display-2 mt-4 mb-12 max-w-3xl text-balance">{title}</h2>}
        <div className={cn("grid gap-6", colsMap[columns])}>
          {items.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={`${item.title}-${i}`}
                className="group rounded-2xl border border-[--color-border] bg-[--color-surface]/40 p-6 transition-colors hover:bg-[--color-surface]"
              >
                <Icon className={cn("h-7 w-7 mb-5", accentMap[accent])} aria-hidden="true" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[--color-text-muted] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
