import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "RRTACU",
    description: "Ma Description",
    image: "rrtacu.png",
    link: "https://rrtacu.com",
    tools: [
      { id: 1, name: "WordPress", icon: "icon" },
      { id: 2, name: "Astra", icon: "icon" },
      { id: 3, name: "Elementor", icon: "icon" },
    ],
  },
  {
    id: 2,
    title: "Ndoura Traiteur",
    description: "Ma Description",
    image: "ndoura.png",
    link: "https://ndouratraiteur.com",
    tools: [
      { id: 1, name: "WordPress", icon: "icon" },
      { id: 2, name: "Elementor", icon: "icon" },
    ],
  },
  {
    id: 2,
    title: "Africa Car Group",
    description: "Ma Description",
    image: "def-img.svg",
    link: "https://africacorpgroup.com",
    tools: [
      { id: 1, name: "WordPress", icon: "icon" },
      { id: 2, name: "Elementor", icon: "icon" },
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
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project) => {
          return (
            <Link
              href={project.link}
              className="flex flex-col  gap-5 border border-white border-opacity-20 rounded-xl p-2"
              key={project.id}
            >
              <img
                src={`/assets/${project.image}`}
                className="object-cover rounded-xl border border-white border-opacity-20"
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex gap-3 flex-wrap">
                  {project.tools.map((tool) => {
                    return (
                      <span
                        key={tool.id}
                        className="border border-white  rounded flex items-center px-3 p-1"
                      >
                        <Image
                          src={`/assets/${tool.icon}.svg`}
                          width={30}
                          height={30}
                          alt="me"
                          className="rounded-full object-cover"
                        />
                        <span className="text-sm">{tool.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsBox;
