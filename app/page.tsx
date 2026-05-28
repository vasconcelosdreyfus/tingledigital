import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeNumbers } from "@/components/sections/home/home-numbers";
import { HomePillars } from "@/components/sections/home/home-pillars";
import { HomeProductSpotlight } from "@/components/sections/home/home-product-spotlight";
import { HomeCasesPreview } from "@/components/sections/home/home-cases-preview";
import { HomeManifesto } from "@/components/sections/home/home-manifesto";
import { HomeLogos } from "@/components/sections/home/home-logos";
import { CtaSection } from "@/components/shared/cta-section";
import { homeData } from "@/content/data/home";

function FloatingStickers() {
  return (
    <>
      {/* Sticker 1 — between Hero and Numbers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[85vh] z-20 hidden lg:block"
      >
        <div className="rounded-full border border-[#FF2D75]/40 bg-[#0a0a0f]/80 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FF2D75] rotate-[8deg] shadow-[0_0_24px_-8px_rgba(255,45,117,0.5)]">
          ★ Bold + Kinetic
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  description: homeData.hero.subtitle,
  openGraph: {
    title: "Tingle Digital — Tecnologia com alma criativa",
    description: homeData.hero.subtitle,
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative">
      <FloatingStickers />
      <HomeHero {...homeData.hero} />
      <HomeNumbers items={homeData.numbers.items} />
      <span id="produtos" className="sr-only">
        Produtos
      </span>
      <HomePillars
        eyebrow={homeData.pillars.eyebrow}
        title={homeData.pillars.title}
        pillars={homeData.pillars.items}
      />
      <HomeProductSpotlight
        eyebrow={homeData.productSpotlight.eyebrow}
        title={homeData.productSpotlight.title}
        products={homeData.productSpotlight.products}
      />
      <HomeCasesPreview
        eyebrow={homeData.cases.eyebrow}
        title={homeData.cases.title}
        cases={homeData.cases.items}
      />
      <HomeManifesto {...homeData.manifesto} />
      <HomeLogos eyebrow={homeData.logos.eyebrow} clients={homeData.logos.clients} />
      <CtaSection
        title={homeData.finalCta.title}
        body={homeData.finalCta.body}
        primaryCta={homeData.finalCta.primaryCta}
        secondaryCta={homeData.finalCta.secondaryCta}
        tone="accent-yellow"
      />
    </div>
  );
}
