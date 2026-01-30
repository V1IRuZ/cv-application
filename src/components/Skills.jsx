import { useState } from "react";
import arrowUpIcon from "../assets/icons/keyboard_arrow_up_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import plusIcon from "../assets/icons/add_2_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";

function SkillInput({ data, index, onRemove, setData }) {
  const skillNumber = index + 1;

  return (
    <div className="skill-card">
      <h2>Skill #{skillNumber}</h2>
      <div className="input">
        <label htmlFor={`skill-${data.id}`}>SKILL</label>
        <input
          type="text"
          id={`skill-${data.id}`}
          value={data.skill}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id ? { ...item, skill: e.target.value } : item,
              ),
            )
          }
        />
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

export default function Skills({ mainSkills, setMainSkills }) {
  const [isActive, setIsActive] = useState(false);

  const onShow = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const onAdd = () => {
    setMainSkills((prev) => [...prev, { skill: "", id: crypto.randomUUID() }]);
  };

  const onRemove = (id) => {
    const newSkills = mainSkills.filter((skill) => skill.id !== id);
    setMainSkills(newSkills);
  };

  return (
    <section className="skills">
      <div className="header">
        <h1>Skills</h1>
        <button
          className="show-btn"
          type="button"
          aria-label={isActive ? "hide" : "show"}
          onClick={onShow}
        >
          <img src={isActive ? arrowUpIcon : arrowDownIcon} alt="" />
        </button>
      </div>
      {isActive && (
        <div className="extension">
          <div className="form-skills-list">
            {mainSkills.map((skill, index) => (
              <SkillInput
                data={skill}
                index={index}
                onRemove={onRemove}
                setData={setMainSkills}
              />
            ))}
          </div>
          <div className="add">
            <button type="button" onClick={onAdd} className="add-btn">
              <img src={plusIcon} alt="" />
              <span>Add new</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
