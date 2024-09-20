import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";
import ProjectsList from "@components/ProjectsList";

const ProjectsBox = () => {
  return (
    <section>
      <SectionHeader
        icon={"projects"}
        title={"Projects"}
        description={"Some of the great work i did"}
        buttonLink={"/projects"}
        buttonName={"All projects"}
      />
      <ProjectsList limit={4}/>
      {/*<Link href={"/projects"} className="underline flex justify-center py-4">*/}
      {/*  See all projects{" "}*/}
      {/*  <img src="/assets/ext-link.svg" alt="" className="ext-link-icon" />*/}
      {/*</Link>*/}
    </section>
  );
};

export default ProjectsBox;
