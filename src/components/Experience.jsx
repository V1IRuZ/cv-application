import { Fragment } from "react";

function ExperienceCard({ data, handleRemove, setData }) {
  return (
    <div className="experience" key={data.id}>
      <div className="input">
        <label htmlFor={`title-${data.id}`}>Title</label>
        <input
          type="text"
          value={data.title}
          id={`title-${data.id}`}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id ? { ...item, title: e.target.value } : item
              )
            )
          }
        />
      </div>
      <div className="input">
        <label htmlFor={`place-${data.id}`}>Place</label>
        <input
          type="text"
          value={data.place}
          id={`title-${data.id}`}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id ? { ...item, place: e.target.value } : item
              )
            )
          }
        />
      </div>
      <div className="date">
        <div className="input">
          <label htmlFor={`start-${data.id}`}>Start date</label>
          <input
            type="text"
            value={data.startDate}
            id={`start-${data.id}`}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((item) =>
                  item.id === data.id
                    ? { ...item, startDate: e.target.value }
                    : item
                )
              )
            }
          />
        </div>
        <div className="input">
          <label htmlFor={`end-${data.id}`}>End date</label>
          <input
            type="text"
            value={data.endDate}
            id={`end-${data.id}`}
            onChange={(e) =>
              setData((prevData) =>
                prevData.map((item) =>
                  item.id === data.id
                    ? { ...item, endDate: e.target.value }
                    : item
                )
              )
            }
          />
        </div>
      </div>
      <div className="input">
        <label htmlFor={`description-${data.id}`}>Description</label>
        <textarea
          name="description"
          value={data.description}
          id={`description-${data.id}`}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id
                  ? { ...item, description: e.target.value }
                  : item
              )
            )
          }
        ></textarea>
      </div>
      <div className="remove">
        <button
          className="remove-experience"
          onClick={() => handleRemove(data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default function Experience({ experienceData, setExperienceData }) {
  const handleClick = (e) => {
    e.preventDefault();
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

  return (
    <Fragment>
      <div className="header">
        <h1>Education</h1>
        <button onClick={handleClick}>Add new...</button>
      </div>
      <div className="form-experience-list">
        {experienceData.length <= 0 ? (
          <p>No education...</p>
        ) : (
          experienceData.map((experience) => {
            return (
              <ExperienceCard
                data={experience}
                handleRemove={handleRemove}
                setData={setExperienceData}
              />
            );
          })
        )}
      </div>
    </Fragment>
  );
}
