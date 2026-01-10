import "../styles/GeneralInformation.css";

const Input = ({ className, forId, label, type, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={forId}>{label}</label>
      <input type={type} id={forId} onChange={onChange}/>
    </div>
  );
};

export default function GeneralInformation({personData, setPersonData}) {
  return (
    <section className="general-information">
      <h1>General Information</h1>
      <div className="name">
        <Input
          className={"first-name"}
          forId={"firstName"}
          label={"First name"}
          type={"text"}
          onChange={(e) => setPersonData({...personData, firstName: e.target.value})}
        />
        <Input
          className={"last-name"}
          forId={"lastName"}
          label={"Last name"}
          type={"text"}
          onChange={(e) => setPersonData({...personData, lastName: e.target.value})}
        />
      </div>
      <div className="contact">
        <Input
          className={"phone"}
          forId={"phone"}
          label={"Phone number"}
          type={"tel"}
          onChange={(e) => setPersonData({...personData, phone: e.target.value})}
        />
        <Input
          className={"email"}
          forId={"email"}
          label={"E-Mail"}
          type={"email"}
          onChange={(e) => setPersonData({...personData, email: e.target.value})}
        />
      </div>
    </section>
  );
}
