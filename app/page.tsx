import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeAppsLive } from "@/components/sections/home/home-apps-live";
import { StudioCapabilities } from "@/components/sections/home/studio-capabilities";
import { TestimonialMarquee } from "@/components/sections/home/testimonial-marquee";
import { ValidationLogos } from "@/components/shared/validation-logos";
import { Reveal } from "@/components/motion/reveal";
import { apps } from "@/content/data/apps";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("immersive");
  return {
    description: t("description"),
    openGraph: {
      title: "Tingle Digital — Tecnologia com alma criativa",
      description: t("description"),
      type: "website",
    },
  };
}

export default async function Home() {
  const t = await getTranslations("immersive");
  const validation = await getTranslations("validation");
  const cognita = apps.find((app) => app.slug === "cognita");
  const electoral = apps.find((app) => app.slug === "aplicativo-eleitoral");
  return (
    <>
      <HomeHero />
      <ValidationLogos eyebrow={validation("eyebrow")} className="studio-validation" />
      <HomeAppsLive />
      <section className="studio-manifesto">
        <Container size="xl">
          <Reveal className="manifesto-layout">
            <p className="section-index">02 / {t("approachLabel")}</p>
            <div>
              <h2>
                {t("manifestoStart")}
                <span>{t("manifestoAccent")}</span>
              </h2>
              <p className="manifesto-description">{t("manifestoBody")}</p>
            </div>
          </Reveal>
          <div className="evidence-strip">
            <p>{t("evidenceLabel")}</p>
            <dl>
              {cognita?.metrics?.map((metric, i) => (
                <div key={metric.label}>
                  <dt>{i === 0 ? t("orgs") : t("responses")}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
      <StudioCapabilities />
      <TestimonialMarquee />
      {electoral && (
        <section className="studio-lab">
          <Container size="xl">
            <div className="lab-layout">
              <p className="section-index">05 / {t("labLabel")}</p>
              <div>
                <span className="lab-status">
                  <span />
                  {t("labStatus")}
                </span>
                <h2>{t("labTitle")}</h2>
                <p>{t("labBody")}</p>
                <Link className="text-link" href={`/cases#${electoral.slug}`}>
                  {t("labLink")}
                  <ArrowUpRight size={18} aria-hidden />
                </Link>
              </div>
              <span className="lab-asterisk" aria-hidden>
                ✳
              </span>
            </div>
          </Container>
        </section>
      )}
      <section className="studio-contact">
        <Container size="xl">
          <p className="section-index">{t("contactEyebrow")}</p>
          <Link className="contact-title" href="/contato">
            <span>{t("contactTitle")}</span>
            <ArrowUpRight aria-hidden />
          </Link>
          <div className="contact-bottom">
            <p>{t("contactBody")}</p>
            <a className="text-link" href="mailto:dreyfus@tingledigital.com">
              dreyfus@tingledigital.com
              <ArrowUpRight size={17} aria-hidden />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
