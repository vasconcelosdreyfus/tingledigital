import type { ProductPageData } from "@/types/product";
import { testimonials } from "@/content/data/testimonials";

export const cognita: ProductPageData = {
  pillar: "cognita",
  heroEyebrow: "Cognita · Educação + Gestão",
  heroTitle: "Plataforma de gestão pensada para projetos sociais de verdade.",
  heroSubtitle:
    "Educacional + ERP em uma só solução. Integra gestão de alunos, acompanhamento pedagógico, prestação de contas e relatórios. Construída com Casa Brasil para a realidade de educação social no Brasil.",
  heroCtaLabel: "Solicitar demonstração",
  heroCtaHref: "/contato?produto=cognita",
  mockupImageUrl: "/brand/mockup-cognita.png",
  problemEyebrow: "O problema",
  problemTitle: "Projeto social não devia se afogar em planilha.",
  problemBody:
    "Coordenação de projeto educacional social no Brasil normalmente se divide entre N sistemas: planilhas pra controle de aluno, WhatsApp pra família, PDF pra relatório, e-mail pra prestação de contas. Resultado: gestores que deviam estar fazendo gestão pedagógica ficam fazendo CTRL+C / CTRL+V.",
  problemStat: {
    value: "EPES",
    label: "case de uso real — Escola de Programação e Empreendedorismo de Saquarema",
  },
  solutionEyebrow: "Como ajudamos",
  solutionTitle: "Centraliza tudo. Libera o coordenador pro pedagógico.",
  features: [
    {
      title: "Gestão completa de projetos sociais",
      description:
        "Cadastro de alunos, turmas, frequência, acompanhamento individual. Tudo num só lugar, com permissões por perfil.",
      iconName: "users",
    },
    {
      title: "Acompanhamento pedagógico integrado",
      description:
        "Avaliações, progressão, indicadores de aprendizado. Coordenação enxerga o status real sem precisar pedir.",
      iconName: "lineChart",
    },
    {
      title: "Relatórios e prestação de contas automatizados",
      description:
        "Relatórios obrigatórios pra patrocinadores e órgãos públicos gerados com um clique. Auditoria amigável.",
      iconName: "shield",
    },
    {
      title: "Multi-projeto, multi-perfil",
      description:
        "Rede com várias frentes? Hierarquia cobre direção, coordenação, professor, monitor e família.",
      iconName: "layers",
    },
    {
      title: "Construída com a Casa Brasil",
      description:
        "Não nasceu em laboratório. Nasceu em projeto rodando — EPES, em Saquarema. Cada feature foi pedida pelo terreno.",
      iconName: "lightbulb",
    },
    {
      title: "Acessível a quem mais precisa",
      description:
        "Pensada pra realidade de redes com infraestrutura variável. Funciona em hardware modesto, conexão limitada.",
      iconName: "network",
    },
  ],
  demoEyebrow: "Como funciona na prática",
  demoTitle: "Da matrícula ao boletim, em três grandes momentos.",
  demoSteps: [
    {
      title: "Setup",
      description:
        "Importamos projeto, turmas, professores e estrutura curricular existentes em um workshop guiado. Você não precisa começar do zero.",
      imageUrl: "/brand/cognita-setup.png",
    },
    {
      title: "Dia-a-dia",
      description:
        "Coordenação, professores e monitores lançam atividade no fluxo natural. Tudo registrado, sem fricção.",
      imageUrl: "/brand/cognita-daily.png",
    },
    {
      title: "Fechamento",
      description:
        "Relatório de mês ou ano sai automático. Prestação de contas pra patrocinador, registro pra órgão público, comunicação pra família — um clique cada.",
      imageUrl: "/brand/cognita-close.png",
    },
  ],
  cases: [
    {
      slug: "epes-casa-brasil",
      client: "EPES + Casa Brasil",
      title: "Escola de Programação e Empreendedorismo de Saquarema.",
      excerpt:
        "Cognita rodando na ponta — coordenação, alunos, prestação de contas, 3 programas paralelos.",
      pillar: "social",
      heroImageUrl: "",
      resultLabel: "Programas integrados",
      resultValue: "3",
    },
  ],
  testimonial: testimonials.fabioCasaBrasil,
  finalCtaTitle: "Vamos colocar seu projeto no fluxo certo?",
  finalCtaBody:
    "Marcamos uma conversa de 30 minutos para entender sua realidade e mostrar Cognita ao vivo. Sem compromisso.",
};
