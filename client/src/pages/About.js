import "../assets/css/about.css";
import SEO from "../components/seo/SEO.js";

function About() {
  return (
    <div className="about">
      <SEO
        title="About Us | Painting & Decorating Services"
        description="Learn more about our journey, values, and commitment to quality."
        keywords="painting services, decorating, home renovation"
        url="https://amhdecorating.co.uk/about"
      />
      <div className="aboutContent pageHeader">
        <h2>
          A<span>b</span>out
        </h2>
      </div>

      <div className="aboutInfo">
        <div className="aboutCards">
          <div className="card">
            <h3>Origins</h3>
            <p>
              Founded with a passion for craftsmanship, our company has been
              serving the local community with dedication and attention to
              detail for years.
            </p>
          </div>
          <div className="vision card">
            <h3>Vision</h3>
            <p>
              Our goal is to enhance homes and spaces through exceptional design
              and superior service, creating environments you’ll love.
            </p>
          </div>
          <div className="card">
            <h3>Values</h3>
            <p>
              We prioritize quality, trust, and customer satisfaction, ensuring
              every project is completed to the highest standards with care and
              professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
