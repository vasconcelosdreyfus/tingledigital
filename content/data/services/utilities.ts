import type { ServicePageData } from "@/types/service";
import { testimonials } from "@/content/data/testimonials";

export const utilities: ServicePageData = {
  pillar: "utilities",
  heroEyebrow: "Utilities · AI · IoT · Hyperautomation",
  heroTitle: "Modernizar concessionária sem trocar o motor em pleno vôo.",
  heroSubtitle:
    "P&D aplicado, hyperautomation e melhorias operacionais para o setor de energia e saneamento. Trabalhamos com a infra que existe — adicionamos a camada que faltava.",
  heroCtaLabel: "Falar com utilities",
  heroCtaHref: "/contato?servico=utilities",
  methodEyebrow: "Como entregamos",
  methodTitle: "Pesquisa, automação e melhoria contínua.",
  methodSteps: [
    {
      number: 1,
      title: "P&D piloto",
      description: "Projetos curtos, com hipótese clara e medição rígida. Você descobre se a tese funciona antes de escalar.",
    },
    {
      number: 2,
      title: "Hyperautomation",
      description: "RPA + IA + integração entre sistemas legados. Tira a fricção dos processos que consomem o time hoje.",
    },
    {
      number: 3,
      title: "Operacional",
      description: "Recursos, manutenção, logística e atendimento — pequenos ganhos somados que pagam o projeto inteiro.",
    },
    {
      number: 4,
      title: "Governança",
      description: "Métricas, dashboards e ritos de operação para o ganho não evaporar quando a Tingle sai do projeto.",
    },
  ],
  spotlightEyebrow: "Em campo",
  spotlightTitle: "Hubz — estratégia que sai do PowerPoint e vira operação real.",
  spotlightBody:
    "Trabalhando junto da Hubz, exploramos como AI, IoT e blockchain podem entregar resultado mensurável em uma das frentes mais reguladas e críticas do país. Foco em processos com retorno em meses, não anos.",
  spotlightImageUrl: "/brand/spotlight-hubz.png",
  spotlightStats: [
    { value: "12+", label: "Processos automatizados em piloto" },
    { value: "30%", label: "Redução de tempo manual em frentes selecionadas" },
  ],
  topicsEyebrow: "Tecnologias que aplicamos",
  topicsTitle: "Sem hype. Cada tech aplicada onde gera resultado mensurável.",
  topics: [
    {
      title: "Inteligência artificial",
      description: "ML aplicado a previsão de demanda, manutenção preditiva e otimização de atendimento. Modelos próprios ou foundation.",
      iconName: "bot",
    },
    {
      title: "Internet das coisas",
      description: "Sensoriamento de campo, telemetria e gateways edge para ler o que sua infraestrutura está dizendo.",
      iconName: "network",
    },
    {
      title: "Blockchain seletivo",
      description: "Aplicado onde rastreabilidade auditável agrega — emissão de créditos, certificações, registros de medidor.",
      iconName: "lock",
    },
    {
      title: "Hyperautomation",
      description: "Composição de RPA, BPM e IA para automatizar fluxos complexos entre sistemas que não se falam.",
      iconName: "workflow",
    },
  ],
  testimonials: [testimonials.zeHubz!],
  finalCtaTitle: "Quer ver o setor de energia se mover mais rápido?",
  finalCtaBody:
    "Conta seu desafio. Nas primeiras 2 semanas devolvemos um plano de prova de conceito com escopo e cronograma.",
};
