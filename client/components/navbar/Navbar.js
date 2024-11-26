import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarLinks">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/workShowcase"}>Our Work</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
