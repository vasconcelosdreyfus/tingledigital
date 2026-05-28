import type { ServicePageData } from "@/types/service";
import { testimonials } from "@/content/data/testimonials";

export const consultoria: ServicePageData = {
  pillar: "consultoria",
  heroEyebrow: "Consultoria · Tecnologia com impacto",
  heroTitle: "Estratégia que entrega. Execução que mantém o impacto vivo.",
  heroSubtitle:
    "Para projetos onde tecnologia precisa ter cara de propósito — social, educacional ou estratégico. Levamos o método e a mão na massa de quem já construiu junto da Casa Brasil e dezenas de outras frentes.",
  heroCtaLabel: "Iniciar projeto",
  heroCtaHref: "/contato?servico=consultoria",
  methodEyebrow: "Como trabalhamos",
  methodTitle: "Quatro etapas. Zero soluções de prateleira.",
  methodSteps: [
    {
      number: 1,
      title: "Diagnóstico",
      description: "Mergulhamos no contexto: entrevistas, observação de campo, leitura de dados existentes. Saímos com um mapa real do problema.",
    },
    {
      number: 2,
      title: "Estratégia",
      description: "Co-criamos a tese de solução com sua equipe. Definimos hipóteses, KPIs e risco — antes de qualquer linha de código.",
    },
    {
      number: 3,
      title: "Execução",
      description: "Time multidisciplinar (produto, eng, design) constrói em ciclos curtos com entregas validadas. Você acompanha em vez de torcer.",
    },
    {
      number: 4,
      title: "Sustentação",
      description: "Não largamos no go-live. Período de operação assistida e transferência de conhecimento para o time interno continuar.",
    },
  ],
  spotlightEyebrow: "Parceria flagship",
  spotlightTitle: "Casa Brasil — tecnologia para inclusão digital em escala nacional.",
  spotlightBody:
    "Há anos parceiros da Casa Brasil em projetos que transformam tecnologia em pertencimento. Da articulação de programas sociais até a operação digital de hubs comunitários, somos braço técnico que entende a complexidade do terreno.",
  spotlightImageUrl: "/brand/spotlight-casa-brasil.png",
  spotlightStats: [
    { value: "10K+", label: "Pessoas alcançadas em programas conjuntos" },
    { value: "12", label: "Hubs comunitários ativos com nossa estrutura" },
  ],
  topicsEyebrow: "Onde atuamos",
  topicsTitle: "Quatro frentes onde consultoria + execução fazem diferença.",
  topics: [
    {
      title: "Negócios e gestão",
      description: "Diagnóstico estratégico, redesenho de processo e tecnologia para PMs e diretores que querem decisão baseada em dado.",
      iconName: "lineChart",
    },
    {
      title: "Social e comunitário",
      description: "Projetos com fundações, ONGs e governo onde tech precisa servir gente real, em contexto real.",
      iconName: "users",
    },
    {
      title: "Marketing e comunicação",
      description: "Plataformas, automações e analytics para times de marketing que querem escalar sem perder qualidade de relação.",
      iconName: "sparkles",
    },
    {
      title: "Produção de eventos",
      description: "Tech stack completa para shows, festivais e summits — do credenciamento ao analytics em tempo real.",
      iconName: "rocket",
    },
  ],
  testimonials: [testimonials.fabioCasaBrasil!],
  finalCtaTitle: "Tem um projeto difícil esperando alguém topar?",
  finalCtaBody:
    "Nossa conversa inicial é gratuita e direta. Você sai com clareza de escopo, mesmo que decida não seguir com a Tingle.",
};
