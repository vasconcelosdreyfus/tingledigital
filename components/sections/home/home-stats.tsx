import * as React from "react";
import { Container } from "@/components/primitives/container";

interface Stat {
  value: string;
  label: string;
}

interface HomeStatsProps {
  eyebrow: string;
  title: string;
  stats: Stat[];
}

export function HomeStats({ eyebrow, title, stats }: HomeStatsProps) {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E5E5E3]">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-eyebrow text-[#6B6B6B] mb-4">{eyebrow}</p>
          <h2 className="text-display-2 text-balance text-[#0A0A0A]">{title}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#0A0A0A]">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-[#6B6B6B]">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
