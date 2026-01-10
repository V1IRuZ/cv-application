export default function Experience(data) {
  return (
    <div className="experience" key={data.id}>
      <div>
        <label htmlFor={`title-${data.id}`}>Title</label>
        <input type="text" id={`title-${data.id}`} />
        <div>
          <div>
            <label htmlFor={`start-${data.id}`}>Start date</label>
            <input type="text" id={`start-${data.id}`} />
          </div>
          <div>
            <label htmlFor={`end-${data.id}`}>End date</label>
            <input type="text" id={`end-${data.id}`} />
          </div>
        </div>
        <textarea name="education" id={`education-${data.id}`}></textarea>
      </div>
    </div>
  );
}