import type { ProductPageData } from "@/types/product";

export const eter: ProductPageData = {
  pillar: "eter",
  heroEyebrow: "Eter · Mensageiro com privacidade radical",
  heroTitle: "Suas palavras. Só suas.",
  heroSubtitle:
    "Criptografia ponta-a-ponta auditável, zero metadados retidos, código aberto. Construído para quem leva privacidade a sério — jornalistas, advogados, ativistas e quem só quer paz.",
  heroCtaLabel: "Baixar Eter",
  heroCtaHref: "https://eter.app",
  mockupImageUrl: "/brand/mockup-eter.png",
  problemEyebrow: "O problema",
  problemTitle: "Mensageiros gratuitos vendem você.",
  problemBody:
    "Quase todo app de mensagem usa metadados de conversa, grafo de contatos ou conteúdo para alimentar negócios paralelos — anúncios, treino de modelos, perfis de risco. Mesmo quando dizem que não. O Eter foi feito para quem não está disposto a pagar com o próprio comportamento.",
  problemStat: { value: "0", label: "metadados retidos no servidor após entrega da mensagem" },
  solutionEyebrow: "O que muda",
  solutionTitle: "Privacidade não é feature premium. É o padrão.",
  features: [
    {
      title: "Criptografia E2E forte",
      description: "Protocolo público auditado, chaves geradas no dispositivo. Nem nós conseguimos ler o que passa.",
      iconName: "lock",
    },
    {
      title: "Sem metadados retidos",
      description: "Quem fala com quem, quando e por quanto tempo: nada disso vira histórico. Mensagem entregue = registro apagado.",
      iconName: "shield",
    },
    {
      title: "Backup que respeita você",
      description: "Local ou em nuvem que VOCÊ controla. Sem servidor central guardando cópia das suas conversas.",
      iconName: "layers",
    },
    {
      title: "Código aberto",
      description: "Cliente e protocolo publicados sob licença permissiva. Auditoria independente é não só permitida — é desejada.",
      iconName: "circuit",
    },
    {
      title: "Verificação por contato",
      description: "Chaves verificáveis por QR code ou número, para garantir que ninguém está no meio da conversa.",
      iconName: "users",
    },
    {
      title: "Resistente a ordens judiciais",
      description: "Quando entregamos dados sob ordem, entregamos o que tecnicamente temos: muito pouco. Por design.",
      iconName: "shield",
    },
  ],
  demoEyebrow: "Como protege na prática",
  demoTitle: "Três camadas de defesa, do dispositivo ao recipiente.",
  demoSteps: [
    {
      title: "No dispositivo",
      description: "Chaves geradas localmente, armazenadas em enclave de hardware quando disponível. Bloqueio biométrico opcional.",
      imageUrl: "/brand/eter-device.png",
    },
    {
      title: "No transporte",
      description: "Mensagens criptografadas antes de saírem do aparelho. Servidor é mero relay — não consegue ler conteúdo.",
      imageUrl: "/brand/eter-transport.png",
    },
    {
      title: "No destino",
      description: "Decifradas só no aparelho do destinatário, validadas por par de chaves. Cópia no servidor é descartada em segundos.",
      imageUrl: "/brand/eter-destination.png",
    },
  ],
  cases: [],
  finalCtaTitle: "Pronto para conversar em paz?",
  finalCtaBody:
    "O Eter está disponível para iOS, Android e desktop. Grátis para uso pessoal, com plano para times.",
};
