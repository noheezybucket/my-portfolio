import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";

const education = [
  {
    id: 1,
    length: "Oct 2023 - Oct 2024",
    school: "Higher Institute of Computer Science",
    description: "Ma description, que je vais, écrire ici, sans problème",
    link: "",
  },
  {
    id: 2,
    length: "Oct 2020 - Oct 2022",
    school: "Polytechnical School of Dakar",
    description: "",
    link: "",
  },
  {
    id: 3,
    length: "",
    school: "JavaScript Algo & Struct Certificate",
    description: "",
    link: "https://www.freecodecamp.org/certification/koda_/javascript-algorithms-and-data-structures",
  },
  {
    id: 4,
    length: "",
    school: "Responsive Web Design Certificate",
    description: "",
    link: "https://www.freecodecamp.org/certification/koda_/responsive-web-design",
  },
];

const experiences = [
  {
    id: 1,
    entreprise: "Galsen Digital",
    length: "Oct 2022 - now",
    image: "gda.png",
    description: "Ma description, que je vais, écrire ici, sans problème",
  },
  {
    id: 2,
    entreprise: "wedev.tech",
    length: "April 2024 - now",
    image: "wedev.png",
    description: "Description here",
  },
];

const PathBox = () => {
  return (
    <div>
      <SectionHeader
        icon={"education"}
        title={"Education"}
        description={"I will describe my experience here"}
        // buttonLink={"tro"}
        // buttonName={"Get Resume"}
      />
      <div className="border-op my-5 p-2">
        {education.map((edu) => {
          return (
            <div key={edu.id}>
              <div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <span className="text-xl font-semibold flex items-center gap-2">
                    {/* <span className="w-3 h-3 bg-orange-500 block rounded-full"></span> */}
                    {edu.school}
                  </span>
                  <span className="text-sm">
                    {edu.length ? (
                      edu.length
                    ) : (
                      <Link
                        href={edu.link}
                        target="_blank"
                        className="flex items-end underline"
                      >
                        See certification{" "}
                        <img
                          src="/assets/ext-link.svg"
                          alt=""
                          className="ext-link-icon"
                        />
                      </Link>
                    )}
                  </span>
                </div>
                <p className="text-sm">
                  {edu.description.split(",").map((descli) => {
                    return <li key={edu.id}>{descli}</li>;
                  })}
                </p>
              </div>
              {education.length != edu.id && <hr className="my-5" />}
            </div>
          );
        })}
      </div>

      <br />

      <SectionHeader
        icon={"experience"}
        title={"Experience"}
        description={"I will describe my education here"}
        // buttonLink={"tro"}
        // buttonName={"Get Resume"}
      />

      <div className="border-op p-2 space-y-5">
        {experiences.map((xp) => {
          return (
            <div className="bg-background" key={xp.id}>
              <div className="flex gap-5">
                <Image
                  src={`/assets/${xp.image}`}
                  width={50}
                  height={50}
                  className="rounded-xl max-h-[50px]"
                />
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row  justify-between">
                    <span className="text-xl font-semibold">
                      {xp.entreprise}
                    </span>
                    <span className="text-sm">{xp.length}</span>
                  </div>
                  <p className="text-sm">
                    {xp.description.split(",").map((descli) => {
                      return <li key={xp.id}>{descli}</li>;
                    })}
                  </p>
                </div>
              </div>
              {experiences.length != xp.id && <hr className="my-5" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PathBox;
