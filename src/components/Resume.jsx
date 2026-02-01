import "../styles/Resume.css";
import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";

function ExperienceListItem({ data, key }) {
  return (
    <li key={key}>
      <h2>{data.title}</h2>
      {data.place && (
        <h3>{`${data.place} ${data.startDate} – ${data.endDate}`}</h3>
      )}
      <p>{data.description}</p>
    </li>
  );
}

function ExperienceList({ experienceData, className }) {
  return (
    <ul className={className}>
      {experienceData.length > 0 &&
        experienceData.map((item) => (
          <ExperienceListItem data={item} key={item.id} />
        ))}
    </ul>
  );
}

function LanguagesList({ languageSkills }) {
  return (
    <ul>
      {languageSkills.map(
        (language) =>
          language.skill && (
            <li key={language.id}>
              {language.skill} – {language.rating}
            </li>
          ),
      )}
    </ul>
  );
}

function SkillsList({ mainSkills }) {
  return (
    <ul>
      {mainSkills.map(
        (item) =>
          item.skill && (
            <li key={item.id}>
              <h3>{item.skill}</h3>
              {item.description && <p>{item.description}</p>}
            </li>
          ),
      )}
    </ul>
  );
}

export default function Resume({
  personData,
  educationData,
  jobsData,
  languageSkills,
  mainSkills,
  custom,
}) {
  const name = `${personData.firstName} ${personData.lastName}`;

  return (
    <div className="container">
      <div className="a4-container">
        <div className="resume" style={{ fontFamily: custom.font }}>
          <div className="top" style={{ borderColor: custom.color }}>
            <div className="resume-header">
              {custom.resumeTitle && (
                <h1 className="resume-main-title">{custom.resumeTitle}</h1>
              )}
              <h1 className="resume-name">{name}</h1>
            </div>
          </div>
          <div className="resume-contact" style={{ borderColor: custom.color }}>
            <div className="resume-phone">
              <img src={phoneIcon} alt="phone" width={30} height={30} />
              <p>{personData.phone}</p>
            </div>
            <div className="resume-email">
              <img src={mailIcon} alt="email" />
              <p>{personData.email}</p>
            </div>
          </div>
          <div className="resume-content">
            <div className="aside" style={{ borderColor: custom.color }}>
              <div className="resume-introduction">
                {custom.introductionTitle && (
                  <h2>{custom.introductionTitle}</h2>
                )}
                <p>{personData.introduction}</p>
              </div>
              <div className="resume-skills">
                {custom.skillsTitle && <h2>{custom.skillsTitle}</h2>}
                <SkillsList mainSkills={mainSkills} />
              </div>
              <div className="resume-languages">
                {custom.languagesTitle && <h2>{custom.languagesTitle}</h2>}
                <LanguagesList languageSkills={languageSkills} />
              </div>
            </div>
            <div className="main">
              <div className="resume-jobs">
                {custom.jobsTitle && <h1>{custom.jobsTitle}</h1>}
                <ExperienceList
                  experienceData={jobsData}
                  className={"jobs-list"}
                />
              </div>
              <div className="resume-education">
                {custom.educationTitle && <h1>{custom.educationTitle}</h1>}
                <ExperienceList
                  experienceData={educationData}
                  className={"education-list"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
