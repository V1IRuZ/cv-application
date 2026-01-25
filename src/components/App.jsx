import { useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import Resume from "./Resume";
import printIcon from "../assets/icons/print_32dp_F9FAF8_FILL0_wght400_GRAD0_opsz40.svg";
import pdfIcon from "../assets/icons/picture_as_pdf_32dp_F9FAF8_FILL0_wght400_GRAD0_opsz40.svg";
import editIcon from "../assets/icons/edit_32dp_F9FAF8_FILL0_wght400_GRAD0_opsz40.svg";

function App() {
  const [personData, setPersonData] = useState({
    firstName: "John",
    lastName: "Due",
    phone: "+123 456789000",
    email: "John.Due@Not.Real.com",
    introduction:
      "I am a 29-year-old software professional with a background in computer science and a strong specialization in frontend development. I have experience building modern, user-friendly web interfaces using JavaScript and React, with a focus on clean, maintainable code and accessible design.",
  });

  const [educationData, setEducationData] = useState([
    {
      title: "Bachelor of Software Engineering",
      place: "Northbridge Institute of Technology",
      startDate: "09/2018",
      endDate: "06/2021",
      description:
        "The program focused on software development fundamentals, object-oriented programming, data structures, and web technologies. Coursework included multiple individual and team-based projects, emphasizing clean code, version control, and agile development practices.",
      id: crypto.randomUUID(),
    },
    {
      title: "Advanced Web Development Program",
      place: "Silverline Digital Academy",
      startDate: "01/2022",
      endDate: "09/2022",
      description:
        "An intensive, practice-oriented program covering modern frontend and backend development. The curriculum included React, RESTful APIs, basic backend development, and application deployment. The program emphasized real-world problem solving and hands-on project work.",
      id: crypto.randomUUID(),
    },
  ]);

  const [jobsData, setJobsData] = useState([
    {
      title: "Frontend Developer",
      place: "Bluepeak Solutions",
      startDate: "01/2023",
      endDate: "Present",
      description:
        "Worked on developing and maintaining user interfaces using modern JavaScript and React. Responsibilities included implementing reusable components, collaborating with designers, and improving application performance and accessibility. Participated in code reviews and agile development processes.",
      id: crypto.randomUUID(),
    },
    {
      title: "Junior Frontend Developer",
      place: "Bluepeak Solutions",
      startDate: "06/2021",
      endDate: "12/2021",
      description:
        "Contributed to frontend development tasks under senior developer guidance. Focused on building UI components, fixing bugs, and ensuring responsive design across devices. Gained hands-on experience with React, Git-based workflows, and collaborative software development practices.",
      id: crypto.randomUUID(),
    },
  ]);

  const [languageSkills, setLanguageSkills] = useState([
    {
      skill: "English",
      rating: "Native",
      id: crypto.randomUUID(),
    },
    {
      skill: "Spanish",
      rating: "Good",
      id: crypto.randomUUID(),
    },
    {
      skill: "French",
      rating: "Basics",
      id: crypto.randomUUID(),
    },
  ]);

  const [mainSkills, setMainSkills] = useState([
    { skill: "JavaScript", id: crypto.randomUUID() },
    { skill: "CSS", id: crypto.randomUUID() },
    { skill: "HTML", id: crypto.randomUUID() },
    { skill: "React", id: crypto.randomUUID() },
    { skill: "Git", id: crypto.randomUUID() },
  ]);

  const [custom, setCustom] = useState({
    resumeTitle: "RESUME",
    educationTitle: "EDUCATION",
    jobsTitle: "PRACTICAL EXPERIENCE",
    introductionTitle: "INTRODUCTION",
    skillsTitle: "SKILLS",
    languagesTitle: "LANGUAGES",
    color: "#3892ce",
    font: "sans-serif",
  });

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  return (
    <div className="page">
      <header>
        <h1>CV APP</h1>
      </header>
      <main className={formIsSubmitted ? "submit-view" : "form-view"}>
        {!formIsSubmitted ? (
          <>
            <Form
              personData={personData}
              setPersonData={setPersonData}
              educationData={educationData}
              setEducationData={setEducationData}
              jobsData={jobsData}
              setJobsData={setJobsData}
              languageSkills={languageSkills}
              setLanguageSkills={setLanguageSkills}
              mainSkills={mainSkills}
              setMainSkills={setMainSkills}
              setFormIsSubmitted={setFormIsSubmitted}
              custom={custom}
              setCustom={setCustom}
            />

            <Resume
              personData={personData}
              educationData={educationData}
              jobsData={jobsData}
              languageSkills={languageSkills}
              mainSkills={mainSkills}
              custom={custom}
            />
          </>
        ) : (
          <>
            <div className="options">
              <button
                className="edit-btn"
                onClick={() => setFormIsSubmitted(false)}
              >
                <img src={editIcon} alt="" />
                <span>EDIT</span>
              </button>
              <button
                className="print-btn"
                aria-label="print"
                onClick={() => window.print()}
              >
                <img src={printIcon} alt="" />
                <span>/</span>
                <img src={pdfIcon} alt="" />
              </button>
            </div>
            <Resume
              personData={personData}
              educationData={educationData}
              jobsData={jobsData}
              languageSkills={languageSkills}
              mainSkills={mainSkills}
              custom={custom}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
