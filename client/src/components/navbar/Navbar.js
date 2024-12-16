import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarLinks">
        <ul>
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
