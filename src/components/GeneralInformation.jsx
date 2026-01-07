import "../styles/GeneralInformation.css";

const Input = ({ className, forId, label, type }) => {
  return (
    <div className={className}>
      <label htmlFor={forId}>{label}</label>
      <input type={type} id={forId} />
    </div>
  );
};

export default function GeneralInformation() {
  return (
    <section>
      <h1>THIS WORKS!</h1>
      <div className="name">
        <Input
          className={"first-name"}
          forId={"firstName"}
          label={"First name"}
          type={"text"}
        />
        <Input
          className={"last-name"}
          forId={"lastName"}
          label={"Last name"}
          type={"text"}
        />
      </div>
    </section>
  );
}
