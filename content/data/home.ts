import { clients } from "./clients";
import type { CasePillar } from "@/types/case";

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
      { label: "50+ PROJETOS", accent: "yellow" as const },
      { label: "4 PRODUTOS ATIVOS", accent: "cyan" as const },
      { label: "10K+ PESSOAS IMPACTADAS", accent: "pink" as const },
      { label: "6 ANOS NO MERCADO", accent: "lime" as const },
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
    title: "Dois produtos lançados em 2025. Engenharia que entrega.",
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
          "Mensageiro com privacidade radical. WhatsApp na facilidade, Signal Protocol na profundidade. Para jornalistas, advogados, executivos e qualquer um que entende o valor de comunicação verdadeiramente privada.",
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
    eyebrow: "Cases recentes",
    title: "Trabalho que fala por si.",
    items: [
      {
        slug: "qbanho-equatorial",
        client: "QBANHO + Equatorial",
        title: "Milhões em receita com trocadores de calor.",
        excerpt:
          "Ponte estratégica entre QBANHO e Equatorial Energia. Trocadores de calor entrando no portfólio de eficiência da maior do setor.",
        pillar: "utilities" as CasePillar,
        resultLabel: "Receita gerada",
        resultValue: "Milhões",
      },
      {
        slug: "hubz-equatorial",
        client: "Hubz + Equatorial",
        title: "1º P&D aprovado: automação do tratamento de água.",
        excerpt:
          "Em 2024, marco histórico — primeiro projeto de P&D aprovado. Automatizar tratamento de água da Companhia de Águas do Amapá.",
        pillar: "utilities" as CasePillar,
        resultLabel: "P&D aprovado",
        resultValue: "1º",
      },
      {
        slug: "epes-casa-brasil",
        client: "EPES + Casa Brasil",
        title: "Escola de Programação e Empreendedorismo de Saquarema.",
        excerpt:
          "Programa educacional com 3 frentes: Inova Talks, Break Code (escape room digital), Startup Challenge.",
        pillar: "social" as CasePillar,
        resultLabel: "Programas",
        resultValue: "3",
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
