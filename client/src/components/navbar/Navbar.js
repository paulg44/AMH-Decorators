import { NavLink } from "react-router-dom";
import "../../assets/css/navbar.css";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";

function Navbar() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleToggleNavMenu = () => {
    setNavMenuOpen((prevState) => !prevState);
  };

  const activeState = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid #949398ff" : "",
    };
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
          <NavLink to={"/"} onClick={handleToggleNavMenu} style={activeState}>
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={handleToggleNavMenu}
            style={activeState}
          >
            About
          </NavLink>
          <NavLink
            to={"/services"}
            onClick={handleToggleNavMenu}
            style={activeState}
          >
            Services
          </NavLink>
          <NavLink
            to={"/ourWork"}
            onClick={handleToggleNavMenu}
            style={activeState}
          >
            Our Work
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={handleToggleNavMenu}
            style={activeState}
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
