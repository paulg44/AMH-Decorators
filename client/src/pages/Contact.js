import "../assets/css/contact.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div class="contact-content pageHeader container contact">
      <h2>
        C<span>o</span>ntact
      </h2>

      <div id="contact-links" class="contactLinks">
        <div class="container email card">
          <FaEnvelope className="faEnvelope" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nesciunt.
          </p>
          <Link to={"/"}>AMH Decorating</Link>
        </div>
        <div class="container phone card">
          <FaPhone className="faPhone" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nesciunt.
          </p>
          <Link to={"/"}>07806691333</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
