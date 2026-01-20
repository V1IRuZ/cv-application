import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import Jobs from "./Jobs";
import Language from "./Language";
import Skills from "./Skills";
import "../styles/Form.css";

export default function Form({
  personData,
  setPersonData,
  educationData,
  setEducationData,
  jobsData,
  setJobsData,
  languageSkills,
  setLanguageSkills,
  mainSkills,
  setMainSkills,
  setFormIsSubmitted,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setFormIsSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>CV APPLICATION</h1>
      <GeneralInformation
        personData={personData}
        setPersonData={setPersonData}
      />
      <Jobs jobsData={jobsData} setJobsData={setJobsData} />
      <Education
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <Skills mainSkills={mainSkills} setMainSkills={setMainSkills} />
      <Language
        languageSkills={languageSkills}
        setLanguageSkills={setLanguageSkills}
      />
      <div className="submit">
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
