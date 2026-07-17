"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { toolIconClassName } from "@lib/toolIcons";

const skills = [
  { name: "React", key: "React", icon: "react", category: "frontend" },
  { name: "Angular", key: "Angular", icon: "angular", category: "frontend" },
  { name: "Next.js", key: "Nextjs", icon: "next", category: "fullstack" },
  { name: "Tailwind", key: "Tailwind", icon: "tailwind", category: "frontend" },
  { name: "Bootstrap", key: "Bootstrap", icon: "bootstrap", category: "frontend" },
  { name: "SASS", key: "SASS", icon: "sass", category: "frontend" },
  { name: "HTML", key: "HTML", icon: "html", category: "frontend" },
  { name: "CSS", key: "CSS", icon: "css", category: "frontend" },
  { name: "JavaScript", key: "JavaScript", icon: "js", category: "frontend" },
  { name: "Laravel", key: "Laravel", icon: "laravel", category: "fullstack" },
  { name: "React Native", key: "ReactNative", icon: "react", category: "frontend" },
  { name: "MySQL", key: "MySQL", icon: "mysql", category: "backend" },
  { name: "MongoDB", key: "MongoDB", icon: "mongo", category: "backend" },
  { name: "Node.js", key: "Nodejs", icon: "node", category: "backend" },
  { name: "WordPress", key: "WordPress", icon: "wordpress", category: "cms" },
  { name: "Elementor", key: "Elementor", icon: "elementor", category: "cms" },
  { name: "npm", key: "npm", icon: "npm", category: "tools" },
  { name: "Trello", key: "Trello", icon: "trello", category: "tools" },
  { name: "Slack", key: "Slack", icon: "slack", category: "tools" },
  { name: "PostgreSQL", key: "PostgreSQL", icon: "postgres", category: "backend" },
  { name: "GitHub", key: "GitHub", icon: "github", category: "tools" },
  { name: "Git", key: "Git", icon: "git", category: "tools" },
  { name: "Figma", key: "Figma", icon: "figma", category: "design" },
  { name: "WebStorm", key: "WebStorm", icon: "webstorm", category: "tools" },
  { name: "VS Code", key: "VSCode", icon: "vscode", category: "tools" },
  { name: "Express", key: "Express", icon: "express", category: "backend" },
  { name: "Cursor", key: "Cursor", icon: "cursor", category: "ai" },
  { name: "ChatGPT", key: "ChatGPT", icon: "openai", category: "ai" },
  { name: "Claude", key: "Claude", icon: "claude", category: "ai" },
];

const categoryIds = [
  "all",
  "fullstack",
  "frontend",
  "backend",
  "design",
  "tools",
  "cms",
  "ai",
];

const TechList = () => {
  const t = useTranslations("Tech");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section>
      <SectionHeader title={t("title")} description={t("description")} />

      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          {categoryIds.map((id) => (
            <button
              key={id}
              type="button"
              className={`filter-button ${
                selectedCategory === id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(id)}
            >
              {t(`categories.${id}`)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap">
          {filteredSkills.map((skill) => {
            const description = t(`skills.${skill.key}`);
            return (
              <span
                className="tools"
                key={skill.name}
                tabIndex={0}
                aria-label={`${skill.name}. ${description}`}
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
                  <span className="tool-tooltip__desc">{description}</span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechList;
