import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expanded-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
