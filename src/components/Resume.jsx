import "../styles/Resume.css";

export default function Resume({ personData, setFormIsActive }) {
  const name = `${personData.firstName} ${personData.lastName}`;

  return (
    <div className="resume">
      <div>
        <p>{name}</p>
        <p>{personData.phone}</p>
        <p>{personData.email}</p>
      </div>
      <div>
        <button onClick={() => setFormIsActive(true)}>Edit</button>
      </div>
    </div>
  );
}
