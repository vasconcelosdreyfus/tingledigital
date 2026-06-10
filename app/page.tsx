import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { HomeHero } from "@/components/sections/home/home-hero";
import { homeData } from "@/content/data/home";
import { testimonials } from "@/content/data/testimonials";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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

      {/* Section 3: Proof — 3 strongest cases */}
      <ProofSection />

      {/* Section 4: Numbers + Voice */}
      <NumbersVoiceSection />

      {/* Section 5: CTA */}
      <FinalCtaSection />
    </>
  );
}

function ProductsSection() {
  return (
    <section className="bg-[#FAFAF9] py-24 lg:py-32 border-y border-[#E5E5E3]">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-eyebrow text-[#6B6B6B] mb-4">O que construímos</p>
          <h2 className="text-display-2 text-balance text-[#0A0A0A]">
            Dois produtos. Duas teses. Engenharia que entrega.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Cognita */}
          <div className="rounded-2xl border border-[#E5E5E3] bg-white p-8 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                Educação · Gestão Social
              </span>
              <span className="text-xs font-medium text-[#16A34A]">Em produção</span>
            </div>
            <h3 className="text-3xl font-semibold text-[#0A0A0A] text-balance">Cognita</h3>
            <p className="mt-4 text-base text-[#6B6B6B] leading-relaxed">
              Plataforma educacional + ERP multi-tenant para projetos sociais. Construída com
              Casa Brasil para a EPES — Escola de Programação e Empreendedorismo de Saquarema.
            </p>

            {/* Mini mockup */}
            <div className="mt-6 rounded-xl border border-[#E5E5E3] bg-[#FAFAF9] overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#E5E5E3] bg-white">
                <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                <span className="h-2 w-2 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-[10px] text-[#6B6B6B]">cognita.app</span>
              </div>
              <div className="p-4">
                <div className="text-[10px] text-[#A0A0A0] mb-1">Turma · 5º Ano A</div>
                <div className="text-sm font-bold text-[#0A0A0A] mb-3">Diário de Classe</div>
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  {[["Alunos", "28"], ["Presença", "96%"], ["Aulas", "142"], ["Média", "8.4"]].map(([l, v]) => (
                    <div key={l} className="rounded border border-[#E5E5E3] bg-white p-1.5">
                      <div className="text-[8px] uppercase tracking-wider text-[#A0A0A0]">{l}</div>
                      <div className="text-xs font-bold text-[#0A0A0A]">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {[["Ana B.", "P"], ["Bernardo S.", "P"], ["Caio M.", "F"]].map(([n, s]) => (
                    <div key={n} className="flex justify-between rounded bg-white border border-[#E5E5E3] px-2 py-1 text-[10px]">
                      <span className="text-[#0A0A0A]">{n}</span>
                      <span className={s === "F" ? "text-[#DC2626]" : "text-[#16A34A]"}>
                        {s === "F" ? "Falta" : "Presente"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/cognita"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] hover:underline self-start"
            >
              Conhecer Cognita
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Eter */}
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

        <p className="text-center text-sm text-[#6B6B6B] mt-12">
          Além dos produtos, prestamos{" "}
          <Link
            href="/consultoria"
            className="text-[#0A0A0A] underline underline-offset-2 hover:no-underline"
          >
            consultoria estratégica
          </Link>{" "}
          e atuamos em{" "}
          <Link
            href="/utilities"
            className="text-[#0A0A0A] underline underline-offset-2 hover:no-underline"
          >
            utilities + energia + P&D
          </Link>
          .
        </p>
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
    <section className="bg-white py-24 lg:py-32 border-b border-[#E5E5E3]">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-eyebrow text-[#6B6B6B] mb-4">Prova de capacidade</p>
          <h2 className="text-display-2 text-balance text-[#0A0A0A]">
            Cases recentes. Resultados que falam por si.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href="/cases"
              className="group flex flex-col rounded-2xl border border-[#E5E5E3] bg-white p-7 hover:border-[#D4D4D2] hover:shadow-lg hover:shadow-black/5 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                  {c.client}
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#A0A0A0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0A0A0A] text-balance">{c.title}</h3>
              <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed flex-1">{c.excerpt}</p>
              <div className="mt-8 pt-6 border-t border-[#E5E5E3]">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-[#0A0A0A]">{c.result}</div>
                  <div className="text-xs text-[#6B6B6B]">{c.resultLabel}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function NumbersVoiceSection() {
  const t = testimonials.fabioCasaBrasil!;
  return (
    <section className="bg-[#FAFAF9] py-24 lg:py-32 border-b border-[#E5E5E3]">
      <Container>
        {/* Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
          {[
            { value: "50+", label: "Projetos entregues" },
            { value: "4", label: "Produtos ativos" },
            { value: "10K+", label: "Pessoas impactadas" },
            { value: "6", label: "Anos de mercado" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl lg:text-6xl font-semibold tracking-tight text-[#0A0A0A]">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-[#6B6B6B]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <Container size="md">
          <blockquote className="text-center">
            <p className="text-display-3 font-medium text-[#0A0A0A] text-balance leading-tight">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-10 flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-sm font-semibold">
                {t.author
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#0A0A0A]">{t.author}</p>
                <p className="text-sm text-[#6B6B6B]">
                  {t.role} · {t.company}
                </p>
              </div>
            </footer>
          </blockquote>
        </Container>
      </Container>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="rounded-3xl bg-[#0A0A0A] px-8 py-20 lg:px-16 lg:py-28 text-center">
          <h2 className="text-display-2 text-balance text-white">
            Pronto para construir algo que importe?
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-white/70 text-pretty">
            De projetos de P&D em energia a plataformas educacionais — vamos transformar
            sua ideia em algo que ninguém esquece.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">Começar conversa</Link>
            </Button>
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
