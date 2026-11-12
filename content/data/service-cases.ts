import type { ServicePillar } from "@/types/service";

export interface ServiceCase {
  slug: string;
  pillar: ServicePillar;
  category: string;
  partners: string;
  title: string;
  context: string;
  delivery: string;
  results: { value: string; label: string }[];
  link: { label: string; href: string };
}

// Recuperados do portfólio institucional anterior. Fontes e limites em
// docs/reviews/2026-11-06/service-cases/sources.md.
export const serviceCases: ServiceCase[] = [
  {
    slug: "trocadores-de-calor",
    pillar: "utilities",
    category: "Eficiência energética · Desenvolvimento de negócios",
    partners: "QBANHO + Equatorial Energia",
    title: "Trocadores de calor que ganharam mercado.",
    context: "Uma tecnologia de eficiência energética precisava chegar às oportunidades do setor elétrico.",
    delivery: "A Tingle conectou a QBANHO à Equatorial Energia e conduziu a articulação comercial para introduzir os trocadores de calor no portfólio de soluções do grupo.",
    results: [
      { value: "Milhares", label: "de trocadores vendidos" },
      { value: "Milhões", label: "em receita gerada" },
    ],
    link: { label: "Converse sobre eficiência energética", href: "/contato?servico=utilities" },
  },
  {
    slug: "circuito-musical-das-aguas",
    pillar: "consultoria",
    category: "Cultura · Produção de eventos",
    partners: "Tingle + Setur-RJ",
    title: "Circuito Musical das Águas.",
    context: "Um circuito de shows gratuitos para conectar música, turismo e economia criativa em municípios do Rio de Janeiro.",
    delivery: "Realização da Tingle, com patrocínio da Secretaria de Estado de Turismo do Rio de Janeiro. Curadoria, produção e operação de eventos com artistas como Clareou, Balacobaco, Pique Novo e Thiago Martins.",
    results: [
      { value: "7 cidades", label: "no circuito fluminense" },
      { value: "Gratuito", label: "acesso à programação cultural" },
    ],
    link: { label: "Veja a publicação de Rio das Ostras", href: "https://www.riodasostras.rj.gov.br/circuito-musical-das-aguas-chega-a-rio-das-ostras/" },
  },
  {
    slug: "pd-tratamento-agua-amapa",
    pillar: "utilities",
    category: "Pesquisa e desenvolvimento · Água",
    partners: "Estruturação de P&D · Setor elétrico",
    title: "P&D para o tratamento de água no Amapá.",
    context: "Aplicar tecnologia à automação do tratamento de água da Companhia de Águas do Amapá.",
    delivery: "Estruturamos o desenho e a abordagem do primeiro projeto de P&D aprovado no setor elétrico, para automatizar o tratamento de água da Companhia de Águas do Amapá. A participação da Tingle se limitou à estruturação; não executamos o projeto.",
    results: [
      { value: "1º P&D", label: "estruturado pela Tingle · aprovado em 2024" },
      { value: "Amapá", label: "território do projeto" },
    ],
    link: { label: "Converse sobre um projeto de P&D", href: "/contato?servico=utilities" },
  },
  {
    slug: "epes-casa-brasil",
    pillar: "consultoria",
    category: "Educação · Tecnologia · Gestão",
    partners: "Casa Brasil + EPES",
    title: "Tecnologia e empreendedorismo em Saquarema.",
    context: "A Escola de Programação e Empreendedorismo de Saquarema reúne formação, experiências práticas e acompanhamento dos alunos.",
    delivery: "Com a Casa Brasil, desenvolvemos palestras, desafios de programação e simuladores de negócios, além do Cognita, monitoramento e relatórios de prestação de contas.",
    results: [
      { value: "Formação", label: "palestras e experiências de aprendizagem" },
      { value: "Gestão", label: "dados, acompanhamento e prestação de contas" },
    ],
    link: { label: "Conheça as aplicações educacionais", href: "/cases#aplicacoes" },
  },
  {
    slug: "transforma-nova-iguacu",
    pillar: "consultoria",
    category: "Esporte · Projetos sociais",
    partners: "Casa Brasil + Transforma Nova Iguaçu",
    title: "Esporte como caminho de transformação.",
    context: "O Transforma Nova Iguaçu usa o esporte e a educação para ampliar oportunidades e promover inclusão social.",
    delivery: "Desde 2025, a Tingle participa do projeto com a Casa Brasil, somando tecnologia, gestão e acompanhamento à atuação das equipes no território.",
    results: [
      { value: "2025", label: "início da participação da Tingle" },
      { value: "Inclusão", label: "esporte e educação na comunidade" },
    ],
    link: { label: "Converse sobre projetos sociais", href: "/contato?servico=consultoria" },
  },
  {
    slug: "fixer-telecomunicacoes",
    pillar: "utilities",
    category: "Telecomunicações · Infraestrutura",
    partners: "Tingle + FIXER",
    title: "Uma solução para organizar cabos nos postes.",
    context: "A infraestrutura de telecomunicações demanda soluções para organizar a ocupação dos postes e melhorar a segurança das instalações.",
    delivery: "Parceria iniciada em 2025 para desenvolver uma solução de organização de cabos de telefonia, conectando inovação às necessidades da infraestrutura urbana.",
    results: [
      { value: "2025", label: "início da parceria" },
      { value: "Telecom", label: "desenvolvimento de solução para infraestrutura" },
    ],
    link: { label: "Converse sobre infraestrutura", href: "/contato?servico=utilities" },
  },
];
