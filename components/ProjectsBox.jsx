import SectionHeader from "./SectionHeader";
import ProjectsList from "@components/ProjectsList";

const ProjectsBox = () => {
  return (
    <section>
      <SectionHeader
        title="Projects"
        description="Selected work across product and client sites."
        buttonLink="/projects"
        buttonName="All projects"
      />
      <ProjectsList limit={4} />
    </section>
  );
};

export default ProjectsBox;
