import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

function TeamMemberCard({
  employee,
  selectedTeam,
  handleEmployeeCardSelection,
}) {
  return (
    <div
      id={employee.id}
      className={
        "card m-2" + (employee.teamName === selectedTeam ? " standout" : "")
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardSelection}
    >
      <img
        src={employee.gender === "male" ? maleProfile : femaleProfile}
        className="card-img-top"
        alt={employee.gender === "male" ? "male profile" : "female profile"}
      />
      <div className="card-body">
        <h5 className="card-tirle">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
