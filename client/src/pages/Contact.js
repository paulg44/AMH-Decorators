import "../assets/css/contact.css";
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
          <a href="mailto:A.M.H_Decorating@mail.com">
            A.M.H_Decorating@mail.com
          </a>
        </div>
        <div className="container phone card">
          <FaPhone className="faPhone" />
          <p>Alternatively, give us a call to discuss your next project.</p>
          <div className="contactNumbers">
            <a href="tel:07436814786">07436814786</a>
            <a href="tel:01332 669822">01332 669822</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
