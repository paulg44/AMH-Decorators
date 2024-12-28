import "../assets/css/ourWork.css";
import { Popup } from "reactjs-popup";
import data from "../assets/data/work.json";
import { useState } from "react";

function OurWork() {
  const [open, setOpen] = useState(false);
  const closePopUp = () => setOpen(false);

  return (
    <div className="ourWorkPage">
      <div className="pageHeader">
        <h2>
          Our Wo<span>r</span>k
        </h2>
      </div>
      <div className="galleryCardContainer">
        {data.map((project) => (
          <div className={`galleryCard card${project.title}`} key={project.id}>
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
              <button
                className="metadataBtn"
                onClick={() => setOpen((o) => !o)}
              >
                {project.link}
              </button>
              <Popup open={open} closeOnDocumentClick onClose={closePopUp}>
                <div className="popUpGallery">
                  <button className="close" onClick={closePopUp}>
                    &times;
                  </button>
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
