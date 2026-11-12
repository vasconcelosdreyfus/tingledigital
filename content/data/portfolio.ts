import { apps } from "./apps";
import { serviceCases } from "./service-cases";
import type { AppEntry } from "@/types/app";

// Complementary partitions keep every catalog entry visible exactly once.
const isDigitalExperience = (app: AppEntry) =>
  app.status.kind === "realizado" || app.category === "Sites";

export const portfolio = {
  products: apps.filter((app) => !isDigitalExperience(app)),
  experiences: apps.filter(isDigitalExperience),
  energy: serviceCases.filter((project) => project.pillar === "utilities"),
  culture: serviceCases.filter((project) => project.pillar === "consultoria"),
};
