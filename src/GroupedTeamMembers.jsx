import { useState } from "react";

function GroupedTeamMembers({ employees, selectedTeam, setTeam }) {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMemebers());

  //grouping employees depending on their teamName
  function groupTeamMemebers() {
    let allTeamNames = ["TeamA", "TeamB", "TeamC", "TeamD"];

    let teams = [];

    for (let each of allTeamNames) {
      let teamMembers = employees.filter(
        (employee) => employee.teamName === each
      );
      let teamTemp = {
        team: each,
        teamMembers,
        collapsed: selectedTeam === each ? false : true,
      };
      teams.push(teamTemp);
    }

    return teams;
  }

  const handleTeamClick = ({ currentTarget }) => {
    let updatedGroupedData = groupedEmployees.map((groupData) =>
      groupData.team === currentTarget.id
        ? { ...groupData, collapsed: !groupData.collapsed }
        : groupData
    );

    setGroupedData(updatedGroupedData);
    setTeam(currentTarget.id);
  };

  return (
    <main className="container ">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className=" card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.teamMembers.map((teamMember) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {teamMember.fullName}
                      </span>
                    </h5>
                    <p>Designation: {teamMember.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default GroupedTeamMembers;
