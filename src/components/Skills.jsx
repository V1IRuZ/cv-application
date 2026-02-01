import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import arrowUpIcon from "../assets/icons/keyboard_arrow_up_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import plusIcon from "../assets/icons/add_2_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";

function SkillInput({ data, index, onRemove, setData }) {
  const cardNumber = index + 1;

  return (
    <div className="skill-card">
      <h2>Skill #{cardNumber}</h2>
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
      <div className="input">
        <label htmlFor={`description-${data.id}`}>DESCRIPTION</label>
        <textarea
          name="description"
          id={`description-${data.id}`}
          value={data.description}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id ? { ...item, description: e.target.value } : item,
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

  const handleShowHide = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const handleAdd = () => {
    setMainSkills((prev) => [...prev, { skill: "", id: crypto.randomUUID() }]);
  };

  const handleRemove = (id) => {
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
          onClick={handleShowHide}
        >
          <img src={isActive ? arrowUpIcon : arrowDownIcon} alt="" />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="form-skills-list">
              <AnimatePresence>
                {mainSkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SkillInput
                      data={skill}
                      index={index}
                      onRemove={handleRemove}
                      setData={setMainSkills}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="add">
              <button type="button" onClick={handleAdd} className="add-btn">
                <img src={plusIcon} alt="" />
                <span>Add new</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
