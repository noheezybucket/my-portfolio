import Image from "next/image";
import { toolIconClassName } from "@lib/toolIcons";
import { getTranslations, setRequestLocale } from "next-intl/server";

const tools = [
  { name: "React", icon: "react" },
  { name: "NodeJS", icon: "node" },
  { name: "MongoDB", icon: "mongo" },
  { name: "ExpressJS", icon: "express" },
  { name: "Figma", icon: "figma" },
];

const Page = async ({ params }) => {
  setRequestLocale(params.locale);
  const t = await getTranslations("ProjectDetail");

  return (
    <div className="glassmorphism">
      <div>
        <div className="flex flex-col gap-5 rounded-xl md:flex-row">
          <div
            className="flex items-center justify-center rounded-xl border-op md:w-6/12"
            style={{ backgroundColor: "#F37608" }}
          >
            <img
              src="/assets/projects/jaba/logo.svg"
              className="rounded-xl object-cover"
              alt="Jaba"
            />
          </div>

          <div className="flex flex-col gap-2 md:w-6/12">
            <div className="flex justify-between gap-3">
              <h3 className="text-2xl font-semibold">Jaba</h3>
              <span className="flex items-center justify-center gap-1 text-sm text-red-500 underline">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
                </span>
                {t("liveUnavailable")}
              </span>
            </div>
            <p className="text-justify text-sm">{t("jabaDescription")}</p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool.name} className="tools">
                  <Image
                    src={`/assets/tools/${tool.icon}.svg`}
                    width={25}
                    height={25}
                    alt=""
                    className={toolIconClassName(tool.icon)}
                  />
                  <span className="tool-name">{tool.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-5" />
      </div>
      <div>
        <iframe
          width="100%"
          height="571"
          src="https://www.youtube.com/embed/ikis7AUYQn0"
          title="Présentation app Jaba"
          frameBorder="0"
          className="rounded-xl border-op"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Page;
