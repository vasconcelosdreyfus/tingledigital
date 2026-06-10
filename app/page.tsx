import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { HomeHero } from "@/components/sections/home/home-hero";
import { TestimonialMarquee } from "@/components/sections/home/testimonial-marquee";
import { DisplayCards } from "@/components/sections/home/display-cards";
import { AnimatedNumber } from "@/components/motion/animated-number";
import { ShinyButton } from "@/components/ui/shiny-button";
import { homeData } from "@/content/data/home";
import { ArrowRight, ArrowUpRight, Lightbulb, Zap, Network } from "lucide-react";

export const metadata: Metadata = {
  description: homeData.hero.subtitle,
  openGraph: {
    title: "Tingle Digital — Tecnologia com alma criativa",
    description: homeData.hero.subtitle,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero {...homeData.hero} />

      {/* Section 2: What we build — Cognita + Eter as flagships */}
      <ProductsSection />

      {/* Section 3: Capabilities stacked cards */}
      <CapabilitiesSection />

      {/* Section 4: Proof — 3 strongest cases */}
      <ProofSection />

      {/* Section 5: Numbers */}
      <NumbersSection />

      {/* Section 6: Testimonial marquee */}
      <TestimonialMarquee />

      {/* Section 7: CTA */}
      <FinalCtaSection />
    </>
  );
}

function ProductsSection() {
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
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>O que construímos</p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            Dois produtos. Duas teses. Engenharia que entrega.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Cognita */}
          <div
            className="rounded-2xl p-8 flex flex-col"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                Educação · Gestão Social
              </span>
              <span className="text-xs font-medium text-[#16A34A]">Em produção</span>
            </div>
            <h3 className="text-3xl font-semibold text-balance" style={{ color: "var(--text)" }}>Cognita</h3>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Plataforma educacional + ERP multi-tenant para projetos sociais. Construída com
              Casa Brasil para a EPES — Escola de Programação e Empreendedorismo de Saquarema.
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
                <span className="ml-2 text-[10px]" style={{ color: "var(--text-secondary)" }}>cognita.app</span>
              </div>
              <div className="p-4">
                <div className="text-[10px] mb-1" style={{ color: "var(--text-muted)" }}>Turma · 5º Ano A</div>
                <div className="text-sm font-bold mb-3" style={{ color: "var(--text)" }}>Diário de Classe</div>
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  {[["Alunos", "28"], ["Presença", "96%"], ["Aulas", "142"], ["Média", "8.4"]].map(([l, v]) => (
                    <div
                      key={l}
                      className="rounded p-1.5"
                      style={{
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--bg)",
                      }}
                    >
                      <div className="text-[8px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{l}</div>
                      <div className="text-xs font-bold" style={{ color: "var(--text)" }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {[["Ana B.", "P"], ["Bernardo S.", "P"], ["Caio M.", "F"]].map(([n, s]) => (
                    <div
                      key={n}
                      className="flex justify-between rounded px-2 py-1 text-[10px]"
                      style={{
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--bg)",
                      }}
                    >
                      <span style={{ color: "var(--text)" }}>{n}</span>
                      <span style={{ color: s === "F" ? "#DC2626" : "#16A34A" }}>
                        {s === "F" ? "Falta" : "Presente"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/cognita"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline self-start"
              style={{ color: "var(--text)" }}
            >
              Conhecer Cognita
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Eter — intentionally dark brand card */}
          <div className="rounded-2xl border border-[#0F0E0D] bg-[#0F0E0D] p-8 flex flex-col text-[#F2EDE6]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-[#C9A96E] uppercase tracking-wider">
                Comunicação · Privacidade
              </span>
              <span className="text-xs font-medium text-[#C9A96E]">Em construção</span>
            </div>
            <h3
              className="text-3xl font-semibold text-[#F2EDE6] text-balance"
              style={{ fontFamily: "Sora, Inter, sans-serif" }}
            >
              Eter
            </h3>
            <p className="mt-4 text-base text-[#F2EDE6]/70 leading-relaxed">
              Mensageiro privado para quem precisa conversar sem rastros. WhatsApp na facilidade,
              Signal Protocol na profundidade. Para jornalistas, advogados, executivos.
            </p>

            {/* Mini phone mockup — quiet luxury */}
            <div className="mt-6 rounded-xl bg-[#1A1817] border border-[#2A2725] overflow-hidden p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-sm font-medium" style={{ fontFamily: "Sora, Inter, sans-serif" }}>
                    Eter
                  </span>
                </div>
                <span className="text-[10px] text-[#C9A96E]">e2e</span>
              </div>
              <div className="space-y-2">
                {[
                  { initial: "J", name: "Júlia", preview: "Arquivos enviados.", time: "14:32", color: "#C9A96E" },
                  { initial: "M", name: "Marcos", preview: "Reunião amanhã 9h", time: "12:08", color: "#8B7355" },
                  { initial: "A", name: "Equipe legal", preview: "Documento revisado.", time: "10:44", color: "#6B5B45" },
                ].map((c) => (
                  <div
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
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-[#C9A96E]/60 text-center mt-3 tracking-wider">
                CRIPTOGRAFIA PONTA-A-PONTA
              </p>
            </div>

            <Link
              href="/eter"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#C9A96E] hover:underline self-start"
            >
              Conhecer Eter
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <p
          className="text-center text-sm mt-12"
          style={{ color: "var(--text-secondary)" }}
        >
          Além dos produtos, prestamos{" "}
          <Link
            href="/consultoria"
            className="underline underline-offset-2 hover:no-underline"
            style={{ color: "var(--text)" }}
          >
            consultoria estratégica
          </Link>{" "}
          e atuamos em{" "}
          <Link
            href="/utilities"
            className="underline underline-offset-2 hover:no-underline"
            style={{ color: "var(--text)" }}
          >
            utilities + energia + P&D
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}

function CapabilitiesSection() {
  const cards = [
    {
      icon: <Lightbulb className="size-4" />,
      title: "Consultoria",
      description: "Estratégia + execução com método",
      date: "Casa Brasil · EPES",
      iconColor: "var(--text)",
    },
    {
      icon: <Zap className="size-4" />,
      title: "Utilities",
      description: "P&D + Hyperautomation em energia",
      date: "Hubz · Equatorial",
      iconColor: "var(--text)",
    },
    {
      icon: <Network className="size-4" />,
      title: "AI + IoT",
      description: "Tecnologia aplicada a problemas reais",
      date: "1º P&D · 2024",
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
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>Além dos produtos</p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            Consultoria, energia, AI. Onde sua ideia precisar de braço técnico.
          </h2>
        </div>
        <div className="flex justify-center min-h-[300px]">
          <DisplayCards cards={cards} />
        </div>
      </Container>
    </section>
  );
}

function ProofSection() {
  const cases = [
    {
      slug: "qbanho-equatorial",
      client: "QBANHO + Equatorial Energia",
      title: "Milhões em receita com trocadores de calor.",
      excerpt:
        "Ponte estratégica entre QBANHO e Equatorial. Trocadores de calor no portfólio de eficiência energética da maior do setor.",
      result: "Milhões",
      resultLabel: "em receita gerada",
    },
    {
      slug: "hubz-equatorial",
      client: "Hubz + Equatorial Energia",
      title: "1º P&D aprovado: automação do tratamento de água.",
      excerpt:
        "Em 2024, marco histórico. Automatizar tratamento de água da Companhia de Águas do Amapá com tecnologia + sustentabilidade.",
      result: "1º",
      resultLabel: "P&D aprovado",
    },
    {
      slug: "epes-casa-brasil",
      client: "EPES + Casa Brasil",
      title: "Escola de Programação e Empreendedorismo de Saquarema.",
      excerpt:
        "Programa educacional com 3 frentes: Inova Talks (palestras), Break Code (escape room), Startup Challenge (simulador).",
      result: "3",
      resultLabel: "programas ativos",
    },
  ];

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
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>Prova de capacidade</p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            Cases recentes. Resultados que falam por si.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href="/cases"
              className="group flex flex-col rounded-2xl p-7 transition-all hover:shadow-lg hover:shadow-black/5"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                  {c.client}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--text-muted)" }}
                />
              </div>
              <h3 className="text-lg font-semibold text-balance" style={{ color: "var(--text)" }}>{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>{c.excerpt}</p>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold" style={{ color: "var(--text)" }}>{c.result}</div>
                  <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{c.resultLabel}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function NumbersSection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { value: 50, suffix: "+", label: "Projetos entregues" },
            { value: 4, suffix: "", label: "Produtos ativos" },
            { value: 10000, suffix: "+", label: "Pessoas impactadas" },
            { value: 6, suffix: "", label: "Anos de mercado" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl lg:text-6xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--bg)" }}>
      <Container>
        {/* intentionally dark block — visual punctuation */}
        <div className="rounded-3xl bg-[#0A0A0A] px-8 py-20 lg:px-16 lg:py-28 text-center">
          <h2 className="text-display-2 text-balance text-white">
            Pronto para construir algo que importe?
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-white/70 text-pretty">
            De projetos de P&D em energia a plataformas educacionais — vamos transformar
            sua ideia em algo que ninguém esquece.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contato">
              <ShinyButton>Começar conversa</ShinyButton>
            </Link>
            <Link
              href="mailto:dreyfus@tingledigital.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
            >
              dreyfus@tingledigital.com
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
