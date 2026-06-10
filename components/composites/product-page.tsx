import * as React from "react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { FeatureGrid, type FeatureIconName } from "@/components/shared/feature-grid";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { CtaSection } from "@/components/shared/cta-section";
import type { ProductPageData } from "@/types/product";

interface ProductPageProps {
  data: ProductPageData;
}

export function ProductPage({ data }: ProductPageProps) {
  return (
    <>
      <PageHero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        primaryCta={{ label: data.heroCtaLabel, href: data.heroCtaHref }}
        secondaryCta={{ label: "Ver cases", href: "/cases" }}
      />

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
          <ol className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {data.demoSteps.map((step, i) => (
              <li
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}
              >
                <div
                  className="aspect-video flex items-center justify-center text-3xl font-semibold"
                  style={{ backgroundColor: "var(--bg)", color: "var(--text-muted)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
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
