function SkillInput({ data, index, onRemove, setData }) {
  const skillNumber = index + 1;

  return (
    <div className="skill-card">
      <h2>Skill #{skillNumber}</h2>
      <div className="input">
        <label htmlFor={`skill-${data.id}`}>Skill</label>
        <input
          type="text"
          id={`skill-${data.id}`}
          value={data.skill}
          onChange={(e) =>
            setData((prevData) =>
              prevData.map((item) =>
                item.id === data.id ? { ...item, skill: e.target.value } : item
              )
            )
          }
        />
      </div>
      <div className="remove">
        <button className="remove-btn" onClick={() => onRemove(data.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default function Skills({ mainSkills, setMainSkills }) {
  const onAdd = (e) => {
    e.preventDefault();
    setMainSkills((prev) => [...prev, { skill: "", id: crypto.randomUUID() }]);
  };

  const onRemove = (id) => {
    const newSkills = mainSkills.filter((skill) => skill.id !== id);
    setMainSkills(newSkills);
  };

  return (
    <section className="skills">
      <div className="header">
        <h1>Skills</h1>
        <button onClick={onAdd}>Add new...</button>
      </div>
      {mainSkills.map((skill, index) => (
        <SkillInput
          data={skill}
          index={index}
          onRemove={onRemove}
          setData={setMainSkills}
        />
      ))}
    </section>
  );
}
