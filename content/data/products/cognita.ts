import type { ProductPageData } from "@/types/product";
import { cognitaImpactThousands } from "../cognita-impact";
import { testimonials } from "@/content/data/testimonials";

export const cognita: ProductPageData = {
  pillar: "cognita",
  heroEyebrow: "Cognita · Educação + Gestão",
  heroTitle: "Plataforma de gestão pensada para projetos sociais de verdade.",
  heroSubtitle:
    "Educacional + ERP em uma só solução. Integra gestão de alunos, acompanhamento pedagógico, prestação de contas e relatórios. Construída com Casa Brasil para a realidade de educação social no Brasil.",
  heroCtaLabel: "Solicitar demonstração",
  heroCtaHref: "/contato?produto=cognita",
  // Telas reais registradas em content/data/apps.ts (largura e altura vêm de lá).
  problemEyebrow: "O problema",
  problemTitle: "Projeto social não devia se afogar em planilha.",
  problemBody:
    "Coordenação de projeto educacional social no Brasil normalmente se divide entre N sistemas: planilhas pra controle de aluno, WhatsApp pra família, PDF pra relatório, e-mail pra prestação de contas. Resultado: gestores que deviam estar fazendo gestão pedagógica ficam fazendo CTRL+C / CTRL+V.",
  // Matrículas agregadas entre os projetos, verificadas em cognita-impact.ts.
  problemStat: {
    value: `${cognitaImpactThousands.enrollments} mil+`,
    label:
      "matrículas gerenciadas no Cognita, conectando alunos, turmas e equipes pedagógicas",
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
  demoTitle: "Da inscrição ao relatório, em três grandes momentos.",
  demoSteps: [
    {
      title: "Setup",
      description:
        "Cada organização ganha o seu espaço, com página pública e inscrições abertas. Turmas, professores e estrutura existente entram em um workshop guiado.",
    },
    {
      title: "Dia-a-dia",
      description:
        "Frequência, aulas e gamificação no fluxo natural. Na EPES, o XP dos desafios do Breaking Codes 26 entra direto no Cognita.",
    },
    {
      title: "Dados e prestação de contas",
      description: `Relatórios para patrocinadores e órgãos públicos saem da própria base. O motor de pesquisas do Cognita já reuniu mais de ${cognitaImpactThousands.surveyResponses} mil respostas em diferentes projetos, com coleta digital e em campo.`,
    },
  ],
  cases: [
    {
      slug: "epes-casa-brasil",
      client: "EPES + Casa Brasil",
      title: "Escola de Programação e Empreendedorismo de Saquarema.",
      excerpt:
        "Cognita na gestão da escola, com o Breaking Codes 26 e o Studio Tycoon, simulador do EPES Challenge 2026.",
      pillar: "social",
      heroImageUrl: "/apps/icons/cognita.webp",
      resultLabel: "turmas no Studio Tycoon",
      resultValue: "39",
    },
  ],
  testimonial: testimonials.fabioCasaBrasil,
  finalCtaTitle: "Vamos colocar seu projeto no fluxo certo?",
  finalCtaBody:
    "Marcamos uma conversa de 30 minutos para entender sua realidade e mostrar Cognita ao vivo. Sem compromisso.",
};
