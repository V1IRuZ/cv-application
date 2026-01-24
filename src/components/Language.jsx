import { useState } from "react";

function LanguageInput({ data, index, onRemove, setData }) {
  const languageNumber = index + 1;

  return (
    <div className="language-card">
      <h2>Language #{languageNumber}</h2>
      <div className="language-skill">
        <div className="input">
          <label htmlFor={`language-${data.id}`}>Language</label>
          <input
            type="text"
            id={`language-${data.id}`}
            value={data.skill}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((item) =>
                  item.id === data.id
                    ? { ...item, skill: e.target.value }
                    : item,
                ),
              )
            }
          />
        </div>
        <div className="input">
          <label htmlFor={`rating-${data.id}`}>Skill level</label>
          <input
            type="text"
            id={`rating-${data.id}`}
            value={data.rating}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((item) =>
                  item.id === data.id
                    ? { ...item, rating: e.target.value }
                    : item,
                ),
              )
            }
          />
        </div>
      </div>
      <div className="remove">
        <button
          className="remove-btn"
          type="button"
          onClick={() => onRemove(data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default function Language({ languageSkills, setLanguageSkills }) {
  const [isActive, setIsActive] = useState(true);

  const onShow = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const onAdd = () => {
    setLanguageSkills((prev) => [
      ...prev,
      { skill: "", rating: "", id: crypto.randomUUID() },
    ]);
  };

  const onRemove = (id) => {
    const newLanguages = languageSkills.filter(
      (language) => language.id !== id,
    );

    setLanguageSkills(newLanguages);
  };

  return (
    <section className="language">
      <div className="header">
        <h1>Languages</h1>
        <button className="show-btn" type="button" onClick={onShow}>
          {isActive ? "Hide" : "Show"}
        </button>
      </div>
      {isActive && (
        <div className="extension">
          <div className="form-language-list">
            {languageSkills.map((language, index) => (
              <LanguageInput
                data={language}
                index={index}
                onRemove={onRemove}
                setData={setLanguageSkills}
              />
            ))}
          </div>
          <div className="add">
            <button type="button" onClick={onAdd}>
              Add new...
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
