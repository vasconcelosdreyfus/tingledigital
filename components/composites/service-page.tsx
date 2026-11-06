import * as React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Timeline } from "@/components/shared/timeline";
import { FeatureGrid, type FeatureIconName } from "@/components/shared/feature-grid";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { CtaSection } from "@/components/shared/cta-section";
import type { ServicePageData } from "@/types/service";
import { ServiceCases } from "@/components/shared/service-cases";
import { PartnerExperience } from "@/components/shared/partner-experience";
import { serviceCases } from "@/content/data/service-cases";

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
              className="min-h-72 rounded-2xl flex items-center justify-center p-8 sm:p-12"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
            >
              {data.spotlightImage && (
                <Image {...data.spotlightImage} alt={data.spotlightImage.alt} sizes="(max-width: 639px) 65vw, 276px" className="h-auto w-full max-w-[276px]" />
              )}
              {data.spotlightPartners && (
                <ol className="w-full text-center" aria-label="A parceria dos trocadores de calor">
                  {data.spotlightPartners.map((partner, index) => (
                    <li key={partner.name}>
                      {index > 0 && <ArrowDown className="mx-auto my-5 size-5" style={{ color: "var(--text-muted)" }} aria-hidden />}
                      <p className="text-xl sm:text-2xl font-semibold tracking-tight">{partner.name}</p>
                      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{partner.role}</p>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </Container>
      </section>

      <ServiceCases
        cases={serviceCases.filter((project) => project.pillar === data.pillar)}
        title={data.pillar === "utilities" ? "Energia, água e infraestrutura. Projetos com contexto real." : "Educação, esporte e cultura. Da concepção à operação."}
      />

      <PartnerExperience />

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
