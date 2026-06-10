import * as React from "react";
import { Container } from "@/components/primitives/container";
import {
  ArrowRight, Bot, CircuitBoard, Cpu, Gauge, Layers, Lightbulb, LineChart, Lock, MessageSquare, Network, Rocket, ShieldCheck, Sparkles, Users, Workflow, Zap,
} from "lucide-react";

const iconMap = {
  arrow: ArrowRight, bot: Bot, circuit: CircuitBoard, cpu: Cpu, gauge: Gauge,
  layers: Layers, lightbulb: Lightbulb, lineChart: LineChart, lock: Lock,
  messageSquare: MessageSquare, network: Network, rocket: Rocket, shield: ShieldCheck,
  sparkles: Sparkles, users: Users, workflow: Workflow, zap: Zap,
} as const;

export type FeatureIconName = keyof typeof iconMap;

export interface FeatureItem {
  title: string;
  description: string;
  iconName: FeatureIconName;
}

interface FeatureGridProps {
  eyebrow?: string;
  title?: string;
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

const colsMap: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({ eyebrow, title, items, columns = 3 }: FeatureGridProps) {
  return (
    <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          {eyebrow && <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{eyebrow}</p>}
          {title && <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{title}</h2>}
        </div>
        <div className={`grid gap-6 ${colsMap[columns]}`}>
          {items.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={`${item.title}-${i}`}
                className="rounded-2xl p-6 transition-colors"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}
              >
                <Icon className="h-6 w-6 mb-4" style={{ color: "var(--text)" }} aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
