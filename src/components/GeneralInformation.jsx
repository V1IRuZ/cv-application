import "../styles/GeneralInformation.css";

const Input = ({ className, forId, label, type, value, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={forId}>{label}</label>
      <input
        type={type}
        id={forId}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default function GeneralInformation({ personData, setPersonData }) {
  return (
    <section className="general-information">
      <h1>General Information</h1>
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
    </section>
  );
}
