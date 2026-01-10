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
  });

  const [formIsActive, setFormIsActive] = useState(true);

  console.log(personData);

  return (
    <>
      {formIsActive ? (
        <Form personData={personData} setPersonData={setPersonData} setFormIsActive={setFormIsActive} />
      ) : (
        <Resume personData={personData} setFormIsActive={setFormIsActive}/>
      )}
    </>
  );
}

export default App;
