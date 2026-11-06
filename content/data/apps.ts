import type { AppEntry, AppImage } from "@/types/app";
import { cognitaImpactThousands } from "./cognita-impact";

/**
 * Fonte única das aplicações exibidas no site.
 * Status e números conferidos em 25/09/2026; a origem de cada número está no comentário ao lado.
 * Imagem: só o ícone oficial de cada aplicação (512×512), para a vitrine ficar uniforme e sem telas de teste.
 */
export const apps: AppEntry[] = [
  {
    slug: "eter",
    name: "Eter",
    tagline: "Mensageiro privado de verdade.",
    description:
      "Criptografia ponta a ponta com Signal Protocol, cadastro só por username (sem telefone, sem e-mail), mensagens que se dissipam e chamadas cifradas.",
    owner: "Produto Tingle",
    category: "Comunicação e privacidade",
    // App Store id6759132602 (iTunes lookup) e Google Play com.eter.eter (HTTP 200), 25/09/2026
    status: { kind: "publicado", label: "Publicado na App Store e no Google Play" },
    icon: { src: "/apps/icons/eter.webp", width: 512, height: 512, alt: "Ícone do Eter" },
    platforms: ["iOS", "Android", "macOS (beta)"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/br/app/eter/id6759132602" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.eter.eter",
      },
    ],
    page: "https://eter.social",
  },
  {
    slug: "the-candidate",
    name: "The Candidate",
    tagline: "Do zero ao Planalto.",
    description:
      "Encontre quem pensa como você e construam juntos um novo Brasil do seu jeito. Um simulador político em que você escolhe seu partido, define propostas e traça o caminho até o Planalto.",
    highlight: "Encontre quem pensa como você e construam juntos um novo Brasil do seu jeito.",
    owner: "Produto Tingle",
    category: "Jogos",
    // Google Play com.bevoted.thecandidate (HTTP 200); iOS 1.2.2 REJECTED na ASC API (conferido 07/10/2026): não citar iOS
    status: { kind: "publicado", label: "No Google Play" },
    icon: {
      src: "/apps/icons/the-candidate.webp",
      width: 512,
      height: 512,
      alt: "Ícone do The Candidate",
    },
    platforms: ["Android"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.bevoted.thecandidate",
      },
      { label: "thecandidate.app", href: "https://thecandidate.app" },
    ],
  },
  {
    slug: "cognita",
    name: "Cognita",
    tagline: "Gestão educacional e de projetos sociais.",
    description:
      "Plataforma multi-cliente para alunos, turmas, frequência, aulas, gamificação, eventos e prestação de contas, com um motor de pesquisas para coleta digital e em campo, usado em diferentes projetos. Construída com a Casa Brasil para a EPES.",
    owner: "Produto Tingle",
    category: "Educação e gestão social",
    // cognita.tingledigital.com HTTP 200; coleção projetos em produção: EPES, Tropa do Esporte, Educa Brasis, Rede Vida Animal Brasil, Casa Tech
    status: { kind: "publicado", label: "No ar · web · app de campo em beta" },
    icon: {
      src: "/apps/icons/cognita.webp",
      width: 512,
      height: 512,
      alt: "Ícone do Cognita",
    },
    platforms: ["Web", "iOS (beta)", "Android (beta)"],
    links: [
      { label: "cognita.tingledigital.com", href: "https://cognita.tingledigital.com" },
    ],
    page: "/cognita",
    // Agregações de produção em 06/11/2026: ver cognita-impact.ts.
    metrics: [
      {
        value: `${cognitaImpactThousands.enrollments} mil+`,
        label: "matrículas gerenciadas",
      },
      {
        value: `${cognitaImpactThousands.surveyResponses} mil+`,
        label: "respostas coletadas pelo motor de pesquisas",
      },
    ],
  },
  {
    slug: "sentinelas",
    name: "Sentinelas da Guanabara",
    tagline: "Cuide do boto, cuide da baía.",
    description:
      "Jogo de educação ambiental sobre a Baía de Guanabara: missões no mundo real, um boto virtual para cuidar, minijogos e um bestiário de espécies. Em 10 idiomas.",
    owner: "Casa Brasil × Tingle",
    category: "Educação ambiental",
    // Google Play br.org.sentinelas.sentinelas (HTTP 200); App Store 1.0.0 publicada em 26/09/2026 (iTunes lookup, conferido 07/10/2026)
    status: { kind: "publicado", label: "Publicado na App Store e no Google Play" },
    icon: {
      src: "/apps/icons/sentinelas.webp",
      width: 512,
      height: 512,
      alt: "Ícone do Sentinelas da Guanabara",
    },
    platforms: ["iOS", "Android"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/br/app/sentinelas-da-guanabara/id6787792211",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=br.org.sentinelas.sentinelas",
      },
    ],
  },
  {
    slug: "epes-summit",
    name: "EPES Summit 26",
    tagline: "Da ideia à defesa, uma jornada com IA.",
    description:
      "Realizada de 6 a 29 de outubro de 2026, a jornada de empreendedorismo da EPES foi entregue com sucesso: oito missões para transformar o aprendizado em um projeto coletivo. A IA organizou contribuições e orientou decisões, enquanto cada aluno registrou sua participação e a turma preparou a defesa da ideia. Integrado ao Cognita.",
    owner: "Para Casa Brasil · EPES",
    category: "Educação e inteligência artificial",
    // Entrega e período confirmados pelo responsável em 06/11/2026.
    status: { kind: "realizado", label: "Realizado · 6 a 29/out/2026" },
    icon: {
      src: "/apps/icons/epes-summit.svg",
      width: 512,
      height: 512,
      alt: "Símbolo do EPES Summit 26",
    },
    platforms: ["Web"],
    links: [
      { label: "Acesso da EPES", href: "https://epes-summit26-dev.web.app" },
    ],
    // Oito definições de missão em shared/config/missions/mission-0N.v1.json.
    metrics: [{ value: "8", label: "missões de criação" }],
  },
  {
    slug: "leitura-delas",
    name: "Leitura Delas e Papo que Protege",
    tagline: "Rock in Rio 2026, Espaço Plural.",
    description:
      "Dois totens e um telão ao vivo: um quiz que entrega uma leitura pessoal no celular e uma conversa sobre relações que termina no canal 180. Feito para a Rock World com a Casa Brasil e a Educa Brasis.",
    owner: "Para Rock World · Casa Brasil",
    category: "Experiências em eventos",
    // relatório RELATORIO.md (Rock World 2026): festival de 4 a 13/09/2026
    status: { kind: "realizado", label: "Realizado · Rock in Rio, set/2026" },
    icon: {
      src: "/apps/icons/leitura-delas.svg",
      width: 512,
      height: 512,
      alt: "Ícone do Leitura Delas e Papo que Protege",
    },
    platforms: ["Totem", "Celular", "Telão"],
    links: [],
    // ~/dev/RWD/docs/rockworld/relatorio-2026/RELATORIO.md (dias de show)
    metrics: [
      { value: "2.687", label: "leituras nos dias de show" },
      { value: "578", label: "conversas no Papo que Protege" },
      { value: "78,3%", label: "das leituras abertas no celular" },
    ],
  },
  {
    slug: "studio-tycoon",
    name: "Studio Tycoon",
    tagline: "EPES Challenge 2026.",
    description:
      "Simulador em que cada turma administra um estúdio de games: rodadas diárias, ligas, telão ao vivo e uma revelação transmitida online.",
    owner: "Para Casa Brasil · EPES",
    category: "Jogos educacionais",
    // docs/relatorio/dados_final.json (31/08/2026) e abertura_cerimonia.md
    status: { kind: "realizado", label: "Realizado · 22 a 31/ago/2026" },
    icon: {
      src: "/apps/icons/studio-tycoon.webp",
      width: 512,
      height: 512,
      alt: "Ícone do Studio Tycoon",
    },
    platforms: ["Web", "Telão"],
    links: [],
    metrics: [
      { value: "39", label: "turmas" },
      { value: "3", label: "ligas" },
      { value: "351", label: "decisões" },
    ],
  },
  {
    slug: "breaking-codes",
    name: "Breaking Codes 26",
    tagline: "15 fases, um código secreto por equipe.",
    description:
      "Jogo de desafios em equipe com lógica, programação, inglês técnico, empreendedorismo e ODS, ranking Hall da Fama ao vivo e XP creditado no Cognita.",
    owner: "Para Casa Brasil · EPES",
    category: "Jogos educacionais",
    // evento RtG14LzuO7plbOYKWvKU encerrado (25 a 27/06/2026); respostas no projeto breakingcodes-6a973
    status: { kind: "realizado", label: "Realizado · jun/2026" },
    icon: {
      src: "/apps/icons/breaking-codes.webp",
      width: 512,
      height: 512,
      alt: "Ícone do Breaking Codes 26",
    },
    platforms: ["Web"],
    links: [],
    metrics: [
      { value: "39", label: "equipes" },
      { value: "15", label: "fases concluídas por todas" },
    ],
  },
  {
    slug: "lineup-battle",
    name: "Lineup Battle",
    tagline: "O universo colecionável dos festivais.",
    description:
      "Álbum de figurinhas de festival com duelos, trocas, ranking e uma estante que acumula eventos.",
    owner: "Produto Tingle",
    category: "Jogos",
    // lineupbattle.vercel.app HTTP 200 (vertical slice)
    status: { kind: "desenvolvimento", label: "Protótipo jogável no ar" },
    icon: {
      src: "/apps/icons/lineup-battle.webp",
      width: 512,
      height: 512,
      alt: "Ícone do Lineup Battle",
    },
    platforms: ["Web"],
    links: [{ label: "Ver protótipo", href: "https://lineupbattle.vercel.app" }],
  },
  {
    slug: "coronel",
    name: "Site Coronel Chrisóstomo",
    tagline: "Portal institucional de mandato.",
    description:
      "Site institucional em Next.js com CMS próprio e as 222 notícias migradas do WordPress.",
    owner: "Para gabinete parlamentar",
    category: "Sites",
    // coronelchrisostomo.com.br servido pela Vercel, HTTP 200
    status: { kind: "publicado", label: "No ar" },
    icon: {
      src: "/apps/icons/coronel.webp",
      width: 512,
      height: 512,
      alt: "Ícone do Site Coronel Chrisóstomo",
      // Original WebP loads correctly; runtime WebP re-encoding stalls for this asset.
      unoptimized: true,
    },
    platforms: ["Web"],
    links: [
      { label: "coronelchrisostomo.com.br", href: "https://coronelchrisostomo.com.br" },
    ],
  },
  {
    slug: "vesti",
    name: "Vesti",
    tagline: "O sistema operacional do seu estilo.",
    description:
      "Assistente de guarda-roupa com IA: cataloga as peças, monta looks por ocasião, avalia se vale comprar, organiza a mala e sugere tamanhos.",
    owner: "Produto Tingle",
    category: "Moda e IA",
    // ASC: build 12 VALID, só grupo interno; versão 1.0 PREPARE_FOR_SUBMISSION
    status: { kind: "teste", label: "Em teste fechado" },
    icon: {
      src: "/apps/icons/vesti.webp",
      width: 512,
      height: 512,
      alt: "Ícone do Vesti",
    },
    platforms: ["iOS", "Android"],
    links: [],
  },
  {
    slug: "prime",
    name: "Prime Healthcare",
    tagline: "Operação para clínicas premium.",
    description:
      "Plataforma multi-clínica com app da equipe clínica, app do paciente e a assistente de IA Íris.",
    owner: "Produto Tingle",
    category: "Saúde",
    // ASC: build 2 VALID (TestFlight); ambiente de produção ainda não publicado
    status: { kind: "teste", label: "Em teste fechado" },
    icon: {
      src: "/apps/icons/prime.webp",
      width: 512,
      height: 512,
      alt: "Ícone do Prime Healthcare",
    },
    platforms: ["iOS", "Web"],
    links: [],
  },
  {
    slug: "dreamphi",
    name: "DreamPhi",
    tagline: "Incubação de sonhos.",
    description:
      "App iOS que usa reativação de memória durante o sono REM, conversa por voz com IA e diário de sonhos.",
    owner: "Produto Tingle",
    category: "Bem-estar",
    // ASC: builds 35 a 37 VALID (TestFlight); não publicado
    status: { kind: "teste", label: "Em teste fechado" },
    icon: {
      src: "/apps/icons/dreamphi.webp",
      width: 512,
      height: 512,
      alt: "Ícone do DreamPhi",
    },
    platforms: ["iOS"],
    links: [],
  },
];

/** Faixa de validação: logos reais, exibidos em uma cor só (o componente aplica o tom do tema). */
export const validationLogos: (AppImage & { name: string })[] = [
  {
    name: "Rock World",
    src: "/apps/logos/rock-world.webp",
    width: 589,
    height: 150,
    alt: "Rock World",
  },
  {
    name: "Rock in Rio",
    src: "/apps/logos/rock-in-rio.webp",
    width: 600,
    height: 232,
    alt: "Rock in Rio",
  },
  {
    name: "Casa Brasil",
    src: "/apps/logos/casa-brasil.webp",
    width: 276,
    height: 114,
    alt: "Casa Brasil",
  },
  {
    name: "Educa Brasis",
    src: "/apps/logos/educa-brasis.webp",
    width: 600,
    height: 437,
    alt: "Educa Brasis",
  },
];
