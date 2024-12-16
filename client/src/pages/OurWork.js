import "../assets/css/ourWork.css";
import data from "../assets/data/work.json";

function OurWork() {
  return (
    <div className="ourWorkPage">
      <div className="page-header">
        <h2>
          Our Wo<span>r</span>k
        </h2>
      </div>
      <div className="galleryCardContainer">
        {data.map((project, index) => (
          <div className="galleryCard" key={project.id}>
            <img
              src={project.mainImage}
              alt={project.imageAlt}
              loading="lazy"
            />
            <div
              className="metadata"
              style={{ backgroundColor: `${project.bgColor}` }}
            >
              <h3>
                Project <span>{project.title}</span>
              </h3>
              <p>{project.shortDescription}</p>
              <button>{project.link}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWork;
