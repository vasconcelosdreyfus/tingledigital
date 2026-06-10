import * as React from "react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Timeline } from "@/components/shared/timeline";
import { FeatureGrid, type FeatureIconName } from "@/components/shared/feature-grid";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { CtaSection } from "@/components/shared/cta-section";
import type { ServicePageData } from "@/types/service";

interface ServicePageProps {
  data: ServicePageData;
}

export function ServicePage({ data }: ServicePageProps) {
  return (
    <>
      <PageHero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        primaryCta={{ label: data.heroCtaLabel, href: data.heroCtaHref }}
        secondaryCta={{ label: "Ver cases", href: "/cases" }}
      />

      <Timeline
        eyebrow={data.methodEyebrow}
        title={data.methodTitle}
        steps={data.methodSteps}
      />

      <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{data.spotlightEyebrow}</p>
              <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{data.spotlightTitle}</h2>
              <p className="mt-6 text-lg leading-relaxed text-pretty" style={{ color: "var(--text-secondary)" }}>{data.spotlightBody}</p>
              <dl className="mt-10 grid grid-cols-2 gap-6">
                {data.spotlightStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-3xl font-semibold" style={{ color: "var(--text)" }}>{stat.value}</dt>
                    <dd className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div
              className="aspect-[4/3] rounded-2xl flex items-center justify-center"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
            >
              <span className="text-display-1" style={{ color: "var(--text-muted)" }}>
                {data.pillar === "consultoria" ? "CB" : "⚡"}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <FeatureGrid
        eyebrow={data.topicsEyebrow}
        title={data.topicsTitle}
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
      />
    </>
  );
}
