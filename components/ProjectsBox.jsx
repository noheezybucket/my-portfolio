import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Ndoura Traiteur",
    description: "Ma Description",
    link: "https://google.com",
    tools: [
      { id: 1, name: "React", icon: "icon" },
      { id: 2, name: "Node", icon: "icon" },
    ],
  },
  {
    id: 2,
    title: "Africa Car Group",
    description: "Ma Description",
    link: "https://google.com",
    tools: [
      { id: 1, name: "React", icon: "icon" },
      { id: 2, name: "Node", icon: "icon" },
    ],
  },
];

const ProjectsBox = () => {
  return (
    <section>
      <SectionHeader
        icon={"icon"}
        title={"Projects"}
        description={"I will describe my projects here"}
        buttonLink={"/projects"}
        buttonName={"See Everything"}
      />
      <hr /> <br />
      <div className="flex flex-col gap-5">
        {projects.map((project) => {
          return (
            <div className="flex gap-5 border border-white border-opacity-20 rounded-xl ">
              <Image
                src={"/assets/me.jpg"}
                width={300}
                height={200}
                className="object-cover rounded-xl"
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
                        <span>{tool.name}</span>
                      </span>
                    );
                  })}
                  <button className="btn-primary">See the project</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsBox;
