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
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/ourWork"}>Our Work</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
