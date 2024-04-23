import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const skills = [
  {
    id: 1,
    name: "React",
    icon: "icon",
  },
  {
    id: 2,
    name: "JavascSript",
    icon: "icon",
  },
  {
    id: 3,
    name: "React Native",
    icon: "icon",
  },
  {
    id: 4,
    name: "Github",
    icon: "icon",
  },
  {
    id: 5,
    name: "Laravel",
    icon: "icon",
  },
  {
    id: 6,
    name: "Slack",
    icon: "icon",
  },
  {
    id: 7,
    name: "NextJs",
    icon: "icon",
  },
  {
    id: 8,
    name: "React",
    icon: "icon",
  },
  {
    id: 9,
    name: "Vercel",
    icon: "icon",
  },
];

const TechList = () => {
  return (
    <section>
      <SectionHeader
        icon={"icon"}
        title={"Skills"}
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
                alt="me"
                className="rounded-full object-cover"
              />
              <span>{skill.name}</span>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default TechList;
