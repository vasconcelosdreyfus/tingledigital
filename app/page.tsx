import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { HomeHero } from "@/components/sections/home/home-hero";
import { TestimonialMarquee } from "@/components/sections/home/testimonial-marquee";
import { DisplayCards } from "@/components/sections/home/display-cards";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ValidationLogos } from "@/components/shared/validation-logos";
import { HomeAppsLive } from "@/components/sections/home/home-apps-live";
import { apps } from "@/content/data/apps";
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

function findApp(slug: string) {
  return apps.find((a) => a.slug === slug);
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
    },
    {
      icon: <Zap className="size-4" />,
      title: t("utilities.title"),
      description: t("utilities.description"),
      date: t("utilities.date"),
      iconColor: "var(--text)",
    },
    {
      icon: <Network className="size-4" />,
      title: t("ai.title"),
      description: t("ai.description"),
      date: t("ai.date"),
      iconColor: "var(--text)",
    },
  ];

  return (
    <section
      className="py-24 lg:py-32 relative"
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <Container>
        <Reveal className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>
            {t("eyebrow")}
          </p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            {t("title")}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex justify-center min-h-[300px]">
          <DisplayCards cards={cards} />
        </Reveal>
      </Container>
    </section>
  );
}

/** "11.632" (pt-BR) -> 11632 */
function parseMetric(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const n = Number(value.replace(/\./g, "").replace(",", "."));
  return Number.isFinite(n) ? n : undefined;
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

  // Todo número sai de apps.ts ou da data de abertura (CNPJ); se faltar a fonte, o item não aparece.
  const storeApps = apps.filter((a) =>
    a.links.some((l) => l.label === "App Store" || l.label === "Google Play"),
  ).length;
  const items: { value: number | undefined; label: string }[] = [
    { value: yearsSince(TINGLE_FOUNDED), label: t("years") },
    { value: storeApps || undefined, label: t("storeApps") },
    { value: parseMetric(findApp("cognita")?.metrics?.[0]?.value), label: t("cognitaOrgs") },
    { value: parseMetric(findApp("cognita")?.metrics?.[1]?.value), label: t("surveyResponses") },
  ];
  const stats = items.filter((s): s is { value: number; label: string } => s.value !== undefined);

  return (
    <section
      className="py-24 lg:py-32"
      style={{
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <RevealGroup stagger={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                <AnimatedNumber value={s.value} />
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
        <Reveal className="rounded-3xl bg-[#0A0A0A] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28 text-center">
          <h2 className="text-display-2 text-balance text-white">{t("title")}</h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-white/70 text-pretty">{t("body")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contato">
              <ShinyButton>{t("primaryCta")}</ShinyButton>
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
