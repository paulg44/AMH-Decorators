import "../assets/css/contact.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="pageHeader container contact">
      <h2>
        C<span>o</span>ntact
      </h2>

      <div id="contact-links" className="contactLinks">
        <div className="container email card">
          <FaEnvelope className="faEnvelope" />
          <p>Please email us and we will get back to as soon as possible.</p>
          <Link to={"/"}>AMH Decorating</Link>
        </div>
        <div className="container phone card">
          <FaPhone className="faPhone" />
          <p>Alternatively, give us a call to discuss your next project.</p>
          <Link to={"/"}>07806691333</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
