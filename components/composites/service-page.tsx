import * as React from "react";
import { getTranslations } from "next-intl/server";
import featuredStyles from "@/components/sections/home/home-featured-projects.module.css";
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

export async function ServicePage({ data }: ServicePageProps) {
  const t = await getTranslations("featuredProjects");
  const photo = data.spotlightPhoto;
  const spotlightStats = photo ? [0, 1].map((index) => ({
    value: photo.kind === "qbanho" ? t(`scale.${index === 0 ? "thousands" : "millions"}`) : t(`circuito.metric${index}Value`),
    label: t(`${photo.kind}.metric${index}Label`),
  })) : data.spotlightStats;
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

      <section id={photo?.kind === "qbanho" ? "qbanho" : photo?.kind === "circuito" ? "circuito-musical" : undefined} className="scroll-mt-24 py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{photo ? t(`${photo.kind}.category`) : data.spotlightEyebrow}</p>
              <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{photo ? t(`${photo.kind}.title`) : data.spotlightTitle}</h2>
              <p className="mt-6 text-lg leading-relaxed text-pretty" style={{ color: "var(--text-secondary)" }}>{photo ? t(`${photo.kind}.delivery`) : data.spotlightBody}</p>
              <dl className="mt-10 grid grid-cols-2 gap-6">
                {spotlightStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-3xl font-semibold" style={{ color: "var(--text)" }}>{stat.value}</dt>
                    <dd className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {photo ? (
              <figure>
                <div className={`${featuredStyles.media} ${photo.kind === "qbanho" ? featuredStyles.product : ""}`}>
                  <Image src={photo.src} alt={t(`${photo.kind}.alt`)} fill sizes="(min-width: 1024px) 45vw, 100vw" className={featuredStyles.photo} />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <a href={photo.creditHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{t(`${photo.kind}.caption`)}</a>
                </figcaption>
              </figure>
            ) : (
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
            )}
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
