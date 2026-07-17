import ProjectsList from "@components/ProjectsList";
import ProfileSummary from "@components/ProfileSummary";
import SectionHeader from "@components/SectionHeader";

const Projects = () => {
  return (
    <>
      <ProfileSummary />
      <section className="site-section">
        <SectionHeader
          title="Projects"
          description="A selection of product and client work I’ve shipped."
        />
        <ProjectsList />
      </section>
    </>
  );
};

export default Projects;
