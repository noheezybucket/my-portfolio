import React from "react";
import SectionHeader from "./SectionHeader";
import Education from "./Education";
import Experience from "./Experience";

const PathBox = () => {
  return (
    <div className="space-y-12">
      <div>
        <SectionHeader
          title={"Education"}
          description={"Degrees and certifications"}
        />
        <div className="section-panel">
          <Education />
        </div>
      </div>

      <div>
        <SectionHeader
          title={"Experience"}
          description={"Where I've been building lately"}
        />
        <div className="section-panel">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default PathBox;
