import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const skills = [
  {
    id: 1,
    name: "ReactJS",
    icon: "icon",
  },
  {
    id: 2,
    name: "NextJS",
    icon: "icon",
  },
  {
    id: 3,
    name: "Tailwind",
    icon: "icon",
  },
  {
    id: 3,
    name: "Bootstrap",
    icon: "icon",
  },
  {
    id: 4,
    name: "SASS",
    icon: "icon",
  },
  {
    id: 5,
    name: "Laravel",
    icon: "icon",
  },
  {
    id: 6,
    name: "React Native",
    icon: "icon",
  },
  {
    id: 7,
    name: "MySQL",
    icon: "icon",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "icon",
  },
  {
    id: 9,
    name: "NodeJS",
    icon: "icon",
  },
  {
    id: 10,
    name: "WordPress",
    icon: "icon",
  },
  {
    id: 11,
    name: "Angular",
    icon: "icon",
  },
];

const TechList = () => {
  return (
    <section>
      <SectionHeader
        icon={"technos"}
        title={"Tools that I use"}
        description={"I will describe my skills here"}
      />
      <div className="flex gap-3 flex-wrap">
        {skills.map((skill) => {
          return (
            <span
              className="border border-white rounded flex items-center px-3 p-1"
              key={skill.id}
            >
              <Image
                src={`/assets/${skill.icon}.svg`}
                width={30}
                height={30}
                alt={skill.icon}
                className="rounded-full object-cover"
              />
              <span className="text-sm">{skill.name}</span>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default TechList;
