import ProjectsList from "@components/ProjectsList";
import ProfileSummary from "@components/ProfileSummary";
import SectionHeader from "@components/SectionHeader";
import { getTranslations, setRequestLocale } from "next-intl/server";

const Projects = async ({ params }) => {
  setRequestLocale(params.locale);
  const t = await getTranslations("Projects");

  return (
    <>
      <ProfileSummary />
      <section className="site-section">
        <SectionHeader
          title={t("title")}
          description={t("pageDescription")}
        />
        <ProjectsList />
      </section>
    </>
  );
};

export default Projects;
