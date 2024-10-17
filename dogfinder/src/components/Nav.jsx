import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <Link to="/dogs" className="Nav-link">
        All Dogs
      </Link>
      <Link to="/dogs/whiskey" className="Nav-link">
        Whiskey
      </Link>
      <Link to="/dogs/duke" className="Nav-link">
        Duke
      </Link>
      <Link to="/dogs/perry" className="Nav-link">
        Perry
      </Link>
    </div>
  );
}

export default Nav;
