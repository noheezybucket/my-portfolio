import { getTranslations } from "next-intl/server";
import SectionHeader from "./SectionHeader";
import Education from "./Education";
import Experience from "./Experience";

const PathBox = async () => {
  const t = await getTranslations("Path");

  return (
    <div className="space-y-12">
      <div>
        <SectionHeader
          title={t("educationTitle")}
          description={t("educationDescription")}
        />
        <div className="section-panel">
          <Education />
        </div>
      </div>

      <div>
        <SectionHeader
          title={t("experienceTitle")}
          description={t("experienceDescription")}
        />
        <div className="section-panel">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default PathBox;
