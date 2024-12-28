import "../../assets/css/footer.css";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h6>AMH Decorating</h6>
        <ul>
          <li>
            <FaFacebook className="icon" />
            <a
              href="https://www.facebook.com/amhdecor/"
              target="blank"
              rel="noreferrer"
              aria-label="facebook link to decorator's page"
            >
              Facebook
            </a>
          </li>
          {/* <li>
            <FaInstagram className="icon" />
            <a
              href="https"
              target="blank"
              rel="noreferrer"
              aria-label="instagram link"
            >
              Instagram
            </a>
          </li>
          <li>
            <FaTwitter className="icon" />
            <a
              href="https"
              target="blank"
              rel="noreferrer"
              aria-label="twitter link"
            >
              Twitter
            </a>
          </li> */}
        </ul>
        <p>Website designed & created by PG Design</p>
      </div>
    </footer>
  );
}

export default Footer;
