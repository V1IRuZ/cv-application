import { useState } from "react";
import "../styles/App.css";
import Form from "./Form";

function App() {
  const [personData, setPersonData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  console.log(personData);

  return (
    <>
      <Form
        personData={personData}
        setPersonData={setPersonData}
      />
    </>
  );
}

export default App;
