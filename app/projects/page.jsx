import React from "react";
import ProjectsList from "@components/ProjectsList";
import SectionHeader from "@components/SectionHeader";

const Projects = () => {
  return (
    <section className="glassmorphism">

        <SectionHeader
            icon={"projects"}
            title={"Projects"}
            description={"Some of the great work i did"}
            // buttonLink={"/projects"}
            // buttonName={"See Everything"}
        />
      <ProjectsList/>
    </section>
  );
};

export default Projects;
