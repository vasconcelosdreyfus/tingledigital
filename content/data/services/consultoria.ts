import type { ServicePageData } from "@/types/service";
import { testimonials } from "@/content/data/testimonials";

export const consultoria: ServicePageData = {
  pillar: "consultoria",
  heroEyebrow: "Consultoria · Tecnologia com impacto",
  heroTitle: "Estratégia que entrega. Execução que mantém o impacto vivo.",
  heroSubtitle:
    "Consultoria em gestão e tecnologia para empresas que querem otimizar processos. E projetos sociais com Casa Brasil que transformam comunidades reais. Aqui não tem soluções de prateleira.",
  heroCtaLabel: "Iniciar projeto",
  heroCtaHref: "/contato?servico=consultoria",
  methodEyebrow: "Como trabalhamos",
  methodTitle: "Quatro etapas. Zero soluções de prateleira.",
  methodSteps: [
    {
      number: 1,
      title: "Diagnóstico",
      description:
        "Mergulhamos no contexto: entrevistas, observação de campo, leitura de dados existentes. Saímos com um mapa real do problema.",
    },
    {
      number: 2,
      title: "Estratégia",
      description:
        "Co-criamos a tese de solução com sua equipe. Definimos hipóteses, KPIs e risco — antes de qualquer linha de código.",
    },
    {
      number: 3,
      title: "Execução",
      description:
        "Time multidisciplinar constrói em ciclos curtos com entregas validadas. Você acompanha em vez de torcer.",
    },
    {
      number: 4,
      title: "Sustentação",
      description:
        "Não largamos no go-live. Operação assistida e transferência de conhecimento pra equipe interna continuar.",
    },
  ],
  spotlightEyebrow: "Cultura · Produção de eventos",
  spotlightTitle: "Circuito Musical das Águas.",
  spotlightBody: "Realizamos um circuito de shows gratuitos em sete cidades do Rio de Janeiro, com patrocínio da Setur-RJ. Da curadoria à produção e à operação, conectamos artistas, públicos e comunidades.",
  spotlightPhoto: { src: "/cases/circuito-musical-das-aguas.webp", creditHref: "https://pmspa.rj.gov.br/sao-pedro-da-aldeia-celebra-inauguracao-do-centro-esportivo-municipal-rei-pele/", kind: "circuito" },
  spotlightStats: [
    { value: "7 cidades", label: "no circuito fluminense" },
    { value: "Gratuito", label: "acesso à programação cultural" },
  ],
  topicsEyebrow: "Onde atuamos",
  topicsTitle: "Cinco áreas com peso real de execução.",
  topics: [
    {
      title: "Consultoria e Gestão Empresarial",
      description:
        "Otimização de processos, eficiência operacional, estratégia de tecnologia para empresas que querem crescer com método.",
      iconName: "lineChart",
    },
    {
      title: "Projetos Sociais e Comunitários",
      description:
        "Educação, cultura e esporte como ferramentas de transformação. Com Casa Brasil, Transforma Nova Iguaçu, EPES.",
      iconName: "users",
    },
    {
      title: "Eficiência e Inovação Energética",
      description:
        "Expertise em engenharia para soluções inovadoras. Empresas e comunidades usando energia de forma mais sustentável.",
      iconName: "zap",
    },
    {
      title: "Marketing e Comunicação",
      description:
        "Publicidade, posicionamento, campanha. Ajudar projetos a ganharem o alcance que merecem.",
      iconName: "sparkles",
    },
    {
      title: "Produção de Shows e Eventos",
      description:
        "Festivais, summits, workshops. Direção criativa, tecnologia e logística. Como no Circuito Musical das Águas (7 cidades, Gov RJ).",
      iconName: "rocket",
    },
  ],
  testimonials: [testimonials.fabioCasaBrasil!],
  finalCtaTitle: "Tem um projeto difícil esperando alguém topar?",
  finalCtaBody:
    "Nossa conversa inicial é gratuita e direta. Você sai com clareza de escopo, mesmo que decida não seguir com a Tingle.",
};
