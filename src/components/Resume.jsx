import "../styles/Resume.css";

function ListItem({ data, key }) {
  return (
    <li key={key}>
      <h2>{data.title}</h2>
      <h3>{`${data.place} ${data.startDate} – ${data.endDate}`}</h3>
      <p>{data.description}</p>
    </li>
  );
}

function List({ experienceData, className }) {
  return (
    <ul className={className}>
      {experienceData.map((item) => (
        <ListItem data={item} key={item.id} />
      ))}
    </ul>
  );
}

export default function Resume({ personData, educationData, jobsData }) {
  const name = `${personData.firstName} ${personData.lastName}`;

  return (
    <div className="resume">
      <div className="top">
        <div className="resume-header">
          <h1>RESUME</h1>
          <h2>{name}</h2>
        </div>
      </div>
      <div className="resume-contact">
        <p>{personData.phone}</p>
        <p>{personData.email}</p>
      </div>
      <div className="resume-section1">
        <h1>PRACTICAL EXPERIENCE</h1>
        <List experienceData={jobsData} className={"section1-list"} />
      </div>
      <div className="resume-section2">
        <h1>EDUCATION</h1>
        <List experienceData={educationData} className={"section2-list"} />
      </div>
    </div>
  );
}
