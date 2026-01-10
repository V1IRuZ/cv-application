import GeneralInformation from "./GeneralInformation";
import "../styles/Form.css";

export default function Form({ personData, setPersonData, setFormIsActive}) {
  function handleSubmit(e) {
    e.preventDefault();
    setFormIsActive(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>CV APPLICATION</h1>
      <GeneralInformation
        personData={personData}
        setPersonData={setPersonData}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
