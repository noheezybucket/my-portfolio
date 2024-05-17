import Link from "next/link";
import React from "react";

const education = [
  {
    id: 1,
    length: "Oct 2023 - Oct 2024",
    school: "Higher Institute of Computer Science",
    description: "Software Engineering Bachelor's degree",
    link: "",
  },
  {
    id: 2,
    length: "Oct 2020 - Oct 2022",
    school: "Polytechnical School of Dakar",
    description: "Software Engineering 2-year Technical degree",
    link: "",
  },
  {
    id: 3,
    length: "",
    school: "JavaScript Algo & Data Structures Certificate",
    description: "Delivered by freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/koda_/javascript-algorithms-and-data-structures",
  },
  {
    id: 4,
    length: "",
    school: "Responsive Web Design Certificate",
    description: "Delivered by freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/koda_/responsive-web-design",
  },
];

const Education = () => {
  return (
    <div className="border-op my-5 p-2">
      {education.map((edu, index) => {
        return (
          <div key={index}>
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
              <div className="text-sm">
                {edu.description.split(",").map((descli, index) => {
                  return (
                    descli && (
                      <li key={index} className="list-none">
                        {descli}
                      </li>
                    )
                  );
                })}
              </div>
            </div>
            {education.length != edu.id && <hr className="my-5" />}
          </div>
        );
      })}
    </div>
  );
};

export default Education;
