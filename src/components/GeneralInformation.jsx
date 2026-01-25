import { useState } from "react";
import arrowUpIcon from "../assets/icons/keyboard_arrow_up_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";

const Input = ({ className, forId, label, type, value, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={forId}>{label}</label>
      <input
        type={type}
        id={forId}
        value={value}
        onChange={onChange}
      />
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
      {isActive && (
        <div className="extension">
          <div className="name">
            <Input
              className={"first-name"}
              forId={"firstName"}
              label={"First name"}
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
              className={"last-name"}
              forId={"lastName"}
              label={"Last name"}
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
              className={"phone"}
              forId={"phone"}
              label={"Phone number"}
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
              className={"email"}
              forId={"email"}
              label={"E-Mail"}
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
            <label htmlFor="introduction">Introduction</label>
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
        </div>
      )}
    </section>
  );
}
