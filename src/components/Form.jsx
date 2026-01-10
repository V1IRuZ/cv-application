import GeneralInformation from "./GeneralInformation";

export default function Form({ personData, setPersonData }) {
  function handleSubmit(e) {
    e.preventDefault();
    setPersonData({
      ...personData,
      firstName: "John",
      lastName: "Due",
      phone: "0123456789",
      email: "john.due@notreal.com",
    });
  }

  return (
    <form>
      <h1>CV APPLICATION</h1>
      <GeneralInformation
        personData={personData}
        setPersonData={setPersonData}
      />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
}
