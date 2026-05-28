import * as React from "react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { FeatureGrid, type FeatureIconName } from "@/components/shared/feature-grid";
import { HomeCasesPreview } from "@/components/sections/home/home-cases-preview";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { CtaSection } from "@/components/shared/cta-section";
import { cn } from "@/lib/utils";
import type { ProductPageData } from "@/types/product";

function DemoStepVisual({ pillar, index, accent }: { pillar: "cognita" | "eter"; index: number; accent: string }) {
  if (pillar === "cognita") {
    const variants = [
      // Step 0: setup — upload/import lines
      <div key="cog-0" className="p-5 h-32 flex flex-col gap-2 bg-gradient-to-br from-[#0a0a0f] to-[#15151f]">
        <div className="text-[10px] uppercase tracking-wider text-[#00F0FF] font-bold">Importando turmas</div>
        <div className="flex-1 grid grid-cols-2 gap-1.5">
          {["Turma 1A", "Turma 1B", "Turma 2A", "Turma 2B"].map((t, j) => (
            <div key={t} className={cn("flex items-center gap-1.5 rounded-md px-2 py-1 text-xs", j < 3 ? "bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30" : "bg-[#15151f] text-[#888899] border border-[#2A2A35]")}>
              <span className={cn("h-1.5 w-1.5 rounded-full", j < 3 ? "bg-[#00F0FF]" : "bg-[#2A2A35]")} />
              <span className="font-semibold">{t}</span>
            </div>
          ))}
        </div>
        <div className="h-1 rounded-full bg-[#15151f] overflow-hidden"><div className="h-full w-3/4 bg-[#00F0FF]" /></div>
      </div>,
      // Step 1: dia-a-dia — diário rows
      <div key="cog-1" className="p-5 h-32 flex flex-col gap-2 bg-gradient-to-br from-[#0a0a0f] to-[#15151f]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="uppercase tracking-wider text-[#00F0FF] font-bold">Diário · Hoje</span>
          <span className="text-[#B8FF00] font-bold">96% PRES</span>
        </div>
        {["Ana B.", "Bernardo S.", "Caio M."].map((n, j) => (
          <div key={n} className="flex items-center justify-between rounded-md border border-[#2A2A35] bg-[#15151f] px-2 py-1 text-xs">
            <span className="text-[#F5F5FA] font-medium">{n}</span>
            <span className={cn("text-[9px] font-bold uppercase", j === 2 ? "text-[#FF2D75]" : "text-[#B8FF00]")}>
              {j === 2 ? "Falta" : "Presente"}
            </span>
          </div>
        ))}
      </div>,
      // Step 2: boletim — chart
      <div key="cog-2" className="p-5 h-32 flex flex-col gap-2 bg-gradient-to-br from-[#0a0a0f] to-[#15151f]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="uppercase tracking-wider text-[#00F0FF] font-bold">Boletim · 5º A</span>
          <span className="text-[#FFEB00] font-bold">MÉDIA 8.4</span>
        </div>
        <div className="flex-1 flex items-end gap-1">
          {[55, 70, 45, 80, 65, 75, 60, 85, 90, 70].map((h, j) => (
            <div key={j} className="flex-1 bg-[#00F0FF] rounded-sm opacity-80" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="text-[9px] text-[#888899]">Performance por disciplina</div>
      </div>,
    ];
    return variants[index] ?? variants[0]!;
  }

  // eter
  const variants = [
    // Step 0: no dispositivo — key generation
    <div key="eter-0" className="p-5 h-32 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0a0a0f] to-[#15151f]">
      <div className="relative">
        <div className="h-12 w-12 rounded-xl border-2 border-[#FF2D75] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#FF2D75" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#B8FF00] animate-pulse" />
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-[#FF2D75]">Chave gerada</p>
        <p className="text-[10px] text-[#888899] font-mono mt-1">SHA256 · enclave</p>
      </div>
    </div>,
    // Step 1: transporte
    <div key="eter-1" className="p-5 h-32 flex flex-col justify-center gap-3 bg-gradient-to-br from-[#0a0a0f] to-[#15151f]">
      <div className="flex items-center justify-between">
        <div className="text-xs text-[#FF2D75] font-bold">Você</div>
        <div className="text-[10px] text-[#888899]">→</div>
        <div className="text-xs text-[#888899]">Servidor</div>
        <div className="text-[10px] text-[#888899]">→</div>
        <div className="text-xs text-[#FF2D75] font-bold">Destino</div>
      </div>
      <div className="font-mono text-[10px] text-[#888899] bg-[#0a0a0f] rounded-md px-2 py-1.5 border border-[#2A2A35]">
        <span className="text-[#FF2D75]">enc:</span> aB3#kL9p@xQ2... <span className="text-[#B8FF00]">✓</span>
      </div>
      <p className="text-[10px] text-[#888899]">Servidor nunca lê conteúdo</p>
    </div>,
    // Step 2: no destino
    <div key="eter-2" className="p-5 h-32 flex flex-col gap-2 bg-gradient-to-br from-[#0a0a0f] to-[#15151f]">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#FF2D75] to-[#7A00FF] flex items-center justify-center text-[10px] font-black text-white">J</div>
        <div>
          <p className="text-[10px] text-[#F5F5FA] font-semibold">Júlia</p>
          <p className="text-[8px] text-[#B8FF00]">decifrada · 0.2s</p>
        </div>
      </div>
      <div className="rounded-md bg-[#15151f] px-2 py-1.5 text-[10px] text-[#F5F5FA] border border-[#2A2A35]">
        &quot;Mandou os arquivos? 🔒&quot;
      </div>
      <p className="text-[9px] text-[#888899] text-right">Servidor apaga em 2s</p>
    </div>,
  ];
  return variants[index] ?? variants[0]!;
}

interface ProductPageProps {
  data: ProductPageData;
}

const accentByPillar = {
  cognita: { eyebrow: "cyan" as const, text: "text-[--color-accent-cyan]" },
  eter: { eyebrow: "pink" as const, text: "text-[--color-accent-pink]" },
};

export function ProductPage({ data }: ProductPageProps) {
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

      <Section spacing="lg" tone="elevated">
        <Container size="md">
          <Eyebrow color={accent.eyebrow}>{data.problemEyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 text-balance">{data.problemTitle}</h2>
          <p className="mt-8 text-lg text-[--color-text-muted] text-pretty">{data.problemBody}</p>
          <div className="mt-10 grid grid-cols-[auto_1fr] items-center gap-6">
            <p className={cn("text-display-1", accent.text)}>{data.problemStat.value}</p>
            <p className="text-eyebrow text-[--color-text-muted]">{data.problemStat.label}</p>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow={data.solutionEyebrow}
        title={data.solutionTitle}
        accent={accent.eyebrow}
        columns={data.features.length >= 6 ? 3 : 2}
        items={data.features.map((f) => ({
          title: f.title,
          description: f.description,
          iconName: f.iconName as FeatureIconName,
        }))}
      />

      <Section spacing="lg" tone="elevated">
        <Container>
          <Eyebrow color={accent.eyebrow}>{data.demoEyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 mb-16 max-w-3xl text-balance">{data.demoTitle}</h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {data.demoSteps.map((step, i) => (
              <li
                key={i}
                className="group rounded-3xl border border-[#2A2A35] bg-[#0a0a0f]/40 overflow-hidden hover:border-[#3A3A48] transition-colors"
              >
                <DemoStepVisual pillar={data.pillar} index={i} accent={accent.text} />
                <div className="p-6">
                  <p className={cn("text-eyebrow", accent.text)}>
                    PASSO {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#888899] leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {data.cases.length > 0 && (
        <HomeCasesPreview
          eyebrow="Cases que usam"
          title={`Quem está construindo com ${data.pillar === "cognita" ? "Cognita" : "Eter"}.`}
          cases={data.cases}
          ctaLabel="Ver todos"
        />
      )}

      {data.testimonial && (
        <TestimonialBlock testimonial={data.testimonial} eyebrow="Quem confia" />
      )}

      <CtaSection
        title={data.finalCtaTitle}
        body={data.finalCtaBody}
        primaryCta={{ label: "Falar com vendas", href: "/contato" }}
        secondaryCta={{ label: "Voltar para home", href: "/" }}
        tone="accent-yellow"
      />
    </>
  );
}
