import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";

const projects = [
  // {
  //   id: 1,
  //   title: "RRTACU",
  //   description: "",
  //   image: "rrtacu.png",
  //   link: "https://rrtacu.com",
  //   tools: [{ id: 1, name: "WordPress", icon: "wordpress" }],
  // },
];

const ProjectsBox = () => {
  return (
    <section>
      <SectionHeader
        icon={"projects"}
        title={"Projects"}
        description={"Some of the great work i did"}
        // buttonLink={"/projects"}
        // buttonName={"See Everything"}
      />
      <div className="gap-5 border-op p-2">
        {projects.length < 1 && (
          <p className="text-center">Projects will be updated very soon 👏</p>
        )}
        {projects.map((project) => {
          return (
            <>
              <Link
                href={project.link}
                className="flex flex-col md:flex-row  gap-5 rounded-xl hover:translate-x-5 duration-200"
                key={project.id}
              >
                <div className="w-8/12 md:w-3/12">
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
      <Link href={"/projects"} className="underline flex justify-center py-4">
        See all projects{" "}
        <img src="/assets/ext-link.svg" alt="" className="ext-link-icon" />
      </Link>
    </section>
  );
};

export default ProjectsBox;
