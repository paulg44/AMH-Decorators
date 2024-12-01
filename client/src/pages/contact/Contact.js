import { Link } from "react-router-dom";
import "../../assets/css/contact.css";

function Contact() {
  return (
    <div class="contact-content page-header container contact">
      <h2>
        C<span>o</span>ntact
      </h2>

      <div id="contact-links" class="contact-links">
        <div class="container email card">
          <i class="fa-solid fa-envelope fa-4x"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nesciunt.
          </p>
          <Link to={"/"}>AMH Decorating</Link>
        </div>
        <div class="container phone card">
          <i class="fa-solid fa-phone fa-4x"></i>
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
