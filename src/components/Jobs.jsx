import { useState } from "react";

import Experience from "./Experience";

export default function Jobs({ jobsData, setJobsData }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="jobs">
      <Experience
        sectionHeader="Practical experience"
        experienceData={jobsData}
        setExperienceData={setJobsData}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </section>
  );
}
