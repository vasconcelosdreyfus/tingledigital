import { getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { apps } from "@/content/data/apps";
import { ProjectExplorer } from "@/components/sections/home/project-explorer";

export async function HomeAppsLive() {
  const t = await getTranslations("immersive");
  const live = apps
    .filter((app) => app.status.kind === "publicado" || app.status.kind === "realizado")
    .slice(0, 8);
  return (
    <section id="produtos" className="studio-projects" aria-labelledby="projects-title">
      <Container size="xl">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / {t("projectsLabel")}</p>
            <h2 id="projects-title">{t("projectsTitle")}</h2>
          </div>
          <p>{t("projectsBody")}</p>
        </div>
        <ProjectExplorer apps={live} />
      </Container>
    </section>
  );
}
