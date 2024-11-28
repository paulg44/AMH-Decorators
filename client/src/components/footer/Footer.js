import "../../assets/css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h6>AMH Decorating</h6>
        <ul>
          <li>
            <i className="fa-brands fa-facebook"></i>
            <a
              href="https"
              target="blank"
              rel="noreferrer"
              aria-label="facebook link"
            >
              Facebook
            </a>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
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
            <i className="fa-brands fa-twitter"></i>
            <a
              href="https"
              target="blank"
              rel="noreferrer"
              aria-label="twitter link"
            >
              Twitter
            </a>
          </li>
        </ul>
        <p>Website designed & created by PG Design</p>
      </div>
    </footer>
  );
}

export default Footer;
