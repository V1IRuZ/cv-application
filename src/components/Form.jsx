import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import "../styles/Form.css";

export default function Form({
  personData,
  setPersonData,
  educationData,
  setEducationData,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>CV APPLICATION</h1>
      <GeneralInformation
        personData={personData}
        setPersonData={setPersonData}
      />
      <Education
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
