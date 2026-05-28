export type CasePillar = "produtos" | "social" | "utilities" | "marketing";

export interface CasePreview {
  slug: string;
  client: string;
  title: string;
  excerpt: string;
  heroImageUrl: string;
  pillar: CasePillar;
  resultLabel: string;
  resultValue: string;
}
