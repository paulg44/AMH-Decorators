import "../assets/css/ourWork.css";
import { Popup } from "reactjs-popup";
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
        {data.map((project) => (
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
              <Popup
                trigger={
                  <button className="metadataBtn">{project.link}</button>
                }
                modal
                nested
              >
                <div className="popUpGallery">
                  <p className="popUpDescription">{project.longDescription}</p>
                  <div className="popUpImageContainer">
                    {project.galleryworkImages.map((img) => (
                      <img src={img} alt="test" />
                    ))}
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWork;
