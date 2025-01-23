import "../assets/css/ourWork.css";
import data from "../assets/data/work.json";
import { useState } from "react";
import SEO from "../components/seo/SEO.js";

function OurWork() {
  const [open, setOpen] = useState(false);

  const closePopUp = () => setOpen(false);
  const togglePopUp = () => setOpen(!open);

  return (
    <div className="ourWorkPage">
      <SEO
        title="Our Work | Painting & Decorating Services"
        description="View our work gallery of images and content"
        keywords="painting, decorating, home improvement, professional painters"
        url="https://amhdecorating.co.uk/ourWork"
      />
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
              style={{
                backgroundColor: `${project.bgColor}`,
                color: `${project.color}`,
              }}
            >
              <h3>Project {project.title}</h3>
              <p className="popOverP">{project.shortDescription}</p>
              <button className="metadataBtn" onClick={togglePopUp}>
                {project.link}
              </button>

              {/* Pop Up */}
              {open && (
                <>
                  <div
                    className="backgroundOverlay"
                    onClick={() => setOpen(false)}
                  ></div>
                  <div className={`popUpGallery ${open ? "open" : ""}`}>
                    <button className="close" onClick={closePopUp}>
                      &times;
                    </button>
                    <p className="popUpDescription">
                      {project.longDescription}
                    </p>
                    <div className="popUpImageContainer">
                      {project.galleryworkImages.map((galleryImage, index) => (
                        <div
                          key={index}
                          className={`popUpCard popUp${galleryImage.class}`}
                        >
                          <img src={galleryImage.img} alt={galleryImage.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWork;
