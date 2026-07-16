import ProjectsList from "@components/ProjectsList";
import SectionHeader from "@components/SectionHeader";

const Projects = () => {
  return (
    <section className="site-section">
      <SectionHeader
        title="Projects"
        description="A selection of product and client work I’ve shipped."
      />
      <ProjectsList />
    </section>
  );
};

export default Projects;
