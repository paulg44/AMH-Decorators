import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";

function Navbar() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleToggleNavMenu = () => {
    setNavMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div
        className={`navMenu ${navMenuOpen ? "open" : ""}`}
        onClick={handleToggleNavMenu}
      >
        <FaBars className="mobileBars" />
      </div>
      <div className={`navbarLinksContainer ${navMenuOpen ? "open" : ""}`}>
        <ul className="navLinks">
          {navMenuOpen && (
            <FaTimesCircle
              className="navCloseBtn"
              onClick={handleToggleNavMenu}
            />
          )}
          <Link to={"/"} onClick={handleToggleNavMenu}>
            Home
          </Link>
          <Link to={"/about"} onClick={handleToggleNavMenu}>
            About
          </Link>
          <Link to={"/services"} onClick={handleToggleNavMenu}>
            Services
          </Link>
          <Link to={"/ourWork"} onClick={handleToggleNavMenu}>
            Our Work
          </Link>
          <Link to={"/contact"} onClick={handleToggleNavMenu}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
