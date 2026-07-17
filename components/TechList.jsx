"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { toolIconClassName } from "@lib/toolIcons";

const skills = [
  { name: "React", icon: "react", category: "frontend" },
  { name: "Angular", icon: "angular", category: "frontend" },
  { name: "Next.js", icon: "next", category: "fullstack" },
  { name: "Tailwind", icon: "tailwind", category: "frontend" },
  { name: "Bootstrap", icon: "bootstrap", category: "frontend" },
  { name: "SASS", icon: "sass", category: "frontend" },
  { name: "HTML", icon: "html", category: "frontend" },
  { name: "CSS", icon: "css", category: "frontend" },
  { name: "JavaScript", icon: "js", category: "frontend" },
  { name: "Laravel", icon: "laravel", category: "fullstack" },
  { name: "React Native", icon: "react", category: "frontend" },
  { name: "MySQL", icon: "mysql", category: "backend" },
  { name: "MongoDB", icon: "mongo", category: "backend" },
  { name: "Node.js", icon: "node", category: "backend" },
  { name: "WordPress", icon: "wordpress", category: "cms" },
  { name: "Elementor", icon: "elementor", category: "cms" },
  { name: "npm", icon: "npm", category: "tools" },
  { name: "Trello", icon: "trello", category: "tools" },
  { name: "Slack", icon: "slack", category: "tools" },
  { name: "PostgreSQL", icon: "postgres", category: "backend" },
  { name: "GitHub", icon: "github", category: "tools" },
  { name: "Git", icon: "git", category: "tools" },
  { name: "Figma", icon: "figma", category: "design" },
  { name: "WebStorm", icon: "webstorm", category: "tools" },
  { name: "VS Code", icon: "vscode", category: "tools" },
  { name: "Express", icon: "express", category: "backend" },
  { name: "Cursor", icon: "cursor", category: "ai" },
  { name: "ChatGPT", icon: "openai", category: "ai" },
  { name: "Claude", icon: "claude", category: "ai" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Fullstack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "design", label: "UX/UI" },
  { id: "tools", label: "Tools" },
  { id: "cms", label: "CMS" },
  { id: "ai", label: "AI" },
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
        title="What I build with"
        description="Languages, frameworks, and tools I use to design and ship products."
      />

      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`filter-button ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap ">
          {filteredSkills.map((skill) => (
            <span
              className="tools"
              key={skill.name}
              title={skill.name}
              aria-label={skill.name}
            >
              <Image
                src={`/assets/tools/${skill.icon}.svg`}
                width={24}
                height={24}
                alt=""
                className={toolIconClassName(skill.icon)}
              />
              <span className="tool-name">{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechList;
