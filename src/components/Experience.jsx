export default function Experience({ data, handleRemove, setEducationData }) {
  return (
    <div className="experience" key={data.id}>
      <div className="input">
        <label htmlFor={`title-${data.id}`}>Title</label>
        <input
          type="text"
          value={data.title}
          id={`title-${data.id}`}
          onChange={(e) =>
            setEducationData((prevData) =>
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
            setEducationData((prevData) =>
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
              setEducationData((prevData) =>
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
              setEducationData((prevData) =>
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
          name="education"
          value={data.description}
          id={`description-${data.id}`}
          onChange={(e) =>
            setEducationData((prevData) =>
              prevData.map((item) =>
                item.id === data.id
                  ? { ...item, description: e.target.value }
                  : item
              )
            )
          }
        ></textarea>
      </div>
      <div>
        <button onClick={() => handleRemove(data.id)}>Remove</button>
      </div>
    </div>
  );
}
