import TeamMemberCard from "./TeamMemberCard";

function TeamMembers({ employees, selectedTeam, handleEmployeeCardSelection }) {
  return employees.map((employee) => (
    <TeamMemberCard
      key={employee.id}
      employee={employee}
      selectedTeam={selectedTeam}
      handleEmployeeCardSelection={handleEmployeeCardSelection}
    />
  ));
}

export default TeamMembers;
