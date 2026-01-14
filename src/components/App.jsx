import { useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import Resume from "./Resume";

function App() {
  const [personData, setPersonData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    educations: [],
  });

  const [educationData, setEducationData] = useState([
    {
      title: "",
      place: "",
      startDate: "",
      endDate: "",
      description: "",
      id: crypto.randomUUID(),
    },
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
        />
        <Resume personData={personData} educationData={educationData} />
      </div>
    </div>
  );
}

export default App;
