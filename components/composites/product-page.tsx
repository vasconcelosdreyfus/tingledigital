import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StepsConnector } from "@/components/motion/steps-connector";
import { Container } from "@/components/primitives/container";
import { FeatureGrid, type FeatureIconName } from "@/components/shared/feature-grid";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { CtaSection } from "@/components/shared/cta-section";
import { StatusBadge } from "@/components/apps/status-badge";
import { apps } from "@/content/data/apps";
import { AppIcon } from "@/components/apps/app-icon";
import type { ProductPageData } from "@/types/product";

function StepNumber({ index }: { index: number }) {
  return (
    <div
      className="aspect-[16/10] flex items-center justify-center text-4xl font-semibold tabular-nums"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>
  );
}

interface ProductPageProps {
  data: ProductPageData;
}

export function ProductPage({ data }: ProductPageProps) {
  const app = apps.find((a) => a.slug === data.pillar);
  const appLinks = app?.links ?? [];

  return (
    <>
      <PageHero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        primaryCta={{ label: data.heroCtaLabel, href: data.heroCtaHref }}
        secondaryCta={{ label: "Ver cases", href: "/cases" }}
      >
        {app && (
          <Reveal delay={0.3} className="mt-8 flex flex-col items-center gap-3">
            <AppIcon app={app} className="mb-2 w-20" />
            <StatusBadge kind={app.status.kind} label={app.status.label} className="text-sm" />
            {appLinks.length > 0 && (
              <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {appLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                      style={{ color: "var(--text)" }}
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        )}
      </PageHero>

      <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}>
        <Container size="md">
          <p className="text-eyebrow mb-6" style={{ color: "var(--text-secondary)" }}>{data.problemEyebrow}</p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{data.problemTitle}</h2>
          <p className="mt-8 text-lg leading-relaxed text-pretty" style={{ color: "var(--text-secondary)" }}>{data.problemBody}</p>
          <div className="mt-10 grid grid-cols-[auto_1fr] items-center gap-6">
            <p className="text-display-1" style={{ color: "var(--text)" }}>{data.problemStat.value}</p>
            <p className="text-eyebrow" style={{ color: "var(--text-secondary)" }}>{data.problemStat.label}</p>
          </div>
        </Container>
      </section>

      <FeatureGrid
        eyebrow={data.solutionEyebrow}
        title={data.solutionTitle}
        columns={data.features.length >= 6 ? 3 : 2}
        items={data.features.map((f) => ({
          title: f.title,
          description: f.description,
          iconName: f.iconName as FeatureIconName,
        }))}
      />

      <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{data.demoEyebrow}</p>
            <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{data.demoTitle}</h2>
          </div>
          <div className="max-w-6xl mx-auto">
          {data.demoSteps.length === 3 && <StepsConnector />}
          <RevealGroup as="ol" stagger={0.1} delay={0.15} className="grid gap-6 md:grid-cols-3">
            {data.demoSteps.map((step, i) => (
              <RevealItem
                as="li"
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}
              >
                <StepNumber index={i} />
                <div className="p-6">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          </div>
        </Container>
      </section>

      {data.testimonial && (
        <TestimonialBlock testimonial={data.testimonial} eyebrow="Quem confia" />
      )}

      <CtaSection
        title={data.finalCtaTitle}
        body={data.finalCtaBody}
        primaryCta={{ label: "Falar com vendas", href: "/contato" }}
        secondaryCta={{ label: "Voltar para home", href: "/" }}
      />
    </>
  );
}
