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
            <div className={cn("aspect-[4/3] rounded-3xl overflow-hidden border border-[--color-border] flex items-center justify-center", accent.bg)}>
              <span className={cn("text-display-1 font-black opacity-30", accent.text)}>
                {data.pillar === "consultoria" ? "CB" : "⚡"}
              </span>
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
