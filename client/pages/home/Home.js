import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage-content container homepage">
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
