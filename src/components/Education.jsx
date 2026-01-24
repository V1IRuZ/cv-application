import { useState } from "react";

import Experience from "./Experience";

export default function Education({ educationData, setEducationData }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="education">
      <Experience
        sectionHeader="Education"
        experienceData={educationData}
        setExperienceData={setEducationData}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </section>
  );
}
