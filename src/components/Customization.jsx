import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import arrowUpIcon from "../assets/icons/keyboard_arrow_up_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";

export default function Customization({ custom, setCustom }) {
  const [isActive, setIsActive] = useState(false);

  const onShow = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <section className="customization">
      <div className="header">
        <h1>Customization</h1>
        <button
          className="show-btn"
          type="button"
          aria-label={isActive ? "hide" : "show"}
          onClick={onShow}
        >
          <img src={isActive ? arrowUpIcon : arrowDownIcon} alt="" />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3 }}
          >
            <div className="custom-list">
              <div className="input-color">
                <span>COLOR</span>
                <label
                  htmlFor="cv-color"
                  className="color-ui"
                  style={{ backgroundColor: custom.color }}
                >
                  <input
                    style={{ backgroundColor: custom.color }}
                    className="cv-color"
                    type="color"
                    id="cv-color"
                    value={custom.color}
                    onChange={(e) =>
                      setCustom((prevData) => ({
                        ...prevData,
                        color: e.target.value,
                      }))
                    }
                  />
                </label>
              </div>
              <div className="input">
                <label htmlFor="font">FONT</label>
                <select
                  name="font"
                  id="font"
                  value={custom.font}
                  onChange={(e) =>
                    setCustom((prevData) => ({
                      ...prevData,
                      font: e.target.value,
                    }))
                  }
                >
                  <option value="serif">serif</option>
                  <option value="sans-serif">sans-serif</option>
                  <option value="monospace">monospace</option>
                  <option value="system-ui">system-ui</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="cv-title">RESUME TITLE</label>
                <input
                  type="text"
                  id="cv-title"
                  value={custom.resumeTitle}
                  onChange={(e) =>
                    setCustom((prevData) => ({
                      ...prevData,
                      resumeTitle: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="introduction-title">INTRODUCTION TITLE</label>
                <input
                  type="text"
                  id="introduction-title"
                  value={custom.introductionTitle}
                  onChange={(e) =>
                    setCustom((prevData) => ({
                      ...prevData,
                      introductionTitle: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="jobs-title">PRACTICAL EXPERIENCE TITLE</label>
                <input
                  type="text"
                  id="jobs-title"
                  value={custom.jobsTitle}
                  onChange={(e) =>
                    setCustom((prevData) => ({
                      ...prevData,
                      jobsTitle: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="education-title">EDUCATION TITLE</label>
                <input
                  type="text"
                  id="education-title"
                  value={custom.educationTitle}
                  onChange={(e) =>
                    setCustom((prevData) => ({
                      ...prevData,
                      educationTitle: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="skills-title">SKILLS TITLE</label>
                <input
                  type="text"
                  id="skills-title"
                  value={custom.skillsTitle}
                  onChange={(e) =>
                    setCustom((prevData) => ({
                      ...prevData,
                      skillsTitle: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="languages-title">LANGUAGES TITLE</label>
                <input
                  type="text"
                  id="languages-title"
                  value={custom.languagesTitle}
                  onChange={(e) =>
                    setCustom((prevData) => ({
                      ...prevData,
                      languagesTitle: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
