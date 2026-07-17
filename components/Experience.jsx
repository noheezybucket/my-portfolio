import Image from "next/image";

const fullTime = [
  {
    id: 1,
    role: "Founding Engineer",
    company: "Webikoo",
    period: "Aug 2025 — now",
    image: "webikoop.png",
    highlights: [
      "Developed and maintained web applications using Angular, NestJS, React Native and WordPress",
      "Leading a team of developers and designers to deliver high-quality web solutions for clients",
      "Ensuring projects are completed on time and within budget while maintaining client satisfaction",
    ],
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Galsen Digital",
    period: "Jul 2022 — Aug 2025",
    image: "gda.png",
    highlights: [
      "Designed and developed websites and apps with WordPress, React, Angular, Tailwind, and the MERN stack",
      "Participated in the creation of multiple mobile apps",
      "Built 30+ custom websites with WordPress, Elementor, React, Angular, and Node.js",
    ],
  },
];

const collaborations = [
  {
    id: 1,
    role: "Web Developer",
    company: "Dican",
    type: "Collaborator",
    period: "Oct 2025 — now",
    image: "dican.png",
    highlights: [
      "Develop websites",
      "UX/UI design with Figma",
    ],
  },
];

const ExperienceItem = ({ xp, showBorder }) => (
  <li
    className={showBorder ? "space-y-3 border-b pb-6" : "space-y-3"}
    style={showBorder ? { borderColor: "var(--border)" } : undefined}
  >
    <div className="flex items-center gap-3">
      <Image
        src={`/assets/${xp.image}`}
        width={48}
        height={48}
        className="max-h-[48px] rounded-xl"
        alt={xp.company}
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-display text-base font-semibold tracking-tight md:text-lg">
            {xp.role}
          </h3>
          <time className="shrink-0 text-xs text-muted">{xp.period}</time>
        </div>
        <p className="mt-0.5 text-sm text-muted">
          {xp.company}
          {xp.type ? ` · ${xp.type}` : ""}
        </p>
      </div>
    </div>
    <ul className="space-y-1 text-sm text-muted">
      {xp.highlights.map((item) => (
        <li key={item} className="list-none">
          — {item}
        </li>
      ))}
    </ul>
  </li>
);

const ExperienceGroup = ({ label, items }) => (
  <div>
    <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">
      {label}
    </p>
    <ul className="space-y-6">
      {items.map((xp, index) => (
        <ExperienceItem
          key={xp.id}
          xp={xp}
          showBorder={index !== items.length - 1}
        />
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <div className="space-y-10">
      <ExperienceGroup label="Full-time" items={fullTime} />
      <ExperienceGroup label="Collaborations" items={collaborations} />
    </div>
  );
};

export default Experience;
