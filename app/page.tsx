import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { HomeHero } from "@/components/sections/home/home-hero";
import { TestimonialMarquee } from "@/components/sections/home/testimonial-marquee";
import { DisplayCards } from "@/components/sections/home/display-cards";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ValidationLogos } from "@/components/shared/validation-logos";
import { HomeAppsLive } from "@/components/sections/home/home-apps-live";
import { HomePartners } from "@/components/sections/home/home-partners";
import { apps } from "@/content/data/apps";
import { cognitaImpactThousands } from "@/content/data/cognita-impact";
import { TINGLE_FOUNDED } from "@/content/data/home";
import { ArrowRight, Lightbulb, Zap, Network } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("hero");
  return {
    description: t("subtitle"),
    openGraph: {
      title: "Tingle Digital — Tecnologia com alma criativa",
      description: t("subtitle"),
      type: "website",
    },
  };
}

export default async function Home() {
  return (
    <>
      <HomeHero />

      {/* Section 1b: quem já confiou (logos reais) */}
      <ValidationStrip />

      {/* Section 2: aplicações no ar, cada uma uma vez (apps.ts) */}
      <HomeAppsLive />

      {/* Section 3: Capabilities stacked cards */}
      <CapabilitiesSection />

      {/* Section 5: Numbers */}
      <NumbersSection />

      <HomePartners />

      {/* Section 6: Testimonial marquee */}
      <TestimonialMarquee />

      {/* Section 7: CTA */}
      <FinalCtaSection />
    </>
  );
}

async function ValidationStrip() {
  const t = await getTranslations("validation");
  return <ValidationLogos eyebrow={t("eyebrow")} />;
}

async function CapabilitiesSection() {
  const t = await getTranslations("capabilities");

  const cards = [
    {
      icon: <Lightbulb className="size-4" />,
      title: t("consultoria.title"),
      description: t("consultoria.description"),
      date: t("consultoria.date"),
      iconColor: "var(--text)",
      href: "/consultoria",
    },
    {
      icon: <Zap className="size-4" />,
      title: t("utilities.title"),
      description: t("utilities.description"),
      date: t("utilities.date"),
      iconColor: "var(--text)",
      href: "/utilities",
    },
    {
      icon: <Network className="size-4" />,
      title: t("ai.title"),
      description: t("ai.description"),
      date: t("ai.date"),
      iconColor: "var(--text)",
      href: "/utilities",
    },
  ];

  return (
    <section
      className="relative py-24 lg:py-32"
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <Container>
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>
            {t("eyebrow")}
          </p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            {t("title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex min-h-[300px] justify-center">
          <DisplayCards cards={cards} />
        </Reveal>
      </Container>
    </section>
  );
}

function yearsSince(isoDate: string): number {
  const start = new Date(`${isoDate}T00:00:00-03:00`);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const anniversary = new Date(start);
  anniversary.setFullYear(now.getFullYear());
  if (now < anniversary) years -= 1;
  return years;
}

async function NumbersSection() {
  const t = await getTranslations("stats");

  // Fontes: abertura (CNPJ), catálogo de apps e agregações verificadas do Cognita.
  const storeApps = apps.filter((a) =>
    a.links.some((l) => l.label === "App Store" || l.label === "Google Play")
  ).length;
  const items: { value: number | undefined; label: string; suffix?: string }[] = [
    { value: yearsSince(TINGLE_FOUNDED), label: t("years") },
    { value: storeApps || undefined, label: t("storeApps") },
    {
      value: cognitaImpactThousands.enrollments,
      label: t("cognitaEnrollments"),
      suffix: t("thousandPlus"),
    },
    {
      value: cognitaImpactThousands.surveyResponses,
      label: t("surveyResponses"),
      suffix: t("thousandPlus"),
    },
  ];
  const stats = items.filter(
    (s): s is { value: number; label: string; suffix?: string } => s.value !== undefined
  );

  return (
    <section
      className="py-24 lg:py-32"
      style={{
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <RevealGroup
          stagger={0.08}
          className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div
                className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: "var(--text)" }}
              >
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                {s.label}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

async function FinalCtaSection() {
  const t = await getTranslations("finalCta");

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--bg)" }}>
      <Container>
        {/* intentionally dark block — visual punctuation */}
        <Reveal className="rounded-3xl bg-[#0A0A0A] px-6 py-16 text-center sm:px-8 sm:py-20 lg:px-16 lg:py-28">
          <h2 className="text-display-2 text-balance text-white">{t("title")}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-white/70">
            {t("body")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contato" className="final-contact-link">
              {t("primaryCta")}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="mailto:dreyfus@tingledigital.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
            >
              dreyfus@tingledigital.com
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
