import { useState } from "react";
import arrowUpIcon from "../assets/icons/keyboard_arrow_up_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";

export default function Customization({ custom, setCustom }) {
  const [isActive, setIsActive] = useState(true);

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
      {isActive && (
        <div className="extension">
          <div className="custom-list">
            <div className="input">
              <label htmlFor="cv-title">CV Title</label>
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
              <label htmlFor="introduction-title">Introduction Title</label>
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
              <label htmlFor="jobs-title">Practical Experience Title</label>
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
              <label htmlFor="education-title">Education Title</label>
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
              <label htmlFor="skills-title">Skills Title</label>
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
              <label htmlFor="languages-title">Languages Title</label>
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
            <div className="input-color">
              <span>CV Color:</span>
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
          </div>
        </div>
      )}
    </section>
  );
}
