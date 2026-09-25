import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { HomeHero } from "@/components/sections/home/home-hero";
import { TestimonialMarquee } from "@/components/sections/home/testimonial-marquee";
import { DisplayCards } from "@/components/sections/home/display-cards";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { Reveal, RevealGroup, RevealItem, PulseOnce } from "@/components/motion/reveal";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ValidationLogos } from "@/components/shared/validation-logos";
import { HomeAppsLive } from "@/components/sections/home/home-apps-live";
import { StatusBadge } from "@/components/apps/status-badge";
import { apps } from "@/content/data/apps";
import { TINGLE_FOUNDED } from "@/content/data/home";
import { ArrowRight, ArrowUpRight, Lightbulb, Zap, Network } from "lucide-react";

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

      {/* Section 2: What we build — Cognita + Eter as flagships */}
      <ProductsSection />

      {/* Section 3: Capabilities stacked cards */}
      <CapabilitiesSection />

      {/* Section 4: aplicações no ar (apps.ts, featured) */}
      <HomeAppsLive />

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

async function ProductsSection() {
  const t = await getTranslations("products");
  const cognitaApp = findApp("cognita");
  const eterApp = findApp("eter");
  const cognitaOrgs = cognitaApp?.metrics?.[0]?.value;
  const storeLinks = eterApp?.links.filter((l) => l.label === "App Store" || l.label === "Google Play") ?? [];

  return (
    <section
      className="py-24 lg:py-32"
      style={{
        backgroundColor: "var(--surface-elevated)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>
            {t("eyebrow")}
          </p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            {t("title")}
          </h2>
        </Reveal>

        <RevealGroup stagger={0.1} className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Cognita */}
          <RevealItem
            className="rounded-2xl p-8 flex flex-col"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg)",
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                {t("cognita.category")}
              </span>
              {cognitaApp && (
                <StatusBadge
                  kind={cognitaApp.status.kind}
                  label={cognitaOrgs ? t("cognita.status", { count: cognitaOrgs }) : cognitaApp.status.label}
                />
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-balance" style={{ color: "var(--text)" }}>
              {t("cognita.name")}
            </h3>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t("cognita.description")}
            </p>

            {/* Mini mockup */}
            <div
              className="mt-6 rounded-xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface-elevated)",
              }}
            >
              <div
                className="flex items-center gap-1.5 px-3 py-2"
                style={{
                  borderBottom: "1px solid var(--border)",
                  backgroundColor: "var(--bg)",
                }}
              >
                <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                <span className="h-2 w-2 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-[10px]" style={{ color: "var(--text-secondary)" }}>
                  cognita.app
                </span>
              </div>
              <div className="p-4">
                <div className="text-[10px] mb-1" style={{ color: "var(--text-muted)" }}>
                  Turma · 5º Ano A
                </div>
                <div className="text-sm font-bold mb-3" style={{ color: "var(--text)" }}>
                  Diário de Classe
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-3">
                  {(
                    [
                      ["Alunos", 28, "", 0],
                      ["Presença", 96, "%", 0],
                      ["Aulas", 142, "", 0],
                      ["Média", 8.4, "", 1],
                    ] as const
                  ).map(([l, v, suf, dec]) => (
                    <div
                      key={l}
                      className="rounded p-1.5"
                      style={{
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--bg)",
                      }}
                    >
                      <div
                        className="text-[8px] uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {l}
                      </div>
                      <div className="text-xs font-bold tabular-nums" style={{ color: "var(--text)" }}>
                        <AnimatedNumber value={v} suffix={suf} decimals={dec} />
                      </div>
                    </div>
                  ))}
                </div>
                <RevealGroup stagger={0.08} delay={0.3} className="space-y-1">
                  {[
                    ["Ana B.", "P"],
                    ["Bernardo S.", "P"],
                    ["Caio M.", "F"],
                  ].map(([n, s]) => (
                    <RevealItem
                      key={n}
                      className="flex justify-between rounded px-2 py-1 text-[10px]"
                      style={{
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--bg)",
                      }}
                    >
                      <span style={{ color: "var(--text)" }}>{n}</span>
                      <span style={{ color: s === "F" ? "#DC2626" : "#2563EB" }}>
                        {s === "F" ? "Falta" : "Presente"}
                      </span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </div>

            <Link
              href="/cognita"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline self-start"
              style={{ color: "var(--text)" }}
            >
              {t("cognita.cta")}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </RevealItem>

          {/* Eter — intentionally dark brand card */}
          <RevealItem className="rounded-2xl border border-[#0F0E0D] bg-[#0F0E0D] p-8 flex flex-col text-[#F2EDE6]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-medium text-[#C9A96E] uppercase tracking-wider">
                {t("eter.category")}
              </span>
              {eterApp && (
                // Azul claro no card escuro: mesmo sinal de "publicado", contraste legível sobre #0F0E0D.
                <StatusBadge kind={eterApp.status.kind} label={t("eter.status")} className="text-[#7CB0FF]!" />
              )}
            </div>
            <h3
              className="text-2xl sm:text-3xl font-semibold text-[#F2EDE6] text-balance"
              style={{ fontFamily: "Sora, Inter, sans-serif" }}
            >
              {t("eter.name")}
            </h3>
            <p className="mt-4 text-base text-[#F2EDE6]/70 leading-relaxed">
              {t("eter.description")}
            </p>

            {/* Mini phone mockup — quiet luxury */}
            <div className="mt-6 rounded-xl bg-[#1A1817] border border-[#2A2725] overflow-hidden p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <PulseOnce delay={0.75}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  </PulseOnce>
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Sora, Inter, sans-serif" }}
                  >
                    Eter
                  </span>
                </div>
                <span className="text-[10px] text-[#C9A96E]">e2e</span>
              </div>
              <RevealGroup stagger={0.12} delay={0.3} className="space-y-2">
                {[
                  {
                    initial: "J",
                    name: "Júlia",
                    preview: "Arquivos enviados.",
                    time: "14:32",
                    color: "#C9A96E",
                  },
                  {
                    initial: "M",
                    name: "Marcos",
                    preview: "Reunião amanhã 9h",
                    time: "12:08",
                    color: "#8B7355",
                  },
                  {
                    initial: "A",
                    name: "Equipe legal",
                    preview: "Documento revisado.",
                    time: "10:44",
                    color: "#6B5B45",
                  },
                ].map((c) => (
                  <RevealItem
                    key={c.name}
                    className="flex items-center gap-2 rounded-lg bg-[#0F0E0D] border border-[#2A2725] p-2"
                  >
                    <div
                      className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-medium text-[#0F0E0D]"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-[#F2EDE6] font-medium">{c.name}</span>
                        <span className="text-[#F2EDE6]/40">{c.time}</span>
                      </div>
                      <div className="text-[10px] text-[#F2EDE6]/50 truncate">{c.preview}</div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
              <p className="text-[9px] text-[#C9A96E]/60 text-center mt-3 tracking-wider">
                {t("eter.footerText")}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/eter"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C9A96E] hover:underline"
              >
                {t("eter.cta")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {storeLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#F2EDE6]/70 hover:text-[#F2EDE6] hover:underline"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </RevealItem>
        </RevealGroup>

        <p className="text-center text-sm mt-12" style={{ color: "var(--text-secondary)" }}>
          {t.rich("alsoOffer", {
            consultoriaLink: (chunks) => (
              <Link
                href="/consultoria"
                className="underline underline-offset-2 hover:no-underline"
                style={{ color: "var(--text)" }}
              >
                {chunks}
              </Link>
            ),
            utilitiesLink: (chunks) => (
              <Link
                href="/utilities"
                className="underline underline-offset-2 hover:no-underline"
                style={{ color: "var(--text)" }}
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </Container>
    </section>
  );
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
    { value: parseMetric(findApp("cognita-pesquisa")?.metrics?.[0]?.value), label: t("surveyResponses") },
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
