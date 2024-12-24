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

      <div className="serviceIcons container">
        <div className="servIcon">
          <h4>Free Estimations</h4>
          <div className="servicesIcon">
            <FaCalculator />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            facere!
          </p>
        </div>
        <div className="servIcon">
          <h4>Fully Insured</h4>
          <div className="servicesIcon">
            <FaPenSquare />
          </div>
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
