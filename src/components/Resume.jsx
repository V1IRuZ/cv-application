import "../styles/Resume.css";

export default function Resume({ personData }) {
  const name = `${personData.firstName} ${personData.lastName}`;

  return (
    <div className="resume">
      <div>
        <p>{name}</p>
        <p>{personData.phone}</p>
        <p>{personData.email}</p>
      </div>
      <div>
        <button >Edit</button>
      </div>
    </div>
  );
}
