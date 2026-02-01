import { useRef } from "react";
import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import Jobs from "./Jobs";
import Language from "./Language";
import Skills from "./Skills";
import Customization from "./Customization";
import closeIcon from "../assets/icons/close_24dp_343A40_FILL0_wght400_GRAD0_opsz24.svg";
import draftIcon from "../assets/icons/draft_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import checkIcon from "../assets/icons/check_circle_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import "../styles/Form.css";

function ResetModal({ modalRef, onReset, onClose }) {
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-header">
        <h3>Confirm</h3>
        <button
          className="close-btn"
          type="button"
          onClick={onClose}
          aria-label="close"
        >
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <p>Are you sure you want to reset the form?</p>
      <div className="modal-btns">
        <button type="button" onClick={onReset}>
          YES
        </button>
        <button type="button" onClick={onClose}>
          NO
        </button>
      </div>
    </dialog>
  );
}

export default function Form({
  personData,
  setPersonData,
  educationData,
  setEducationData,
  jobsData,
  setJobsData,
  languageSkills,
  setLanguageSkills,
  mainSkills,
  setMainSkills,
  setFormIsSubmitted,
  custom,
  setCustom,
}) {
  const modalRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setFormIsSubmitted(true);
  }

  const handleReset = () => {
    const newPersonData = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      introduction: "",
    };

    setPersonData(newPersonData);

    const newEducationData = [
      {
        title: "",
        place: "",
        startDate: "",
        endDate: "",
        description: "",
        id: crypto.randomUUID(),
      },
    ];

    setEducationData(newEducationData);

    const newJobsData = [
      {
        title: "",
        place: "",
        startDate: "",
        endDate: "",
        description: "",
        id: crypto.randomUUID(),
      },
    ];

    setJobsData(newJobsData);

    const newLanguageData = [
      {
        skill: "",
        rating: "",
        id: crypto.randomUUID(),
      },
    ];

    setLanguageSkills(newLanguageData);

    const newSkillsData = [{ skill: "", id: crypto.randomUUID() }];

    setMainSkills(newSkillsData);
    modalRef.current.close();
  };

  const handleOpenModal = () => {
    modalRef.current.showModal();
  };

  const handleClose = () => {
    modalRef.current.close();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-options">
        <button className="submit-btn" type="submit">
          <img src={checkIcon} alt="" />
          <span>SUBMIT</span>
        </button>
        <button className="reset-btn" type="button" onClick={handleOpenModal}>
          <img src={draftIcon} alt="" />
          <span>RESET</span>
        </button>
        <ResetModal
          modalRef={modalRef}
          onReset={handleReset}
          onClose={handleClose}
        />
      </div>
      <GeneralInformation
        personData={personData}
        setPersonData={setPersonData}
      />
      <Jobs jobsData={jobsData} setJobsData={setJobsData} />
      <Education
        educationData={educationData}
        setEducationData={setEducationData}
      />
      <Skills mainSkills={mainSkills} setMainSkills={setMainSkills} />
      <Language
        languageSkills={languageSkills}
        setLanguageSkills={setLanguageSkills}
      />
      <Customization custom={custom} setCustom={setCustom} />
    </form>
  );
}
