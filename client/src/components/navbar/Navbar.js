import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";

function Navbar() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const openNavMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  const closeNavMenu = () => {
    setNavMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navMenu" onClick={openNavMenu}>
        <FaBars />
      </div>
      <div className={`navbarLinksContainer ${navMenuOpen ? "open" : ""}`}>
        <ul className="navLinks">
          {navMenuOpen && (
            <FaTimesCircle className="navCloseBtn" onClick={closeNavMenu} />
          )}
          <Link to={"/"} onClick={closeNavMenu}>
            Home
          </Link>
          <Link to={"/about"} onClick={closeNavMenu}>
            About
          </Link>
          <Link to={"/services"} onClick={closeNavMenu}>
            Services
          </Link>
          <Link to={"/ourWork"} onClick={closeNavMenu}>
            Our Work
          </Link>
          <Link to={"/contact"} onClick={closeNavMenu}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
