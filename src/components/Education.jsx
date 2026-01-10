import Experience from "./Experience";

export default function Education({ educationData, setEducationData }) {
  const handleClick = () => {
    setEducationData((prevData) => [
      ...prevData,
      { title: "", startDate: "", endDate: "", description: "", id: "" },
    ]);
  };

  return (
    <section className="education">
      <div>
        <h1>Education</h1>
        <button onClick={handleClick}>Add new...</button>
      </div>
      <div>
        {educationData.length <= 0 ? (
          <p>No education...</p>
        ) : (
          educationData.map((education) => {
            return <Experience data={education}/>
          })
        )}
      </div>
    </section>
  );
}
