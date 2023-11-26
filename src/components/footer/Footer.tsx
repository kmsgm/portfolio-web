import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Minseo</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {/* <a href="https://github.com/" className="footer__social-link">
            <i className="bx bxl-github" />
          </a> */}
          <a href="https://www.linkedin.com/" className="footer__social-link">
            <i className="bx bxl-linkedin" />
          </a>
        </div>

        <span className="footer__copy">&#169; Minseo. All right reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
