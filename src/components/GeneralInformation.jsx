import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import arrowUpIcon from "../assets/icons/keyboard_arrow_up_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";

const Input = ({ forId, label, type, value, onChange }) => {
  return (
    <div className="input">
      <label htmlFor={forId}>{label}</label>
      <input type={type} id={forId} value={value} onChange={onChange} />
    </div>
  );
};

export default function GeneralInformation({ personData, setPersonData }) {
  const [isActive, setIsActive] = useState(true);

  const onShow = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <section className="general-information">
      <div className="header">
        <h1>General Information</h1>
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
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="name">
              <Input
                forId={"firstName"}
                label={"FIRST NAME"}
                type={"text"}
                value={personData.firstName}
                onChange={(e) =>
                  setPersonData((prevData) => ({
                    ...prevData,
                    firstName: e.target.value,
                  }))
                }
              />
              <Input
                forId={"lastName"}
                label={"LAST NAME"}
                type={"text"}
                value={personData.lastName}
                onChange={(e) =>
                  setPersonData((prevData) => ({
                    ...prevData,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>
            <div className="contact">
              <Input
                forId={"phone"}
                label={"PHONE NUMBER"}
                type={"tel"}
                value={personData.phone}
                onChange={(e) =>
                  setPersonData((prevData) => ({
                    ...prevData,
                    phone: e.target.value,
                  }))
                }
              />
              <Input
                forId={"email"}
                label={"EMAIL"}
                type={"email"}
                value={personData.email}
                onChange={(e) =>
                  setPersonData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="input">
              <label htmlFor="introduction">INTRODUCTION</label>
              <textarea
                name="intro"
                id="introduction"
                value={personData.introduction}
                onChange={(e) =>
                  setPersonData((prevData) => ({
                    ...prevData,
                    introduction: e.target.value,
                  }))
                }
              ></textarea>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
