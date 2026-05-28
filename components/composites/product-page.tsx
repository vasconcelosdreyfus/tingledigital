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
              <li key={i} className="rounded-3xl border border-[--color-border] bg-[--color-bg]/40 overflow-hidden">
                <div className={cn("aspect-video flex items-center justify-center text-2xl font-black opacity-30", accent.text)}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[--color-text-muted] leading-relaxed">{step.description}</p>
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
