import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import arrowUpIcon from "../assets/icons/keyboard_arrow_up_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import plusIcon from "../assets/icons/add_2_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";

function LanguageInput({ data, index, onRemove, setData }) {
  const cardNumber = index + 1;

  return (
    <div className="language-card">
      <h2>Language #{cardNumber}</h2>
      <div className="language-skill">
        <div className="input">
          <label htmlFor={`language-${data.id}`}>LANGUAGE</label>
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
          <label htmlFor={`rating-${data.id}`}>SKILL LEVEL</label>
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
  const [isActive, setIsActive] = useState(false);

  const handleShowHide = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const handleAdd = () => {
    setLanguageSkills((prev) => [
      ...prev,
      { skill: "", rating: "", id: crypto.randomUUID() },
    ]);
  };

  const handleRemove = (id) => {
    const newLanguages = languageSkills.filter(
      (language) => language.id !== id,
    );

    setLanguageSkills(newLanguages);
  };

  return (
    <section className="language">
      <div className="header">
        <h1>Languages</h1>
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
            <div className="form-language-list">
              <AnimatePresence>
                {languageSkills.map((language, index) => (
                  <motion.div
                    key={language.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <LanguageInput
                      data={language}
                      index={index}
                      onRemove={handleRemove}
                      setData={setLanguageSkills}
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
