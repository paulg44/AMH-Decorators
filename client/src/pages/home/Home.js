import { Link } from "react-router-dom";
import "../../assets/css/home.css";
import homeBackground from "../../assets/images/paintbrush4.jpg";

function Home() {
  return (
    <div
      className="homepage"
      style={{
        background: `url(${homeBackground}) no-repeat center center/cover`,
      }}
    >
      <h1>
        AM<span>H</span> Decorating
      </h1>
      <p>Excellence meets perfection.</p>
      <Link to={"/contact"} className="btn contact-btn">
        Contact
      </Link>
    </div>
  );
}

export default Home;
