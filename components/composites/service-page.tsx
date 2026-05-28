import * as React from "react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Timeline } from "@/components/shared/timeline";
import { FeatureGrid, type FeatureIconName } from "@/components/shared/feature-grid";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { CtaSection } from "@/components/shared/cta-section";
import { cn } from "@/lib/utils";
import type { ServicePageData } from "@/types/service";

interface ServicePageProps {
  data: ServicePageData;
}

function SpotlightVisual({ pillar }: { pillar: "consultoria" | "utilities" }) {
  if (pillar === "consultoria") {
    return (
      <div className="absolute inset-0 p-6 flex flex-col gap-3 bg-gradient-to-br from-[#0a0a0f] to-[#15151f]">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#FFEB00] font-bold uppercase tracking-wider">Casa Brasil · Painel</span>
          <span className="h-2 w-2 rounded-full bg-[#B8FF00]" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Hubs", value: "12", color: "#FFEB00" },
            { label: "Pessoas", value: "10K+", color: "#FF2D75" },
            { label: "Cidades", value: "8", color: "#00F0FF" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-[#2A2A35] bg-[#15151f] p-2.5">
              <div className="text-[8px] uppercase tracking-wider text-[#888899]">{s.label}</div>
              <div className="text-xl font-black mt-1" style={{ color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-[#2A2A35] bg-[#15151f] p-3 overflow-hidden">
          <div className="text-[9px] uppercase tracking-wider text-[#FFEB00] font-bold mb-2">Atividade · 30 dias</div>
          <svg viewBox="0 0 200 60" className="w-full h-12">
            <defs>
              <linearGradient id="cb-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFEB00" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFEB00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M 0 40 Q 30 20, 60 28 T 120 22 T 200 8 L 200 60 L 0 60 Z" fill="url(#cb-fill)" />
            <path d="M 0 40 Q 30 20, 60 28 T 120 22 T 200 8" stroke="#FFEB00" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[#888899]">
          <span className="rounded-md border border-[#FFEB00]/40 bg-[#FFEB00]/10 text-[#FFEB00] px-2 py-0.5 font-bold">+18% mês</span>
          <span>vs anterior</span>
        </div>
      </div>
    );
  }

  // utilities
  return (
    <div className="absolute inset-0 p-6 flex flex-col gap-3 bg-gradient-to-br from-[#0a0a0f] to-[#15151f]">
      <div className="flex items-center justify-between text-xs">
        <span className="text-[#B8FF00] font-bold uppercase tracking-wider">Hubz · Telemetria</span>
        <span className="text-[10px] text-[#888899] font-mono">LIVE</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Sensores", value: "1.2K", color: "#B8FF00" },
          { label: "Uptime", value: "99.8%", color: "#00F0FF" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-[#2A2A35] bg-[#15151f] p-2.5">
            <div className="text-[8px] uppercase tracking-wider text-[#888899]">{s.label}</div>
            <div className="text-xl font-black mt-1" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg border border-[#2A2A35] bg-[#15151f] p-3 overflow-hidden">
        <div className="text-[9px] uppercase tracking-wider text-[#B8FF00] font-bold mb-2">Carga · 24h</div>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 50, 70, 55, 80, 75, 90, 85, 70, 60, 50].map((h, i) => (
            <div key={i} className="flex-1 bg-[#B8FF00] rounded-sm opacity-70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B8FF00] animate-pulse" />
          <span className="text-[#888899]">12 processos ativos</span>
        </div>
        <span className="text-[#888899] font-mono">14:32 BRT</span>
      </div>
    </div>
  );
}

const accentByPillar = {
  consultoria: { eyebrow: "yellow" as const, text: "text-[--color-accent-yellow]", bg: "bg-[--color-accent-yellow]/10" },
  utilities: { eyebrow: "lime" as const, text: "text-[--color-accent-lime]", bg: "bg-[--color-accent-lime]/10" },
};

export function ServicePage({ data }: ServicePageProps) {
  const accent = accentByPillar[data.pillar];
  return (
    <>
      <PageHero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        pillarColor={accent.eyebrow}
        primaryCta={{ label: data.heroCtaLabel, href: data.heroCtaHref }}
        secondaryCta={{ label: "Ver cases", href: "/cases" }}
      />

      <Timeline
        eyebrow={data.methodEyebrow}
        title={data.methodTitle}
        steps={data.methodSteps}
        accent={accent.eyebrow}
      />

      <Section spacing="lg" tone="elevated">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow color={accent.eyebrow}>{data.spotlightEyebrow}</Eyebrow>
              <h2 className="text-display-2 mt-4 text-balance">{data.spotlightTitle}</h2>
              <p className="mt-6 text-lg text-[--color-text-muted] leading-relaxed text-pretty">
                {data.spotlightBody}
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6">
                {data.spotlightStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className={cn("text-display-3 font-black", accent.text)}>{stat.value}</dt>
                    <dd className="text-eyebrow text-[--color-text-muted] mt-2">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className={cn("relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#2A2A35]", data.pillar === "consultoria" ? "bg-[#FFEB00]/5" : "bg-[#B8FF00]/5")}>
              <SpotlightVisual pillar={data.pillar} />
            </div>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow={data.topicsEyebrow}
        title={data.topicsTitle}
        accent={accent.eyebrow}
        columns={data.topics.length === 4 ? 4 : 3}
        items={data.topics.map((t) => ({
          title: t.title,
          description: t.description,
          iconName: t.iconName as FeatureIconName,
        }))}
      />

      {data.testimonials.length > 0 && data.testimonials[0] && (
        <TestimonialBlock testimonial={data.testimonials[0]} eyebrow="Em campo" />
      )}

      <CtaSection
        title={data.finalCtaTitle}
        body={data.finalCtaBody}
        primaryCta={{ label: "Vamos conversar", href: "/contato" }}
        secondaryCta={{ label: "Ver todos os cases", href: "/cases" }}
        tone="accent-yellow"
      />
    </>
  );
}
