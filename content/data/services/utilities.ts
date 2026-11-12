import type { ServicePageData } from "@/types/service";
import { testimonials } from "@/content/data/testimonials";

export const utilities: ServicePageData = {
  pillar: "utilities",
  heroEyebrow: "Utilities · AI · IoT · Hyperautomation",
  heroTitle: "Pioneirismo em P&D. Hiperautomação que entrega resultado.",
  heroSubtitle:
    "Desenvolvimento de negócios, eficiência energética e inovação para energia, água e infraestrutura. Da articulação comercial dos trocadores de calor da QBANHO à estruturação do desenho e da abordagem de projetos de P&D, conectamos conhecimento do setor e estratégia.",
  heroCtaLabel: "Falar com utilities",
  heroCtaHref: "/contato?servico=utilities",
  methodEyebrow: "Quatro frentes de atuação",
  methodTitle: "Da pesquisa pioneira à operação otimizada.",
  methodSteps: [
    {
      number: 1,
      title: "P&D Pioneiro",
      description:
        "IA, IoT e Blockchain pra desafios em energia, água e serviços públicos. Projetos aprovados em programas de P&D regulatórios.",
    },
    {
      number: 2,
      title: "Hiperautomação",
      description:
        "Machine Learning + automação de processos. Sistemas mais robustos, fluxos que rodam sozinhos.",
    },
    {
      number: 3,
      title: "Melhorias Operacionais",
      description:
        "Gestão de recursos, manutenção, logística. Otimização prática com tecnologia emergente.",
    },
    {
      number: 4,
      title: "Core Business",
      description:
        "Front office, back office, estratégias regulatórias. Otimização em todas as facetas da empresa.",
    },
  ],
  spotlightEyebrow: "Em campo",
  spotlightTitle: "Trocadores de calor: tecnologia que ganhou mercado.",
  spotlightBody:
    "A Tingle foi a ponte estratégica entre QBANHO e Equatorial Energia. Com experiência no setor e articulação comercial, introduzimos os trocadores de calor no portfólio de soluções de eficiência energética do grupo, viabilizando milhares de vendas e milhões em receita.",
  spotlightPartners: [
    { name: "QBANHO", role: "Tecnologia de eficiência energética" },
    { name: "Tingle", role: "Estratégia e desenvolvimento comercial" },
    { name: "Equatorial Energia", role: "Cliente estratégico no setor elétrico" },
  ],
  spotlightStats: [
    { value: "Milhares", label: "de trocadores de calor vendidos" },
    { value: "Milhões", label: "em receita gerada com QBANHO no setor elétrico" },
  ],
  topicsEyebrow: "Tecnologias que aplicamos",
  topicsTitle: "Sem hype. Cada tech onde gera resultado mensurável.",
  topics: [
    {
      title: "Inteligência Artificial",
      description:
        "ML aplicado a previsão de demanda, manutenção preditiva e otimização. Modelos próprios ou foundation, dependendo do caso.",
      iconName: "bot",
    },
    {
      title: "Internet das Coisas",
      description:
        "Sensoriamento de campo, telemetria e gateways edge. Ler o que sua infraestrutura está dizendo em tempo real.",
      iconName: "network",
    },
    {
      title: "Blockchain Seletivo",
      description:
        "Aplicado onde rastreabilidade auditável agrega — emissão de créditos, certificações, registros de medidor.",
      iconName: "lock",
    },
    {
      title: "Hiperautomação",
      description:
        "Composição de RPA, BPM e IA para fluxos complexos entre sistemas legados que não se falam.",
      iconName: "workflow",
    },
  ],
  testimonials: [testimonials.zeHubz!],
  finalCtaTitle: "Quer ver o setor de energia se mover mais rápido?",
  finalCtaBody:
    "Conta seu desafio. Nas primeiras 2 semanas devolvemos um plano de prova de conceito com escopo e cronograma.",
};
