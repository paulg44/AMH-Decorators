import { Link } from "react-router-dom";
import "../assets/css/home.css";

function Home() {
  return (
    <div className="homepage">
      <h1>
        AM<span>H</span> Decorating
      </h1>
      <p>Excellence meets perfection.</p>
      <Link to={"/contact"} className="btn contactBtn">
        <span>Contact</span>
      </Link>
    </div>
  );
}

export default Home;
