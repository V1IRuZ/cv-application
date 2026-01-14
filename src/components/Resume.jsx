import "../styles/Resume.css";

function ListItem({ data, key }) {
  return (
    <li key={key}>
      <h2>{data.title}</h2>
      <h3>{`${data.place} ${data.startDate} - ${data.endDate}`}</h3>
      <p>{data.description}</p>
    </li>
  );
}

function List({ educationData, className }) {
  return (
    <ul className={className}>
      {educationData.map((item) => (
        <ListItem data={item} key={item.id} />
      ))}
    </ul>
  );
}

export default function Resume({ personData, educationData }) {
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
        <h1>EDUCATION</h1>
        <List educationData={educationData} className={"section1-list"} />
      </div>
    </div>
  );
}
