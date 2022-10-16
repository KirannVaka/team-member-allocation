import "./App.css";
import { useEffect, useState } from "react";
import Employees from "./Employees";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  const handleTeamSelectionChange = ({ target }) => {
    setTeam(target.value);
  };

  const handleEmployeeCardSelection = ({ currentTarget }) => {
    let updatedEmployees = employees.map((employee) =>
      employee.id === parseInt(currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(updatedEmployees);
  };

  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <Router>
      <Nav />

      <Routes>
        <Route
          path="/team-member-allocation"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardSelection={handleEmployeeCardSelection}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        />
        <Route
          path="team-member-allocation/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
