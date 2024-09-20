'use client'
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const skills = [
    { name: "ReactJS", icon: "react", category: "frontend" },
    { name: "Angular", icon: "angular", category: "frontend" },
    { name: "NextJS", icon: "next", category: "fullstack" },
    { name: "Tailwind", icon: "tailwind", category: "frontend" },
    { name: "Bootstrap", icon: "bootstrap", category: "frontend" },
    { name: "SASS", icon: "sass", category: "frontend" },
    { name: "Laravel", icon: "laravel", category: "fullstack" },
    { name: "React Native", icon: "react", category: "frontend" },
    { name: "MySQL", icon: "mysql", category: "backend" },
    { name: "MongoDB", icon: "mongo", category: "backend" },
    { name: "NodeJS", icon: "node", category: "backend" },
    { name: "WordPress", icon: "wordpress", category: "cms" },
    { name: "Elementor", icon: "elementor", category: "cms" },
    // { name: "npm", icon: "npm", category: "tools" },
    { name: "Trello", icon: "trello", category: "tools" },
    { name: "Slack", icon: "slack", category: "tools" },
    // { name: "Composer", icon: "composer", category: "tools" },
    { name: "PostgreSQL", icon: "postgres", category: "backend" },
    { name: "Github", icon: "github", category: "tools" },
    { name: "Git", icon: "git", category: "tools" },
    { name: "Figma", icon: "figma", category: "design" },
    { name: "Webstorm", icon: "webstorm", category: "tools" },
    { name: "VS Code", icon: "vscode", category: "tools" },
    { name: "Express JS", icon: "express", category: "backend" },
];

const TechList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
      selectedCategory === "all"
          ? skills
          : skills.filter((skill) => skill.category === selectedCategory);

  return (
      <section>
        <SectionHeader
            icon={"technos"}
            title={"My Tech Stack"}
            description={"Technologies I worked with"}
        />

          <div className="flex flex-wrap justify-center gap-2 mb-5">
              <button
                  className={`filter-button ${
                      selectedCategory === "all" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("all")}
              >
                  All
              </button>
              <button
                  className={`filter-button ${
                      selectedCategory === "fullstack" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("fullstack")}
              >
                  Fullstack
              </button>
              <button
                  className={`filter-button ${
                      selectedCategory === "frontend" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("frontend")}
              >
                  Frontend
              </button>
              <button
                  className={`filter-button ${
                      selectedCategory === "backend" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("backend")}
              >
                  Backend
              </button>
              <button
                  className={`filter-button ${
                      selectedCategory === "design" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("design")}
              >
                  UX/UI
              </button>
              <button
                  className={`filter-button ${
                      selectedCategory === "tools" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("tools")}
              >
                  Tools
              </button>

              <button
                  className={`filter-button ${
                      selectedCategory === "cms" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("cms")}
              >
                  CMS
              </button>
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
              {filteredSkills.map((skill, index) => (
                  <span className="tools" key={index}>
            <Image
                src={`/assets/tools/${skill.icon}.svg`}
                width={25}
                height={25}
                alt={skill.icon}
            />
            <span className="tool-name">{skill.name}</span>
          </span>
          ))}
        </div>
      </section>
  );
};

export default TechList;