import { clients } from "./clients";
import type { CasePillar } from "@/types/case";

export const homeData = {
  hero: {
    eyebrow: "Tingle Digital · Agência de tecnologia criativa",
    titleLine1: "Tecnologia",
    titleLine2: "com",
    titleAccent: "alma.",
    subtitle:
      "Construímos produtos próprios, consultamos com impacto social e modernizamos utilities. Para líderes que tratam tecnologia como diferencial estratégico — não commodity.",
    primaryCta: { label: "Conheça nossos produtos", href: "#produtos" },
    secondaryCta: { label: "Fale com a gente", href: "/contato" },
  },
  numbers: {
    items: [
      { label: "50+ PROJETOS", accent: "yellow" as const },
      { label: "4 PRODUTOS ATIVOS", accent: "cyan" as const },
      { label: "10.000+ PESSOAS IMPACTADAS", accent: "pink" as const },
      { label: "6 ANOS NO MERCADO", accent: "lime" as const },
    ],
  },
  pillars: {
    eyebrow: "O que fazemos",
    title: "Quatro frentes. Uma só obsessão: construir bem.",
    items: [
      {
        pillar: "cognita" as const,
        eyebrow: "Produto · Educação",
        title: "Cognita",
        description:
          "Plataforma que organiza a gestão pedagógica de redes de ensino — do diário de classe ao boletim. Já em uso por dezenas de escolas.",
        href: "/cognita",
        ctaLabel: "Conhecer Cognita",
        size: "wide" as const,
      },
      {
        pillar: "eter" as const,
        eyebrow: "Produto · Privacidade",
        title: "Eter",
        description:
          'Messenger com criptografia ponta-a-ponta e privacidade radical. Onde "proteção máxima" é o padrão, não premium.',
        href: "/eter",
        ctaLabel: "Conhecer Eter",
      },
      {
        pillar: "consultoria" as const,
        eyebrow: "Consultoria",
        title: "Estratégia + impacto social",
        description:
          "Diagnóstico, estratégia e execução para projetos onde tecnologia precisa ter cara de impacto. Parceiros da Casa Brasil e outros.",
        href: "/consultoria",
        ctaLabel: "Ver consultoria",
      },
      {
        pillar: "utilities" as const,
        eyebrow: "Utilities",
        title: "Energia + AI + IoT",
        description:
          "P&D, hyperautomation e melhorias operacionais para concessionárias. AI, IoT e blockchain aplicados onde geram resultado.",
        href: "/utilities",
        ctaLabel: "Ver utilities",
        size: "wide" as const,
      },
    ],
  },
  productSpotlight: {
    eyebrow: "Em destaque",
    title: "Dois produtos. Duas teses. Uma engenharia de respeito.",
    products: [
      {
        pillar: "cognita" as const,
        eyebrow: "Cognita · Gestão escolar",
        title: "Tira a fricção da rotina de quem ensina.",
        description:
          "Pensado com diretores e coordenadores de escolas reais. Centraliza diário, frequência, planejamento e comunicação com famílias numa interface que respeita o tempo do educador.",
        bullets: [
          "Multi-escola e multi-perfil (rede, gestor, professor, família)",
          "Lançamento de notas e frequência em segundos",
          "Boletim e relatórios automáticos",
          "Integração com sistemas existentes da rede",
        ],
        cta: { label: "Conhecer Cognita", href: "/cognita" },
      },
      {
        pillar: "eter" as const,
        eyebrow: "Eter · Mensageiro seguro",
        title: "Suas palavras. Só suas.",
        description:
          "Criptografia ponta-a-ponta auditável, zero metadados retidos, código aberto. Construído para quem leva privacidade a sério — jornalistas, advogados, ativistas e quem só quer paz.",
        bullets: [
          "E2E criptografia forte por padrão",
          "Backups locais ou nuvem própria (você decide)",
          "Sem coleta de metadados ou logs de conversa",
          "Aberto à auditoria de segurança independente",
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
        slug: "casa-brasil",
        client: "Casa Brasil",
        title: "Tecnologia a serviço de comunidades em todo o país.",
        excerpt:
          "Programa social que usa cultura, educação e tecnologia para incluir digitalmente populações vulneráveis.",
        pillar: "social" as CasePillar,
        resultLabel: "Pessoas alcançadas",
        resultValue: "10K+",
      },
      {
        slug: "hubz",
        client: "Hubz",
        title: "P&D em energia que conversa com o operacional.",
        excerpt:
          "Estratégia e execução de hyperautomation para um dos players do setor elétrico.",
        pillar: "utilities" as CasePillar,
        resultLabel: "Processos automatizados",
        resultValue: "12+",
      },
      {
        slug: "the-town",
        client: "The Town",
        title: "Analytics em tempo real para festival de música.",
        excerpt:
          "Plataforma de dados que entregou insights de público e operação para um dos maiores eventos do país.",
        pillar: "marketing" as CasePillar,
        resultLabel: "Eventos cobertos",
        resultValue: "3",
      },
    ],
  },
  manifesto: {
    eyebrow: "Manifesto",
    paragraphs: [
      "Tecnologia sem alma é commodity.",
      "A gente não constrói pra impressionar — constrói pra resolver. Cada linha de código, cada decisão de produto, cada conversa com cliente vem do mesmo lugar: respeito pelo problema e curiosidade pela melhor forma de atacar.",
      "Por isso somos pequenos, escolhidos e prontos pra dizer não quando não fizer sentido.",
    ],
  },
  logos: {
    eyebrow: "Confiam na Tingle",
    clients,
  },
  finalCta: {
    title: "Vamos construir algo que importe?",
    body: "Conte o problema. A gente devolve uma proposta direta, sem rodeios — em até 5 dias úteis.",
    primaryCta: { label: "Começar conversa", href: "/contato" },
    secondaryCta: { label: "Ver portfólio completo", href: "/cases" },
  },
};
