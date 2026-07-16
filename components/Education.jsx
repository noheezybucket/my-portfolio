import Link from "next/link";

const degrees = [
  {
    id: 1,
    title: "Software Engineering Bachelor's degree",
    school: "Higher Institute of Computer Science",
    period: "Oct 2023 — Oct 2024",
  },
  {
    id: 2,
    title: "Software Engineering Technical degree",
    school: "Polytechnical School of Dakar",
    period: "Oct 2020 — Oct 2022",
  },
];

const certificates = [
  {
    id: 1,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/koda_/javascript-algorithms-and-data-structures",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/koda_/responsive-web-design",
  },
];

const Education = () => {
  return (
    <div className="space-y-10">
      <ul className="space-y-6">
        {degrees.map((degree, index) => (
          <li
            key={degree.id}
            className={
              index !== degrees.length - 1
                ? "border-b pb-6"
                : ""
            }
            style={
              index !== degrees.length - 1
                ? { borderColor: "var(--border)" }
                : undefined
            }
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-display text-base font-semibold tracking-tight md:text-lg">
                {degree.title}
              </h3>
              <time className="shrink-0 text-xs text-muted">
                {degree.period}
              </time>
            </div>
            <p className="mt-1 text-sm text-muted">{degree.school}</p>
          </li>
        ))}
      </ul>

      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">
          Certificates
        </p>
        <ul className="space-y-3">
          {certificates.map((cert) => (
            <li key={cert.id}>
              <Link
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-0.5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="text-sm font-medium tracking-tight group-hover:text-accent">
                  {cert.title}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-xs text-muted">
                  {cert.issuer}
                  <img
                    src="/assets/ext-link.svg"
                    alt=""
                    className="ext-link-icon theme-icon-invert opacity-50 transition-opacity group-hover:opacity-100"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
