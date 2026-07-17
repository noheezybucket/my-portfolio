"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { toolIconClassName } from "@lib/toolIcons";

const skills = [
  {
    name: "React",
    icon: "react",
    category: "frontend",
    description: "Interactive UIs and reusable components.",
  },
  {
    name: "Angular",
    icon: "angular",
    category: "frontend",
    description: "Structured apps with a clear architecture.",
  },
  {
    name: "Next.js",
    icon: "next",
    category: "fullstack",
    description: "React apps with routing, SSR, and APIs.",
  },
  {
    name: "Tailwind",
    icon: "tailwind",
    category: "frontend",
    description: "Utility-first CSS for fast, consistent UI.",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
    category: "frontend",
    description: "Ready-made layout and UI patterns.",
  },
  {
    name: "SASS",
    icon: "sass",
    category: "frontend",
    description: "Maintainable styles with variables and mixins.",
  },
  {
    name: "HTML",
    icon: "html",
    category: "frontend",
    description: "Semantic structure for accessible pages.",
  },
  {
    name: "CSS",
    icon: "css",
    category: "frontend",
    description: "Layout, motion, and visual polish.",
  },
  {
    name: "JavaScript",
    icon: "js",
    category: "frontend",
    description: "Logic and interactivity across the stack.",
  },
  {
    name: "Laravel",
    icon: "laravel",
    category: "fullstack",
    description: "PHP backends, APIs, and admin tools.",
  },
  {
    name: "React Native",
    icon: "react",
    category: "frontend",
    description: "Cross-platform mobile apps with React.",
  },
  {
    name: "MySQL",
    icon: "mysql",
    category: "backend",
    description: "Relational data for structured products.",
  },
  {
    name: "MongoDB",
    icon: "mongo",
    category: "backend",
    description: "Flexible documents when the schema evolves.",
  },
  {
    name: "Node.js",
    icon: "node",
    category: "backend",
    description: "Server-side JavaScript and tooling.",
  },
  {
    name: "WordPress",
    icon: "wordpress",
    category: "cms",
    description: "Content sites, themes, and custom builds.",
  },
  {
    name: "Elementor",
    icon: "elementor",
    category: "cms",
    description: "Visual page building on WordPress.",
  },
  {
    name: "npm",
    icon: "npm",
    category: "tools",
    description: "Package management for JS projects.",
  },
  {
    name: "Trello",
    icon: "trello",
    category: "tools",
    description: "Kanban boards to track delivery.",
  },
  {
    name: "Slack",
    icon: "slack",
    category: "tools",
    description: "Team chat and async collaboration.",
  },
  {
    name: "PostgreSQL",
    icon: "postgres",
    category: "backend",
    description: "Reliable SQL for production data.",
  },
  {
    name: "GitHub",
    icon: "github",
    category: "tools",
    description: "Code hosting, reviews, and CI.",
  },
  {
    name: "Git",
    icon: "git",
    category: "tools",
    description: "Version control for every project.",
  },
  {
    name: "Figma",
    icon: "figma",
    category: "design",
    description: "UI design, prototypes, and handoff.",
  },
  {
    name: "WebStorm",
    icon: "webstorm",
    category: "tools",
    description: "Deep IDE for JS and fullstack work.",
  },
  {
    name: "VS Code",
    icon: "vscode",
    category: "tools",
    description: "Everyday editor for coding and debug.",
  },
  {
    name: "Express",
    icon: "express",
    category: "backend",
    description: "Lightweight Node APIs and servers.",
  },
  {
    name: "Cursor",
    icon: "cursor",
    category: "ai",
    description: "AI-assisted coding in the editor.",
  },
  {
    name: "ChatGPT",
    icon: "openai",
    category: "ai",
    description: "Drafting, research, and problem-solving.",
  },
  {
    name: "Claude",
    icon: "claude",
    category: "ai",
    description: "Writing, reasoning, and code review.",
  },
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

        <div className="flex flex-wrap">
          {filteredSkills.map((skill) => (
            <span
              className="tools"
              key={skill.name}
              tabIndex={0}
              aria-label={`${skill.name}. ${skill.description}`}
            >
              <Image
                src={`/assets/tools/${skill.icon}.svg`}
                width={24}
                height={24}
                alt=""
                className={toolIconClassName(skill.icon)}
              />
              <span className="tool-tooltip" aria-hidden="true">
                <Image
                  src={`/assets/tools/${skill.icon}.svg`}
                  width={40}
                  height={40}
                  alt=""
                  className={toolIconClassName(skill.icon)}
                />
                <span className="tool-tooltip__name">{skill.name}</span>
                <span className="tool-tooltip__desc">{skill.description}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechList;
