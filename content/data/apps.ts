import type { AppEntry, AppImage } from "@/types/app";

/**
 * Fonte única das aplicações exibidas no site.
 * Status e números conferidos em 25/09/2026; a origem de cada número está no comentário ao lado.
 * Imagens: telas reais (lojas, capturas de produção ou materiais do próprio projeto), sem rostos de pessoas.
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
    platforms: ["iOS", "Android", "macOS (beta)"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/br/app/eter/id6759132602" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.eter.eter" },
      { label: "eter.social", href: "https://eter.social" },
    ],
    logo: { src: "/apps/eter/icone.webp", width: 512, height: 512, alt: "Ícone do Eter" },
    images: [
      { src: "/apps/eter/chat.webp", width: 660, height: 1428, alt: "Tela de conversa do Eter com mensagens que se dissipam" },
      { src: "/apps/eter/seguranca.webp", width: 660, height: 1428, alt: "Tela de segurança do Eter" },
      { src: "/apps/eter/chamada.webp", width: 660, height: 1428, alt: "Chamada cifrada no Eter" },
      { src: "/apps/eter/circulo.webp", width: 660, height: 1428, alt: "Círculo interno do Eter" },
    ],
    featured: true,
  },
  {
    slug: "the-candidate",
    name: "The Candidate",
    tagline: "Do zero ao Planalto.",
    description:
      "Simulador de campanha presidencial brasileira para celular: escolha o partido, monte o plano de governo e dispute 35 dias de campanha contra 9 adversários até a apuração.",
    owner: "Produto Tingle",
    category: "Jogos",
    // Google Play com.bevoted.thecandidate (HTTP 200, atualizado 18/09/2026); iOS 1.2.2 WAITING_FOR_REVIEW (ASC API)
    status: { kind: "publicado", label: "No Google Play · iOS em análise da Apple" },
    platforms: ["Android", "iOS (em análise)"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.bevoted.thecandidate" },
      { label: "thecandidate.app", href: "https://thecandidate.app" },
    ],
    logo: { src: "/apps/the-candidate/icone.webp", width: 512, height: 512, alt: "Ícone do The Candidate" },
    images: [
      { src: "/apps/the-candidate/qg.webp", width: 660, height: 1434, alt: "QG de campanha do The Candidate com o mapa do Brasil" },
      { src: "/apps/the-candidate/comicio.webp", width: 660, height: 1434, alt: "Minigame de comício do The Candidate" },
      { src: "/apps/the-candidate/jornal.webp", width: 660, height: 1434, alt: "Jornal O Palanque dentro do jogo" },
      { src: "/apps/the-candidate/abertura.webp", width: 660, height: 1434, alt: "Tela de abertura: Quer ser presidente?" },
    ],
    // meta description do site e descrição da loja
    metrics: [
      { value: "35", label: "dias de campanha" },
      { value: "30", label: "partidos" },
      { value: "9", label: "adversários" },
    ],
    featured: true,
  },
  {
    slug: "cognita",
    name: "Cognita",
    tagline: "Gestão educacional e de projetos sociais.",
    description:
      "Plataforma multi-cliente para alunos, turmas, frequência, aulas, gamificação, eventos, pesquisas e prestação de contas. Construída com a Casa Brasil para a EPES.",
    owner: "Produto Tingle",
    category: "Educação e gestão social",
    // cognita.tingledigital.com HTTP 200; coleção projetos em produção: EPES, Tropa do Esporte, Educa Brasis, Rede Vida Animal Brasil, Casa Tech
    status: { kind: "publicado", label: "No ar · web" },
    platforms: ["Web"],
    links: [{ label: "cognita.tingledigital.com", href: "https://cognita.tingledigital.com" }],
    logo: { src: "/apps/cognita/logo.webp", width: 512, height: 512, alt: "Logo do Cognita" },
    images: [
      { src: "/apps/cognita/epes-publico.webp", width: 1600, height: 1342, alt: "Página pública da EPES no Cognita com inscrições abertas" },
      { src: "/apps/cognita/login.webp", width: 1600, height: 1000, alt: "Entrada do Cognita com os projetos que usam a plataforma" },
    ],
    metrics: [{ value: "5", label: "organizações usando" }],
    featured: true,
  },
  {
    slug: "cognita-pesquisa",
    name: "Cognita Pesquisa",
    tagline: "Pesquisa de campo em grandes festivais.",
    description:
      "App das equipes de pesquisadores que aplicam questionários presencialmente, com metas por equipe, mapa, QR e ranking. Operado para a Educa Brasis nas pesquisas de diversidade dos festivais.",
    owner: "Para Educa Brasis",
    category: "Pesquisa e dados",
    // TestFlight aTP8smZc aberto; ASC build 2026090601 VALID; Firebase App Distribution 1.0.3 (06/09/2026)
    status: { kind: "teste", label: "Em uso em beta (TestFlight e Android)" },
    platforms: ["iOS (beta)", "Android (beta)"],
    links: [],
    logo: { src: "/apps/cognita-pesquisa/icone.webp", width: 512, height: 512, alt: "Ícone do Cognita Pesquisa" },
    images: [{ src: "/apps/leitura-delas/telao.webp", width: 1600, height: 900, alt: "Telão do Espaço Plural com as 11.632 respostas da pesquisa no Rock in Rio 2026" }],
    // runAggregationQuery em projetos/kMkuKf3QYPx5He4gL0hA/respostasPesquisas, 25/09/2026
    metrics: [
      { value: "11.632", label: "respostas no Rock in Rio 2026" },
      { value: "6.683", label: "respostas no Lollapalooza 2026" },
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
    // Google Play br.org.sentinelas.sentinelas (HTTP 200, atualizado 03/09/2026); iOS 1.0.0 WAITING_FOR_REVIEW (ASC API)
    status: { kind: "publicado", label: "No Google Play · iOS em análise da Apple" },
    platforms: ["Android", "iOS (em análise)"],
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=br.org.sentinelas.sentinelas" }],
    logo: { src: "/apps/sentinelas/icone.webp", width: 512, height: 512, alt: "Ícone do Sentinelas da Guanabara" },
    images: [
      { src: "/apps/sentinelas/baia.webp", width: 660, height: 1434, alt: "Boto Tito na baía, tela principal do Sentinelas" },
      { src: "/apps/sentinelas/praias.webp", width: 660, height: 1434, alt: "Balneabilidade das praias no Sentinelas" },
      { src: "/apps/sentinelas/aprender.webp", width: 660, height: 1434, alt: "Trilhas de aprendizado no Sentinelas" },
      { src: "/apps/sentinelas/bestiario.webp", width: 660, height: 1434, alt: "Bestiário de espécies da Guanabara" },
    ],
    featured: true,
  },
  {
    slug: "votia",
    name: "VotIA",
    tagline: "Projeções eleitorais 2026 com IA.",
    description:
      "Projeções estatísticas para presidente, governadores e senadores, atualizadas todo dia a partir das pesquisas registradas, com a própria taxa de acerto publicada.",
    owner: "Produto Tingle",
    category: "Dados e IA",
    // votia.live HTTP 200, corte de 24/09/2026
    status: { kind: "publicado", label: "No ar · atualizado diariamente" },
    platforms: ["Web"],
    links: [{ label: "votia.live", href: "https://votia.live" }],
    images: [{ src: "/apps/votia/og.webp", width: 1200, height: 630, alt: "VotIA: projeções eleitorais 2026 com IA" }],
    notice: "Projeção estatística, não é pesquisa eleitoral (Lei nº 9.504/97, art. 33). VotIA · votia.live",
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
    platforms: ["Totem", "Celular", "Telão"],
    links: [],
    images: [
      { src: "/apps/leitura-delas/telao.webp", width: 1600, height: 900, alt: "Telão ao vivo do Leitura Delas no Espaço Plural" },
      { src: "/apps/leitura-delas/arquetipo.webp", width: 660, height: 1430, alt: "Leitura pessoal no celular: A Cultivadora" },
      { src: "/apps/leitura-delas/totem.webp", width: 660, height: 1173, alt: "Totem do Leitura Delas: descubra quem você é no palco da vida" },
      { src: "/apps/leitura-delas/papo.webp", width: 660, height: 1173, alt: "Totem do Papo que Protege" },
    ],
    // ~/dev/RWD/docs/rockworld/relatorio-2026/RELATORIO.md (dias de show)
    metrics: [
      { value: "2.687", label: "leituras nos dias de show" },
      { value: "578", label: "conversas no Papo que Protege" },
      { value: "78,3%", label: "das leituras abertas no celular" },
    ],
    featured: true,
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
    platforms: ["Web", "Telão"],
    links: [],
    images: [
      { src: "/apps/studio-tycoon/mesa.webp", width: 1200, height: 820, alt: "Mesa de produção do Studio Tycoon" },
      { src: "/apps/studio-tycoon/corrida.webp", width: 1200, height: 844, alt: "Corrida dos estúdios no telão" },
      { src: "/apps/studio-tycoon/lobby.webp", width: 1200, height: 703, alt: "Pré-temporada do Studio Tycoon" },
    ],
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
    platforms: ["Web"],
    links: [],
    images: [
      { src: "/apps/breaking-codes/desktop.webp", width: 1600, height: 1000, alt: "Briefing do Breaking Codes 26" },
      { src: "/apps/breaking-codes/mobile.webp", width: 660, height: 1428, alt: "Breaking Codes 26 no celular" },
    ],
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
    platforms: ["Web"],
    links: [{ label: "Ver protótipo", href: "https://lineupbattle.vercel.app" }],
    images: [
      { src: "/apps/lineup-battle/elenco.webp", width: 1536, height: 1024, alt: "Elenco de personagens do Lineup Battle" },
      { src: "/apps/lineup-battle/home.webp", width: 660, height: 1428, alt: "Entrada do Lineup Battle" },
      { src: "/apps/lineup-battle/album.webp", width: 660, height: 1428, alt: "Álbum do Lineup Battle" },
    ],
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
    platforms: ["Web"],
    links: [{ label: "coronelchrisostomo.com.br", href: "https://coronelchrisostomo.com.br" }],
    images: [{ src: "/apps/coronel/site.webp", width: 1600, height: 1000, alt: "Página inicial do site do Coronel Chrisóstomo" }],
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
    platforms: ["iOS", "Android"],
    links: [],
    logo: { src: "/apps/vesti/icone.webp", width: 512, height: 512, alt: "Ícone do Vesti" },
    images: [],
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
    platforms: ["iOS", "Web"],
    links: [],
    logo: { src: "/apps/prime/simbolo.webp", width: 512, height: 512, alt: "Símbolo da Prime Healthcare" },
    images: [{ src: "/apps/prime/portal.webp", width: 1600, height: 1000, alt: "Portal do paciente da Prime Healthcare" }],
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
    platforms: ["iOS"],
    links: [],
    logo: { src: "/apps/dreamphi/icone.webp", width: 512, height: 512, alt: "Ícone do DreamPhi" },
    images: [],
  },
];

/** Faixa de validação: logos reais, exibidos em uma cor só (o componente aplica o tom do tema). */
export const validationLogos: (AppImage & { name: string })[] = [
  { name: "Rock World", src: "/apps/logos/rock-world.webp", width: 589, height: 150, alt: "Rock World" },
  { name: "Rock in Rio", src: "/apps/logos/rock-in-rio.webp", width: 600, height: 232, alt: "Rock in Rio" },
  { name: "Casa Brasil", src: "/apps/logos/casa-brasil.webp", width: 276, height: 114, alt: "Casa Brasil" },
  { name: "Educa Brasis", src: "/apps/logos/educa-brasis.webp", width: 600, height: 437, alt: "Educa Brasis" },
];
