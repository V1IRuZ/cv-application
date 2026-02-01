import { Fragment } from "react";
import arrowUpIcon from "../assets/icons/keyboard_arrow_up_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import plusIcon from "../assets/icons/add_2_24dp_F9FAF8_FILL0_wght400_GRAD0_opsz24.svg";
import { motion, AnimatePresence } from "motion/react";

function ExperienceCard({ data, index, handleRemove, setData }) {
  const listNumber = index + 1;

  return (
    <div className="experience">
      <h2>Experience #{listNumber}</h2>
      <div className="input">
        <label htmlFor={`title-${data.id}`}>TITLE</label>
        <input
          type="text"
          value={data.title}
          id={`title-${data.id}`}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id ? { ...item, title: e.target.value } : item,
              ),
            )
          }
        />
      </div>
      <div className="input">
        <label htmlFor={`place-${data.id}`}>PLACE</label>
        <input
          type="text"
          value={data.place}
          id={`title-${data.id}`}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id ? { ...item, place: e.target.value } : item,
              ),
            )
          }
        />
      </div>
      <div className="date">
        <div className="input">
          <label htmlFor={`start-${data.id}`}>START DATE</label>
          <input
            type="text"
            value={data.startDate}
            id={`start-${data.id}`}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((item) =>
                  item.id === data.id
                    ? { ...item, startDate: e.target.value }
                    : item,
                ),
              )
            }
          />
        </div>
        <div className="input">
          <label htmlFor={`end-${data.id}`}>END DATE</label>
          <input
            type="text"
            value={data.endDate}
            id={`end-${data.id}`}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((item) =>
                  item.id === data.id
                    ? { ...item, endDate: e.target.value }
                    : item,
                ),
              )
            }
          />
        </div>
      </div>
      <div className="input">
        <label htmlFor={`description-${data.id}`}>DESCRIPTION</label>
        <textarea
          name="description"
          value={data.description}
          id={`description-${data.id}`}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id
                  ? { ...item, description: e.target.value }
                  : item,
              ),
            )
          }
        />
      </div>
      <div className="remove">
        <button
          className="remove-btn"
          type="button"
          onClick={() => handleRemove(data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default function Experience({
  sectionHeader,
  experienceData,
  setExperienceData,
  isActive,
  setIsActive,
}) {
  const onAdd = () => {
    setExperienceData((prevData) => [
      ...prevData,
      {
        title: "",
        place: "",
        startDate: "",
        endDate: "",
        description: "",
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleRemove = (id) => {
    const newList = experienceData.filter((experience) => experience.id !== id);
    setExperienceData(newList);
  };

  const onShow = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <Fragment>
      <div className="header">
        <h1>{sectionHeader}</h1>
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
            <div className="form-experience-list">
              <AnimatePresence>
                {experienceData.map((experience, index) => {
                  return (
                    <motion.div
                      key={experience.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ExperienceCard
                        data={experience}
                        index={index}
                        handleRemove={handleRemove}
                        setData={setExperienceData}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            <div className="add">
              <button className="add-btn" type="button" onClick={onAdd}>
                <img src={plusIcon} alt="" />
                <span>Add new</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
