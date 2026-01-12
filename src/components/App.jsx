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
    <>
      <Form
        personData={personData}
        setPersonData={setPersonData}
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <Resume personData={personData} />
    </>
  );
}

export default App;
