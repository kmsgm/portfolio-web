import { useState } from "react";
import "./Header.css";
import { TranslationProps } from "../../interface/interface";

function Header({ language, handleOnClick }: TranslationProps) {
  // Header component implementation
  /* =================== Change Background Header =================== */
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    // when the scroll is higher than 560 viewport height,
    // add the scroll-header class to the a tag with the header tag
    if (window.scrollY >= 80) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  });

  /* =================== Toggle Menu =================== */
  const [Toggle, showMenu] = useState<Boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Minseo Kim
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon" />
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon" />
                Contact
              </a>
            </li>

            <li className="nav__item">
              <span
                className={
                  language === "KOR"
                    ? "translation active-translation"
                    : "translation"
                }
                onClick={handleOnClick}
              >
                {language === "KOR" ? "ENG" : "KOR"}
              </span>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          {!Toggle && <i className="uil uil-apps" />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
