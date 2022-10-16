import TeamMembers from "./TeamMember";
import Teams from "./Teams";
import Header from "./Header";

const Employees = ({
  selectedTeam,
  employees,
  handleEmployeeCardSelection,
  handleTeamSelectionChange,
}) => {
  return (
    <>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <main className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-6">
            <Teams
              selectedTeam={selectedTeam}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <div className="card-collection">
              <TeamMembers
                employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardSelection={handleEmployeeCardSelection}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Employees;
