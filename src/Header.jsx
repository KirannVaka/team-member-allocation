const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <p>
            Total Team {teamMemberCount === 1 ? "member" : "members"} in
            {selectedTeam} is: {teamMemberCount}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
