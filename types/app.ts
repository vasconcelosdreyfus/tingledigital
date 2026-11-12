export type AppStatusKind = "publicado" | "teste" | "realizado" | "desenvolvimento";

export interface AppImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Asset already optimized, served directly when runtime conversion is unsuitable. */
  unoptimized?: boolean;
}

export interface AppMetric {
  value: string;
  label: string;
}

export interface AppEntry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  descriptionEn?: string;
  /** "Produto Tingle" ou "Para <cliente>" */
  owner: string;
  category: string;
  status: { kind: AppStatusKind; label: string; labelEn?: string };
  platforms: string[];
  links: { label: string; href: string }[];
  /** Ícone oficial, quadrado 512×512. É a única imagem da aplicação no site. */
  icon: AppImage;
  /** Página de apresentação da aplicação: interna ou site próprio. */
  page?: string;
  metrics?: AppMetric[];
  /** Proposta de valor para a vitrine, quando uma métrica não representa a entrega. */
  highlight?: string;
  /** Aviso obrigatório a exibir junto (ex.: legislação eleitoral). */
  notice?: string;
}
