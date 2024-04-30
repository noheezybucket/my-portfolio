import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "RRTACU",
    description: "",
    image: "rrtacu.png",
    link: "https://rrtacu.com",
    tools: [{ id: 1, name: "WordPress", icon: "wordpress" }],
  },
  {
    id: 2,
    title: "Ndoura Traiteur",
    description: "",
    image: "ndoura.png",
    link: "https://ndouratraiteur.com",
    tools: [
      { id: 1, name: "WordPress", icon: "wordpress" },
      { id: 2, name: "Elementor", icon: "elementor" },
    ],
  },
];

const ProjectsBox = () => {
  return (
    <section>
      <SectionHeader
        icon={"projects"}
        title={"Projects"}
        description={"I will describe my projects here"}
        // buttonLink={"/projects"}
        // buttonName={"See Everything"}
      />
      <div className="gap-5 border-op p-2">
        {projects.map((project) => {
          return (
            <>
              <Link
                href={project.link}
                className="flex  gap-5 rounded-xl hover:translate-x-2 duration-200"
                key={project.id}
              >
                <div className="w-4/12">
                  <img
                    src={`/assets/${project.image}`}
                    className="object-cover rounded-xl border border-white border-opacity-20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                  <div className="flex gap-3 flex-wrap">
                    {project.tools.map((tool) => {
                      return (
                        <span key={tool.id} className="tools">
                          <Image
                            src={`/assets/tools/${tool.icon}.svg`}
                            width={25}
                            height={25}
                            alt="me"
                          />
                          <span className="tool-name">{tool.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Link>
              {projects.length != project.id && <hr className="my-5" />}
            </>
          );
        })}
      </div>
      <Link href={"/projects"} className="btn-primary">
        See all projects
      </Link>
    </section>
  );
};

export default ProjectsBox;
