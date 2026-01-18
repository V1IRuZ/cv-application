import "../styles/Resume.css";
import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";

function ExperienceListItem({ data, key }) {
  return (
    <li key={key}>
      <h2>{data.title}</h2>
      <h3>{`${data.place} ${data.startDate} – ${data.endDate}`}</h3>
      <p>{data.description}</p>
    </li>
  );
}

function ExperienceList({ experienceData, className }) {
  return (
    <ul className={className}>
      {experienceData.map((item) => (
        <ExperienceListItem data={item} key={item.id} />
      ))}
    </ul>
  );
}

function LanguagesList({ languageSkills }) {
  return (
    <ul>
      {languageSkills.map((language) => (
        <li key={language.id}>
          {language.skill} – {language.rating}
        </li>
      ))}
    </ul>
  );
}

function SkillsList({ mainSkills }) {
  return (
    <ul>
      {mainSkills.map((item) => (
        <li key={item.id}>{item.skill}</li>
      ))}
    </ul>
  );
}

export default function Resume({
  personData,
  educationData,
  jobsData,
  languageSkills,
  mainSkills,
}) {
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
        <div className="resume-phone">
          <img src={phoneIcon} alt="phone" width={30} height={30}/>
          <p>{personData.phone}</p>
        </div>
        <div className="resume-email">
          <img src={mailIcon} alt="email" />
          <p>{personData.email}</p>
        </div>
      </div>
      <div className="resume-content">
        <div className="aside">
          <div className="resume-introduction">
            <h2>Introduction</h2>
            <p>{personData.introduction}</p>
          </div>
          <div className="resume-skills">
            <h2>Skills</h2>
            <SkillsList mainSkills={mainSkills} />
          </div>
          <div className="resume-languages">
            <h2>Languages</h2>
            <LanguagesList languageSkills={languageSkills} />
          </div>
        </div>
        <div className="main">
          <div className="resume-section1">
            <h1>PRACTICAL EXPERIENCE</h1>
            <ExperienceList
              experienceData={jobsData}
              className={"section1-list"}
            />
          </div>
          <div className="resume-section2">
            <h1>EDUCATION</h1>
            <ExperienceList
              experienceData={educationData}
              className={"section2-list"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
