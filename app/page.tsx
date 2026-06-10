import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeFeaturesTabs } from "@/components/sections/home/home-features-tabs";
import { HomeLogos } from "@/components/sections/home/home-logos";
import { HomeStats } from "@/components/sections/home/home-stats";
import { HomeCases } from "@/components/sections/home/home-cases";
import { HomeTestimonial } from "@/components/sections/home/home-testimonial";
import { HomeCta } from "@/components/sections/home/home-cta";
import { homeData } from "@/content/data/home";
import { testimonials } from "@/content/data/testimonials";
import { clients } from "@/content/data/clients";

export const metadata: Metadata = {
  description: homeData.hero.subtitle,
  openGraph: {
    title: "Tingle Digital — Tecnologia com alma criativa",
    description: homeData.hero.subtitle,
    type: "website",
  },
};

const productFeatures = [
  {
    id: "cognita",
    label: "Cognita",
    title: "Plataforma de gestão para projetos sociais que entrega.",
    description:
      "Construída com Casa Brasil para projetos como a EPES. Centraliza gestão de alunos, acompanhamento pedagógico, prestação de contas e relatórios — tudo em uma só solução.",
    visual: (
      <div className="aspect-[4/3] bg-white p-6">
        <div className="text-xs font-bold text-[#0A0A0A] mb-3">COGNITA · Dashboard</div>
        <div className="space-y-2">
          <div className="rounded border border-[#E5E5E3] p-2 flex justify-between text-xs">
            <span className="text-[#0A0A0A]">Turma 5ºA</span>
            <span className="text-[#16A34A] font-medium">96%</span>
          </div>
          <div className="rounded border border-[#E5E5E3] p-2 flex justify-between text-xs">
            <span className="text-[#0A0A0A]">Turma 6ºB</span>
            <span className="text-[#16A34A] font-medium">92%</span>
          </div>
          <div className="rounded border border-[#E5E5E3] p-2 flex justify-between text-xs">
            <span className="text-[#0A0A0A]">Turma 7ºA</span>
            <span className="text-[#16A34A] font-medium">88%</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "eter",
    label: "Eter",
    title: "Uma rede para conectar pessoas com pessoas — e com seus sonhos.",
    description:
      "Espaço de acolhimento, inspiração e crescimento pessoal. Conexões autênticas, longe da economia da atenção. Para quem busca comunidade real.",
    visual: (
      <div className="aspect-[4/3] bg-white p-6">
        <div className="text-xs font-bold text-[#0A0A0A] mb-3">ETER · Comunidades</div>
        <div className="space-y-2">
          {["Despertar", "Caminhos", "Inspirar"].map((c) => (
            <div key={c} className="rounded border border-[#E5E5E3] p-3 text-xs">
              <div className="font-semibold text-[#0A0A0A]">{c}</div>
              <div className="text-[#6B6B6B] text-[10px] mt-1">142 membros · ativa</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "consultoria",
    label: "Consultoria",
    title: "Estratégia que entrega. Execução que mantém o impacto vivo.",
    description:
      "Consultoria em gestão e tecnologia para empresas que querem otimizar processos. E projetos sociais com Casa Brasil que transformam comunidades reais.",
    visual: (
      <div className="aspect-[4/3] bg-white p-6">
        <div className="text-xs font-bold text-[#0A0A0A] mb-3">CASA BRASIL · Painel</div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded border border-[#E5E5E3] p-2 text-xs">
            <div className="text-[#A0A0A0] text-[10px]">HUBS</div>
            <div className="text-lg font-bold text-[#0A0A0A]">12</div>
          </div>
          <div className="rounded border border-[#E5E5E3] p-2 text-xs">
            <div className="text-[#A0A0A0] text-[10px]">PESSOAS</div>
            <div className="text-lg font-bold text-[#0A0A0A]">10K+</div>
          </div>
        </div>
        <div className="text-xs text-[#6B6B6B]">EPES · Saquarema</div>
        <div className="text-xs text-[#6B6B6B] mt-1">Transforma Nova Iguaçu</div>
      </div>
    ),
  },
  {
    id: "utilities",
    label: "Utilities",
    title: "Pioneirismo em P&D. Hiperautomação que entrega resultado.",
    description:
      "Soluções inovadoras para desafios em energia, água e serviços públicos. IA, IoT e Blockchain aplicados onde geram retorno mensurável.",
    visual: (
      <div className="aspect-[4/3] bg-white p-6">
        <div className="text-xs font-bold text-[#0A0A0A] mb-3">HUBZ · Telemetria</div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded border border-[#E5E5E3] p-2 text-xs">
            <div className="text-[#A0A0A0] text-[10px]">SENSORES</div>
            <div className="text-lg font-bold text-[#0A0A0A]">1.2K</div>
          </div>
          <div className="rounded border border-[#E5E5E3] p-2 text-xs">
            <div className="text-[#A0A0A0] text-[10px]">UPTIME</div>
            <div className="text-lg font-bold text-[#0A0A0A]">99.8%</div>
          </div>
        </div>
        <div className="text-xs text-[#6B6B6B]">Tratamento Água Amapá</div>
        <div className="text-xs text-[#6B6B6B] mt-1">1º P&D aprovado · 2024</div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      <HomeHero {...homeData.hero} />

      <HomeLogos eyebrow="Parceiros que confiam na Tingle" clients={clients} />

      <HomeFeaturesTabs
        eyebrow="O que fazemos"
        title="Quatro frentes. Uma só obsessão: gerar impacto real."
        subtitle="Construímos produtos próprios, consultamos com impacto social e modernizamos utilities."
        features={productFeatures}
      />

      <HomeStats
        eyebrow="Em números"
        title="6 anos transformando ideias em resultados."
        stats={[
          { value: "50+", label: "Projetos entregues" },
          { value: "4", label: "Produtos ativos" },
          { value: "10K+", label: "Pessoas impactadas" },
          { value: "6", label: "Anos de mercado" },
        ]}
      />

      <HomeCases
        eyebrow="Cases recentes"
        title="Trabalho que fala por si."
        cases={homeData.cases.items}
      />

      <HomeTestimonial
        quote={testimonials.fabioCasaBrasil!.quote}
        author={testimonials.fabioCasaBrasil!.author}
        role={testimonials.fabioCasaBrasil!.role}
        company={testimonials.fabioCasaBrasil!.company}
      />

      <HomeCta
        title="Pronto para inovar com a gente?"
        body="De projetos de P&D em energia a plataformas educacionais — vamos construir o futuro juntos."
        primaryCta={{ label: "Fale conosco", href: "/contato" }}
        secondaryCta={{ label: "Ver cases", href: "/cases" }}
      />
    </>
  );
}
