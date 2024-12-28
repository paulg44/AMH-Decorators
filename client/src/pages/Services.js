import "../assets/css/services.css";
import { FaCalculator, FaPenSquare } from "react-icons/fa";

function Services() {
  return (
    <div className="servicesContent pageHeader container services">
      <h2>
        S<span>e</span>rvices
      </h2>

      <div className="servicesCards servicesInfo container">
        <div className="paint card">
          <h3>Painting</h3>
          <p>
            Transform your space with precision painting services tailored to
            your preferences. From feature walls to complete interior and
            exterior projects, we ensure vibrant, lasting results.
          </p>
        </div>
        <div className="decor card">
          <h3>Decoration</h3>
          <p>
            Elevate your home’s aesthetic with expert decorative finishes,
            including wallpapering, textured designs, and custom accents that
            reflect your style.
          </p>
        </div>
        <div className="repairs card">
          <h3>Minor Repairs</h3>
          <p>
            Address wear and tear with seamless repair solutions, from patching
            cracks to restoring surfaces, ensuring a flawless foundation for
            your decorating projects.
          </p>
        </div>
      </div>

      <div className="serviceIcons container">
        <div className="servIcon">
          <h4>Free Estimations</h4>
          <div className="servicesIcon">
            <FaCalculator />
          </div>
          <p>We offer free, no hassle estimation's for any size job.</p>
        </div>
        <div className="servIcon">
          <h4>Fully Insured</h4>
          <div className="servicesIcon">
            <FaPenSquare />
          </div>
          <p>
            AMH Decorator's are fully insured for peace of mind during the
            entirety of works on your project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
