export type AppStatusKind = "publicado" | "teste" | "realizado" | "desenvolvimento";

export interface AppImage {
  src: string;
  width: number;
  height: number;
  alt: string;
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
  /** "Produto Tingle" ou "Para <cliente>" */
  owner: string;
  category: string;
  status: { kind: AppStatusKind; label: string };
  platforms: string[];
  links: { label: string; href: string }[];
  /** Ícone ou logo quadrado/horizontal da aplicação. */
  logo?: AppImage;
  /** Telas reais: a primeira é a capa. */
  images: AppImage[];
  metrics?: AppMetric[];
  /** Aviso obrigatório a exibir junto (ex.: legislação eleitoral). */
  notice?: string;
  featured?: boolean;
}
