import Image from "next/image";
import React from "react";

const experiences = [
  {
    id: 1,
    entreprise: "DICAN",
    length: "Oct 2025 - now",
    image: "dican.png",
    description:
        "Collaborator-style contract, Develop websites with WordPress, UX/UI Design with Figma",
  },
  {
    id: 2,
    entreprise: "WEBIKOO",
    length: "Aug 2025 - now",
    image: "webikoop.png",
    description:
      "Founding Developer, Leading a team of developers and designers to deliver high-quality web solutions for clients, Ensuring projects are completed on time and within budget while maintaining client satisfaction.",
  },
  // {
  //   id: 2,
  //   entreprise: "ASAMAAN",
  //   length: "Oct 2023 - now",
  //   image: "asamaan.jpg",
  //   description:
  //     "Co-founder & Software Engineer, PROJECT PAUSED FOR THE MOMENT 🥲",
  // },

  {
    id: 3,
    entreprise: "GALSEN DIGITAL",
    length: "Jul 2022 - Aug 2025",
    image: "gda.png",
    description:
      "Full-time contract, Software Engineer, Designed & Developped several web sites & apps built with WordPress - React/Angular/Tailwind - MERN Stack..., Has participated in the creation of multiple mobile apps, Built over 30+ custom websites using WordPress & Elementor / React / Angular / NodeJS",
  },
];

const Experience = () => {
  return (
    <div className="border-op p-2 space-y-5">
      {experiences.map((xp, index) => {
        return (
          <div className="bg-background space-y-5 text-foreground" key={index}>
            <div className="flex gap-2 items-center">
              <Image
                src={`/assets/${xp.image}`}
                width={50}
                height={50}
                className="rounded-xl max-h-[50px]"
                alt={xp.image}
              />
              <div className="w-full">
                <div className="flex flex-col lg:flex-row  justify-between">
                  <span className="text-xl font-semibold">{xp.entreprise}</span>
                  <span className="text-xs">{xp.length}</span>
                </div>
              </div>
            </div>
            <div className="text-xs list-none space-y-1">
              {xp.description.split(",").map((descli, index) => {
                return descli && <li key={index}>- {descli}</li>;
              })}
            </div>
            {experiences.length != xp.id && <hr className="my-5" />}
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
