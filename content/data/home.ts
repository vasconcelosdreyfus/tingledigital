import { clients } from "./clients";
import type { CasePillar } from "@/types/case";

/** Abertura da Tingle Digital: CNPJ 33.486.049/0001-55, data de início de atividade (BrasilAPI, consultado em 25/09/2026). */
export const TINGLE_FOUNDED = "2019-04-29";

export const homeData = {
  hero: {
    eyebrow: "Tingle Digital · Tecnologia com alma criativa",
    titleLine1: "Transformamos",
    titleLine2: "ideias em",
    titleAccent: "experiências.",
    subtitle:
      "Inovação em energia, educação e soluções que transformam mercados. Do interior do Rio aos centros de decisão do setor elétrico — da concepção à entrega.",
    primaryCta: { label: "Conheça nossos produtos", href: "#produtos" },
    secondaryCta: { label: "Fale com a gente", href: "/contato" },
  },
  numbers: {
    items: [
      // Números com fonte: data de abertura (CNPJ) e content/data/apps.ts.
      { label: "7 ANOS NO MERCADO", accent: "yellow" as const },
      { label: "3 APPS PUBLICADOS NAS LOJAS", accent: "cyan" as const },
      { label: "5 ORGANIZAÇÕES USANDO O COGNITA", accent: "pink" as const },
      { label: "11.632 RESPOSTAS NO ROCK IN RIO 2026", accent: "lime" as const },
    ],
  },
  pillars: {
    eyebrow: "O que fazemos",
    title: "Quatro frentes. Uma só obsessão: gerar impacto real.",
    items: [
      {
        pillar: "cognita" as const,
        eyebrow: "Produto · Educação",
        title: "Cognita",
        description:
          "Plataforma educacional + ERP desenvolvida para projetos sociais. Integra gestão de alunos, acompanhamento pedagógico, prestação de contas e relatórios numa solução só.",
        href: "/cognita",
        ctaLabel: "Conhecer Cognita",
        size: "wide" as const,
      },
      {
        pillar: "eter" as const,
        eyebrow: "Produto · Privacidade",
        title: "Eter",
        description:
          "Mensageiro com privacidade radical. WhatsApp na facilidade, Signal Protocol na profundidade. Para jornalistas, advogados e quem leva privacidade a sério.",
        href: "/eter",
        ctaLabel: "Conhecer Eter",
      },
      {
        pillar: "consultoria" as const,
        eyebrow: "Consultoria",
        title: "Estratégia + Impacto Social",
        description:
          "Consultoria em gestão e tecnologia para empresas que querem otimizar processos. Projetos sociais com Casa Brasil e parceiros que transformam comunidades.",
        href: "/consultoria",
        ctaLabel: "Ver consultoria",
      },
      {
        pillar: "utilities" as const,
        eyebrow: "Utilities",
        title: "Energia + AI + IoT",
        description:
          "P&D pioneiro com IA, IoT e Blockchain. Hiperautomação e melhorias operacionais para o setor de utilities. 1º P&D aprovado com Equatorial em 2024.",
        href: "/utilities",
        ctaLabel: "Ver utilities",
        size: "wide" as const,
      },
    ],
  },
  productSpotlight: {
    eyebrow: "Em destaque",
    title: "Produtos próprios, no ar e em uso.",
    products: [
      {
        pillar: "cognita" as const,
        eyebrow: "Cognita · Educação + Gestão",
        title: "Plataforma de gestão para projetos sociais que entrega.",
        description:
          "Construída com Casa Brasil para projetos como a EPES (Escola de Programação e Empreendedorismo de Saquarema). Centraliza gestão de alunos, acompanhamento pedagógico, prestação de contas e relatórios — tudo em uma só solução.",
        bullets: [
          "Gestão completa de projetos sociais",
          "Acompanhamento pedagógico integrado",
          "Relatórios e prestação de contas automatizados",
          "Pensada para o terreno real de educação no Brasil",
        ],
        cta: { label: "Conhecer Cognita", href: "/cognita" },
      },
      {
        pillar: "eter" as const,
        eyebrow: "Eter · Mensageiro privado",
        title: "Conversas que ninguém mais ouve.",
        description:
          "Mensageiro privado publicado na App Store e no Google Play. Signal Protocol, cadastro só por username (sem telefone, sem e-mail), mensagens que se dissipam e chamadas cifradas.",
        bullets: [
          "Criptografia ponta-a-ponta com Signal Protocol auditado",
          "Zero metadados retidos no servidor",
          "Familiar como WhatsApp, profundo como Signal",
          "Luxo silencioso: micro-interações polidas, detalhes que importam",
        ],
        cta: { label: "Conhecer Eter", href: "/eter" },
      },
    ],
  },
  cases: {
    eyebrow: "Aplicações no ar",
    title: "Aplicações e experiências que já saíram do papel.",
    // A seção da home lê direto de content/data/apps.ts (featured); aqui só ficam os textos.
    items: [
      {
        slug: "epes-casa-brasil",
        client: "EPES + Casa Brasil",
        title: "Escola de Programação e Empreendedorismo de Saquarema.",
        excerpt:
          "Cognita na gestão da escola, Breaking Codes 26 em junho e Studio Tycoon, o simulador do EPES Challenge 2026, em agosto.",
        pillar: "social" as CasePillar,
        resultLabel: "turmas no Studio Tycoon",
        resultValue: "39",
      },
    ],
  },
  manifesto: {
    eyebrow: "Manifesto",
    paragraphs: [
      "Não criamos tecnologia por criar.",
      "Cada solução nasce de um problema real e visa gerar impacto positivo nas pessoas e organizações. Parceria de verdade. Compromisso. Transparência. Esses não são pôsteres na parede — são como a gente fecha proposta.",
      "Do setor elétrico à educação, trazemos energia — literal e figurada — para transformar realidades.",
    ],
  },
  logos: {
    eyebrow: "Confiam na Tingle",
    clients,
  },
  finalCta: {
    title: "Pronto para inovar com a gente?",
    body: "De projetos de P&D em energia a plataformas educacionais — vamos construir o futuro juntos.",
    primaryCta: { label: "Fale conosco", href: "/contato" },
    secondaryCta: { label: "Ver portfólio", href: "/cases" },
  },
};
