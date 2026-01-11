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

  const [formIsActive, setFormIsActive] = useState(true);

  return (
    <>
      {formIsActive ? (
        <Form
          personData={personData}
          setPersonData={setPersonData}
          educationData={educationData}
          setEducationData={setEducationData}
          setFormIsActive={setFormIsActive}
        />
      ) : (
        <Resume personData={personData} setFormIsActive={setFormIsActive} />
      )}
    </>
  );
}

export default App;
