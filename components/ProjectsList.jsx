"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toolIconClassName } from "@lib/toolIcons";

const projects = [
  {
    title: "PACTA",
    tagline: "Trusted counsel for Africa's digital economy",
    image: "pacta.jpg",
    link: "https://pacta.africa/",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "Bayān",
    tagline: "Learn Islam with clarity and ease",
    image: "bayan.jpg",
    link: "https://bayanun.com",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "Transition Quality",
    tagline: "Brand site for a quality consultancy",
    image: "transition/transition.webp",
    link: "https://transitionquality.com",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "STEK Talkshow",
    tagline: "Media site for a talk show brand",
    image: "stek/stek.png",
    link: "https://stektalkshow.com",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "DNA",
    tagline: "Site for Dakar Network Angels",
    image: "dna/dna.png",
    link: "https://dakarnetworkangels.com",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "Espace Gourmet",
    tagline: "Restaurant website",
    image: "gourmet/gourmet.webp",
    link: "https://espacegourmet.com",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "Webikoo",
    tagline: "Agency website",
    image: "webikoo/webikoo.webp",
    link: "https://webikoo.pro",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "Maison de couture Siir",
    tagline: "Fashion e-commerce",
    image: "siir/siir.webp",
    link: "https://maisondecouturesiir.webikoo.pro",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "EST",
    tagline: "School website",
    image: "est/est.webp",
    link: "https://est-senegal.com",
    type: "client",
    stack: "wordpress",
    tools: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
    ],
  },
  {
    title: "Helium",
    tagline: "Training landing page",
    image: "helium/helium.webp",
    link: "https://ahmadgueye.github.io/mouse-effect/",
    type: "practice",
    stack: "html",
    tools: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Javascript", icon: "js" },
    ],
  },
  {
    title: "Gaming Campus",
    tagline: "Training landing page",
    image: "gaming-campus/gaming-campus.webp",
    link: "https://ahmadgueye.github.io/gaming-campus-page/",
    type: "practice",
    stack: "html",
    tools: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Javascript", icon: "js" },
    ],
  },
  {
    title: "Takku",
    tagline: "Pomodoro focus app",
    image: "waxtu.png",
    link: "https://takku.vercel.app/",
    type: "personal",
    stack: "react",
    tools: [{ name: "React", icon: "react" }],
  },
  {
    title: "Jaba",
    tagline: "Farm-to-consumer marketplace",
    image: "jaba/jaba.png",
    link: "/projects/jaba",
    type: "personal",
    stack: "fullstack",
    tools: [
      { name: "React", icon: "react" },
      { name: "NodeJS", icon: "node" },
      { name: "MongoDB", icon: "mongo" },
      { name: "ExpressJS", icon: "express" },
    ],
  },
  {
    title: "Bookmark",
    tagline: "Landing page practice",
    image: "bookmark/bookmark.png",
    link: "https://ahmadgueye.github.io/bookmark-landing-page/",
    type: "practice",
    stack: "react",
    tools: [
      { name: "React", icon: "react" },
      { name: "Tailwind", icon: "tailwind" },
    ],
  },
  {
    title: "Manage",
    tagline: "Landing page practice",
    image: "manage.png",
    link: "https://ahmadgueye.github.io/manage-landing-page/",
    type: "practice",
    stack: "react",
    tools: [
      { name: "React", icon: "react" },
      { name: "Tailwind", icon: "tailwind" },
    ],
  },
  {
    title: "Chat app landing page",
    tagline: "Pure HTML & CSS",
    image: "chat-app.png",
    link: "https://ahmadgueye.github.io/chat-app-pure-css/",
    type: "practice",
    stack: "html",
    tools: [
      { name: "Sass", icon: "sass" },
      { name: "HTML", icon: "html" },
    ],
  },
  {
    title: "Fylo",
    tagline: "Dark theme landing page",
    image: "fylo.png",
    link: "https://ahmadgueye.github.io/fylo-dark-theme-landing-page/",
    type: "practice",
    stack: "react",
    tools: [
      { name: "React", icon: "react" },
      { name: "Tailwind", icon: "tailwind" },
    ],
  },
];

const typeFilters = [
  { id: "all", label: "All" },
  { id: "client", label: "Client" },
  { id: "personal", label: "Personal" },
  { id: "practice", label: "Practice" },
];

const stackFilters = [
  { id: "all", label: "All" },
  { id: "wordpress", label: "WordPress" },
  { id: "react", label: "React" },
  { id: "fullstack", label: "Fullstack" },
];

const isExternal = (link) => /^https?:\/\//.test(link);

const ProjectsList = ({ limit }) => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStack, setSelectedStack] = useState("all");
  const showFilters = !limit;

  const filtered = projects.filter((project) => {
    const matchesType =
      selectedType === "all" || project.type === selectedType;
    const matchesStack =
      selectedStack === "all" || project.stack === selectedStack;
    return matchesType && matchesStack;
  });

  const list = limit ? projects.slice(0, limit) : filtered;

  return (
    <div>
      {showFilters && (
        <div className="mb-5 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted mr-1">Type</span>
            {typeFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`filter-button ${
                  selectedType === filter.id ? "active" : ""
                }`}
                onClick={() => setSelectedType(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted mr-1">Stack</span>
            {stackFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`filter-button ${
                  selectedStack === filter.id ? "active" : ""
                }`}
                onClick={() => setSelectedStack(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {list.length < 1 ? (
        <p className="text-center text-muted">
          {showFilters
            ? "No projects match these filters."
            : "Projects will be updated soon."}
        </p>
      ) : (
        <div className="project-grid">
          {list.map((project) => {
            const external = isExternal(project.link);
            const linkProps = external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <article key={project.title} className="project-card">
                <Link
                  href={project.link}
                  className="project-card__link"
                  {...linkProps}
                >
                  <img
                    src={`/assets/projects/${project.image}`}
                    alt={project.title}
                    className="project-card__image"
                  />
                  <div className="project-card__overlay">
                    <div className="project-card__meta">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                          {project.title}
                        </h3>
                        {project.tagline && (
                          <p className="mt-0.5 text-sm text-white/75">
                            {project.tagline}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool.name || tool.icon}
                            className="project-tool"
                            title={tool.name}
                          >
                            <Image
                              src={`/assets/tools/${tool.icon}.svg`}
                              width={18}
                              height={18}
                              alt={tool.name || tool.icon}
                              className={toolIconClassName(tool.icon)}
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
