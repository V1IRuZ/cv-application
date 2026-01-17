import { useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import Resume from "./Resume";

function App() {
  const [personData, setPersonData] = useState({
    firstName: "John",
    lastName: "Due",
    phone: "+123 456789000",
    email: "John.Due@Not.Real.com",
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

  return (
    <div className="page">
      <button onClick={() => window.print()}>Download</button>
      <div className="content">
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
        />
        <Resume
          personData={personData}
          educationData={educationData}
          jobsData={jobsData}
        />
      </div>
    </div>
  );
}

export default App;
