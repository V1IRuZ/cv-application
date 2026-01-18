import Experience from "./Experience";

export default function Jobs({ jobsData, setJobsData }) {
  return (
    <section className="jobs">
      <Experience
        sectionHeader="Practical experience"
        experienceData={jobsData}
        setExperienceData={setJobsData}
      />
    </section>
  );
}
