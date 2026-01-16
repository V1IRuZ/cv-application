import "../styles/Education.css";
import Experience from "./Experience";

export default function Education({ educationData, setEducationData }) {
  return (
    <section className="education">
      <Experience
        sectionHeader="Education"
        experienceData={educationData}
        setExperienceData={setEducationData}
      />
    </section>
  );
}
