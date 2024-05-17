import Image from "next/image";
import React from "react";

const experiences = [
  {
    id: 1,
    entreprise: "ASAMAAN",
    length: "Oct 2023 - now",
    image: "asamaan.jpg",
    description:
      "Co-founder & Software Engineer, ASAMAAN goal is to redifine the landscape of aerial technology, Our mission is to develop affordable, high performance VTOL drones that redefine the possibilities of aerial mapping - surveillance and tracking",
  },
  {
    id: 2,
    entreprise: "Galsen Digital",
    length: "Jul 2022 - now",
    image: "gda.png",
    description:
      "Currently working there as a Software Engineer, working both on Front & Back, Developped several web sites & apps built with WordPress - React/Angular/Tailwind - MERN Stack..., Participated to the creation of multiple mobile apps",
  },
  {
    id: 3,
    entreprise: "wedev.tech",
    length: "April 2022 - now",
    image: "wedev.png",
    description:
      "CEO & Founder, Our goal is to provide affordable trainings for african youth & entrepreneurs, We are currently building our platform little by little, We used to propose web development/design services but we changed our perspective",
  },
];

const Experience = () => {
  return (
    <div className="border-op p-2 space-y-5">
      {experiences.map((xp, index) => {
        return (
          <div className="bg-background" key={index}>
            <div className="flex gap-5">
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
                <div className="text-sm">
                  {xp.description.split(",").map((descli, index) => {
                    return descli && <li key={index}>{descli}</li>;
                  })}
                </div>
              </div>
            </div>
            {experiences.length != xp.id && <hr className="my-5" />}
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
