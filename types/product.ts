import type { CasePreview } from "./case";
import type { Testimonial } from "./testimonial";

export type ProductPillar = "cognita" | "eter";

export interface ProductFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface ProductPageData {
  pillar: ProductPillar;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  mockupImageUrl: string;
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  problemStat: { value: string; label: string };
  solutionEyebrow: string;
  solutionTitle: string;
  features: ProductFeature[];
  demoEyebrow: string;
  demoTitle: string;
  demoSteps: { title: string; description: string; imageUrl: string }[];
  cases: CasePreview[];
  testimonial?: Testimonial;
  finalCtaTitle: string;
  finalCtaBody: string;
}
