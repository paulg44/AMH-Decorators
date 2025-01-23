import { Link } from "react-router-dom";
import "../assets/css/home.css";
import SEO from "../components/seo/SEO.js";

function Home() {
  return (
    <div className="homepage">
      <SEO
        title="Home | Painting & Decorating Services"
        description="Professional painting and decorating services. Transform your space with expert craftsmanship."
        keywords="painting, decorating, home improvement, professional painters"
        url="https://amhdecorating.co.uk/"
      />
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
