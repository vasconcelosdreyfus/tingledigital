import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/home-hero";
import { homeData } from "@/content/data/home";

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
    <>
      <HomeHero {...homeData.hero} />
      {/* Other sections come back after we validate the new visual */}
    </>
  );
}
