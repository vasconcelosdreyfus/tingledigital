import type { Testimonial } from "./testimonial";

export type ServicePillar = "consultoria" | "utilities";

export interface MethodStep {
  number: number;
  title: string;
  description: string;
}

export interface ServiceTopic {
  title: string;
  description: string;
  iconName: string;
}

export interface ServicePageData {
  pillar: ServicePillar;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  methodEyebrow: string;
  methodTitle: string;
  methodSteps: MethodStep[];
  spotlightEyebrow: string;
  spotlightTitle: string;
  spotlightBody: string;
  spotlightImage?: { src: string; alt: string; width: number; height: number };
  spotlightPhoto?: { src: string; creditHref: string; kind: "qbanho" | "circuito" };
  spotlightPartners?: { name: string; role: string }[];
  spotlightStats: { value: string; label: string }[];
  topicsEyebrow: string;
  topicsTitle: string;
  topics: ServiceTopic[];
  testimonials: Testimonial[];
  finalCtaTitle: string;
  finalCtaBody: string;
}
