import type { ProductPageData } from "@/types/product";
import { testimonials } from "@/content/data/testimonials";

export const cognita: ProductPageData = {
  pillar: "cognita",
  heroEyebrow: "Cognita · Plataforma de gestão escolar",
  heroTitle: "Gestão pedagógica que respeita o tempo do educador.",
  heroSubtitle:
    "Diário, frequência, boletim e comunicação com famílias numa interface que parece feita para gente que ensina — porque foi.",
  heroCtaLabel: "Solicitar demonstração",
  heroCtaHref: "/contato?produto=cognita",
  mockupImageUrl: "/brand/mockup-cognita.png",
  problemEyebrow: "O problema",
  problemTitle: "Diretor não devia ser refém de planilha.",
  problemBody:
    "Boa parte do tempo de gestão escolar evapora em conciliação de dados entre sistemas legados, planilhas paralelas e WhatsApp. O resultado é menos tempo para o que importa: pedagogia, formação e relacionamento com a família.",
  problemStat: { value: "67%", label: "do tempo da coordenação consumido por tarefas operacionais (estimativa setor)" },
  solutionEyebrow: "Como ajudamos",
  solutionTitle: "Centraliza o operacional. Devolve o tempo para o pedagógico.",
  features: [
    {
      title: "Diário e frequência em segundos",
      description: "Lançamento de presença em modo turma ou nominal, com atalhos para situações de exceção. Sem CSV, sem download.",
      iconName: "zap",
    },
    {
      title: "Boletim automático",
      description: "Calcula médias, ponderações e situação final conforme regras da rede. Imprime, envia, exporta — sem retrabalho.",
      iconName: "lineChart",
    },
    {
      title: "Famílias informadas",
      description: "Comunicados, recados e boletins entregues por canal escolhido (app, e-mail ou impresso) com confirmação de leitura.",
      iconName: "messageSquare",
    },
    {
      title: "Multi-escola, multi-perfil",
      description: "Rede com várias unidades? Hierarquia de permissões cobre direção geral, direção local, coordenação, professor e família.",
      iconName: "layers",
    },
    {
      title: "Integra com o que você já tem",
      description: "API para ERPs escolares, plataformas de avaliação externa e sistemas de matrícula. Não pedimos para você abandonar nada.",
      iconName: "network",
    },
    {
      title: "Privacidade em primeiro lugar",
      description: "Dados de menores tratados conforme LGPD e ECA Digital. Logs auditáveis, retenção configurável, exportação garantida.",
      iconName: "shield",
    },
  ],
  demoEyebrow: "Como funciona na prática",
  demoTitle: "Da matrícula ao boletim, em três grandes momentos.",
  demoSteps: [
    {
      title: "Setup",
      description: "Importamos turmas, professores e estrutura curricular existente em um workshop guiado. Você não precisa começar do zero.",
      imageUrl: "/brand/cognita-setup.png",
    },
    {
      title: "Dia-a-dia",
      description: "Professores lançam diário e notas no fluxo natural da aula. Coordenação acompanha em dashboard sem precisar pedir relatórios.",
      imageUrl: "/brand/cognita-daily.png",
    },
    {
      title: "Fechamento",
      description: "Boletim, frequência e relatórios obrigatórios saem com um clique. Família recebe pelo canal preferido.",
      imageUrl: "/brand/cognita-close.png",
    },
  ],
  cases: [
    {
      slug: "casa-brasil",
      client: "Casa Brasil",
      title: "Tecnologia a serviço de comunidades.",
      excerpt: "Cognita ajustado para a realidade de redes com baixa conectividade e necessidades específicas.",
      pillar: "social",
      heroImageUrl: "",
      resultLabel: "Escolas atendidas",
      resultValue: "12",
    },
  ],
  testimonial: testimonials.fabioCasaBrasil,
  finalCtaTitle: "Vamos colocar sua rede no fluxo certo?",
  finalCtaBody:
    "Marcamos uma conversa de 30 minutos para entender sua realidade e mostrar a Cognita ao vivo. Sem compromisso.",
};
