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
    <div className="space-y-8">
      {experiences.map((xp, index) => {
        return (
          <div
            key={xp.id}
            className="space-y-3"
            style={
              index !== experiences.length - 1
                ? {
                    paddingBottom: "2rem",
                    borderBottom: "1px solid var(--border)",
                  }
                : undefined
            }
          >
            <div className="flex items-center gap-3">
              <Image
                src={`/assets/${xp.image}`}
                width={48}
                height={48}
                className="max-h-[48px] rounded-xl"
                alt={xp.entreprise}
              />
              <div className="w-full">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-baseline">
                  <span className="font-display text-xl font-semibold tracking-tight">
                    {xp.entreprise}
                  </span>
                  <span className="text-xs text-muted">{xp.length}</span>
                </div>
              </div>
            </div>
            <ul className="space-y-1 text-sm text-muted">
              {xp.description.split(",").map(
                (descli, i) =>
                  descli && (
                    <li key={i} className="list-none">
                      — {descli.trim()}
                    </li>
                  )
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
