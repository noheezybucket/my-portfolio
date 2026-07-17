import { getTranslations } from "next-intl/server";
import SectionHeader from "./SectionHeader";
import ProjectsList from "@components/ProjectsList";

const ProjectsBox = async () => {
  const t = await getTranslations("Projects");

  return (
    <section>
      <SectionHeader
        title={t("title")}
        description={t("homeDescription")}
        buttonLink="/projects"
        buttonName={t("allProjects")}
      />
      <ProjectsList limit={4} />
    </section>
  );
};

export default ProjectsBox;
