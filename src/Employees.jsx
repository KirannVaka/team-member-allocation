import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = ({
  selectedTeam,
  employees,
  handleEmployeeCardSelection,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            name="teams"
            id="teams"
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                id={employee.id}
                key={employee.id}
                className={
                  "card m-2" +
                  (employee.teamName === selectedTeam ? " standout" : "")
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardSelection}
              >
                <img
                  src={employee.gender === "male" ? maleProfile : femaleProfile}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-tirle">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:</b> {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
