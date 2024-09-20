import Image from "next/image";
import React from "react";

const experiences = [
  {
    id: 1,
    entreprise: "ASAMAAN",
    length: "Oct 2023 - now",
    image: "asamaan.jpg",
    description:
      "Co-founder & Software Engineer, ASAMAAN goal is to redifine the landscape of aerial technology, Our mission is to develop affordable high performance VTOL drones that redefine the possibilities of aerial mapping - surveillance and tracking",
  },
  {
    id: 2,
    entreprise: "GALSEN DIGITAL",
    length: "Jul 2022 - now",
    image: "gda.png",
    description:
      "Software Engineer, Designed & Developped several web sites & apps built with WordPress - React/Angular/Tailwind - MERN Stack..., Has participated in the creation of multiple mobile apps",
  },
];

const Experience = () => {
  return (
    <div className="border-op p-2 space-y-5">
      {experiences.map((xp, index) => {
        return (
          <div className="bg-background space-y-5" key={index}>
            <div className="flex gap-5 items-center">
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
                  <span className="text-sm">{xp.length}</span>
                </div>
              </div>
            </div>
            <div className="text-sm list-none space-y-1">
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
