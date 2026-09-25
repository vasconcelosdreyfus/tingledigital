import type { ProductPageData } from "@/types/product";
import { apps } from "@/content/data/apps";

// Link da loja vem de content/data/apps.ts (fonte única, conferido em 25/09/2026).
const appStore = apps.find((a) => a.slug === "eter")?.links.find((l) => l.label === "App Store");

export const eter: ProductPageData = {
  pillar: "eter",
  heroEyebrow: "Eter · Mensageiro privado",
  heroTitle: "Conversas que ninguém mais ouve.",
  heroSubtitle:
    "Mensageiro privado publicado na App Store e no Google Play. Criptografia ponta a ponta com Signal Protocol, cadastro só por username (sem telefone, sem e-mail), mensagens que se dissipam e chamadas cifradas.",
  heroCtaLabel: appStore ? "Baixar na App Store" : "Saber mais",
  heroCtaHref: appStore?.href ?? "/contato?produto=eter",
  // Telas reais registradas em content/data/apps.ts (largura e altura vêm de lá).
  problemEyebrow: "O problema",
  problemTitle: "Mensageiros gratuitos vendem você.",
  problemBody:
    "WhatsApp coleta metadados, Telegram não é E2E por padrão, e \"gratuito\" sempre tem um custo invisível. O Eter foi construído para quem não está disposto a pagar com a própria privacidade.",
  problemStat: { value: "0", label: "telefones ou e-mails pedidos no cadastro: só um username" },
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
    },
    {
      title: "No transporte",
      description:
        "Mensagens e chamadas cifradas antes de saírem do aparelho. O servidor só repassa e não consegue ler o conteúdo.",
    },
    {
      title: "No destino",
      description:
        "Decifradas apenas no aparelho de quem você escolheu, validadas por par de chaves. Você decide quem entra no seu círculo.",
    },
  ],
  cases: [],
  finalCtaTitle: "Pronto para conversar em paz?",
  finalCtaBody:
    "Já disponível na App Store e no Google Play. Baixe, escolha um username e comece a conversar.",
};
