import type { ProductPageData } from "@/types/product";

export const eter: ProductPageData = {
  pillar: "eter",
  heroEyebrow: "Eter · Mensageiro privado",
  heroTitle: "Conversas que ninguém mais ouve.",
  heroSubtitle:
    "Mensageiro com privacidade radical. WhatsApp na facilidade, Signal Protocol na profundidade. Para jornalistas, advogados, executivos e qualquer um que entende o valor de comunicação verdadeiramente privada.",
  heroCtaLabel: "Saber mais",
  heroCtaHref: "/contato?produto=eter",
  mockupImageUrl: "/brand/mockup-eter.png",
  problemEyebrow: "O problema",
  problemTitle: "Mensageiros gratuitos vendem você.",
  problemBody:
    "WhatsApp coleta metadados, Telegram não é E2E por padrão, e \"gratuito\" sempre tem um custo invisível. O Eter foi construído para quem não está disposto a pagar com a própria privacidade.",
  problemStat: { value: "0", label: "metadados retidos · zero logs de conversa" },
  solutionEyebrow: "O que muda",
  solutionTitle: "Privacidade absoluta. Sem comprometer a experiência.",
  features: [
    {
      title: "Criptografia ponta-a-ponta",
      description:
        "Signal Protocol auditado. Chaves geradas no dispositivo, armazenadas em enclave de hardware quando disponível.",
      iconName: "lock",
    },
    {
      title: "Sem metadados retidos",
      description:
        "Quem fala com quem, quando e por quanto tempo — nada disso vira histórico no servidor.",
      iconName: "shield",
    },
    {
      title: "Familiar como WhatsApp",
      description:
        "Navegação, bolhas, contatos — superfície que você já conhece. Curva de aprendizado zero.",
      iconName: "messageSquare",
    },
    {
      title: "Detalhes de luxo silencioso",
      description:
        "Micro-interações polidas, espaçamento generoso. A diferença entre \"funciona\" e \"encanta\" está nos detalhes.",
      iconName: "sparkles",
    },
    {
      title: "Efemeridade por design",
      description:
        "Mensagens expiram automaticamente. Servidor descarta cópia em segundos após entrega.",
      iconName: "circuit",
    },
    {
      title: "Resistente por construção",
      description:
        "Quando entregamos dados sob ordem judicial, entregamos o que tecnicamente temos: muito pouco. Por design.",
      iconName: "shield",
    },
  ],
  demoEyebrow: "Como protege",
  demoTitle: "Três camadas de defesa, do dispositivo ao destino.",
  demoSteps: [
    {
      title: "No dispositivo",
      description:
        "Chaves geradas localmente, armazenadas em enclave de hardware. Bloqueio biométrico opcional.",
      imageUrl: "/brand/eter-device.png",
    },
    {
      title: "No transporte",
      description:
        "Mensagens criptografadas antes de saírem do aparelho. Servidor é mero relay — não consegue ler conteúdo.",
      imageUrl: "/brand/eter-transport.png",
    },
    {
      title: "No destino",
      description:
        "Decifradas apenas no aparelho do destinatário, validadas por par de chaves. Cópia no servidor é descartada em segundos.",
      imageUrl: "/brand/eter-destination.png",
    },
  ],
  cases: [],
  finalCtaTitle: "Pronto para conversar em paz?",
  finalCtaBody:
    "Em construção, com lançamento previsto para 2026. Cadastre-se para acompanhar e participar do beta privado.",
};
