import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const skills = [
  {
    id: 1,
    name: "ReactJS",
    icon: "react",
  },
  {
    id: 2,
    name: "NextJS",
    icon: "next",
  },
  {
    id: 3,
    name: "Tailwind",
    icon: "tailwind",
  },
  {
    id: 3,
    name: "Bootstrap",
    icon: "bootstrap",
  },
  {
    id: 4,
    name: "SASS",
    icon: "sass",
  },
  {
    id: 5,
    name: "Laravel",
    icon: "laravel",
  },
  {
    id: 6,
    name: "React Native",
    icon: "react",
  },
  {
    id: 7,
    name: "MySQL",
    icon: "mysql",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "mongo",
  },
  {
    id: 9,
    name: "NodeJS",
    icon: "node",
  },
  {
    id: 10,
    name: "WordPress",
    icon: "wordpress",
  },
  {
    id: 11,
    name: "Angular",
    icon: "angular",
  },
  {
    id: 12,
    name: "npm",
    icon: "npm",
  },
];

const TechList = () => {
  return (
    <section>
      <SectionHeader
        icon={"technos"}
        title={"Tech Stack"}
        description={"Technologies I worked with"}
      />
      <div className="flex gap-3 flex-wrap">
        {skills.map((skill) => {
          return (
            <span className="tools" key={skill.id}>
              <Image
                src={`/assets/tools/${skill.icon}.svg`}
                width={25}
                height={25}
                alt={skill.icon}
              />
              <span className="tool-name">{skill.name}</span>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default TechList;
