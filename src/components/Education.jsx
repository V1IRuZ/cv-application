import "../styles/Education.css";
import Experience from "./Experience";

export default function Education({ educationData, setEducationData }) {
  const handleClick = (e) => {
    e.preventDefault();
    setEducationData((prevData) => [
      ...prevData,
      {
        title: "",
        place: "",
        startDate: "",
        endDate: "",
        description: "",
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleRemove = (id) => {
    const newList = educationData.filter(education => education.id !== id)
    setEducationData(newList);
  }

  return (
    <section className="education">
      <div className="header">
        <h1>Education</h1>
        <button onClick={handleClick}>Add new...</button>
      </div>
      <div className="form-educations">
        {educationData.length <= 0 ? (
          <p>No education...</p>
        ) : (
          educationData.map((education) => {
            return <Experience data={education} handleRemove={handleRemove} setEducationData={setEducationData}/>;
          })
        )}
      </div>
    </section>
  );
}
