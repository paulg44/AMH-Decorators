import "../../assets/css/services.css";

function Services() {
  return (
    <div className="services-content page-header container services">
      <h2>
        S<span>e</span>rvices
      </h2>

      <div className="services-cards ser-info container">
        <div className="paint card">
          <h3>Painting</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            laudantium voluptate voluptatum minima optio quibusdam doloremque
            eligendi voluptatibus, error quis dolorum et omnis ipsam rem
            repellendus, ad repudiandae totam est cumque aut nostrum eveniet,
            recusandae sunt qui! Nam, excepturi quaerat.
          </p>
        </div>
        <div className="decor card">
          <h3>Decoration</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            laudantium voluptate voluptatum minima optio quibusdam doloremque
            eligendi voluptatibus, error quis dolorum et omnis ipsam rem
            repellendus, ad repudiandae totam est cumque aut nostrum eveniet,
            recusandae sunt qui! Nam, excepturi quaerat.
          </p>
        </div>
        <div className="repairs card">
          <h3>Minor Repairs</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            laudantium voluptate voluptatum minima optio quibusdam doloremque
            eligendi voluptatibus, error quis dolorum et omnis ipsam rem
            repellendus, ad repudiandae totam est cumque aut nostrum eveniet,
            recusandae sunt qui! Nam, excepturi quaerat.
          </p>
        </div>
      </div>

      <div className="service-icons container">
        <div className="serv-icon">
          <h4>Free Estimations</h4>
          <i className="fa-solid fa-calculator fa-5x"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            facere!
          </p>
        </div>
        <div className="serv-icon">
          <h4>Fully Insured</h4>
          <i className="fa-solid fa-pen-to-square fa-5x"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            facere!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
