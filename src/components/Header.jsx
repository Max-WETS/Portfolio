import React, { useState, useEffect, useCallback, useRef } from "react";

function Header({ menuOpen, setMenuOpen }) {
  const oldScrollY = useRef(0);

  const [direction, setDirection] = useState("up");

  const controlDirection = useCallback(() => {
    if (window.scrollY > oldScrollY.current) {
      setDirection("down");
    } else if (window.scrollY < oldScrollY.current && oldScrollY.current < 30) {
      setDirection("top");
    } else {
      setDirection("up");
    }
    oldScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, [controlDirection]);

  const handleClickHamburgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={
        direction === "up"
          ? "header-container scrolling-up-shadow"
          : direction === "top"
          ? "header-container"
          : "header-container hidden-header"
      }
    >
      <a href="http://localhost:8000/">
        <div className="logo-main">
          <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <circle
              r="20"
              cx="25"
              cy="25"
              fill="none"
              stroke="white"
              strokeWidth="3px"
            />
            <line
              x1="46.4"
              y1="25"
              x2="5"
              y2="25"
              stroke="white"
              strokeWidth="3px"
              pathLength="1"
            />
            <path
              d="M10 25 L20 11 L21.5 23 L31 11 L34 25 M40 25 L30 39 L27 27 L18 39 L15 24"
              fill="none"
              stroke="white"
              strokeWidth="3px"
            />
          </svg>
        </div>
      </a>
      <div className="menu-wrap">
        <div
          id="hamburger"
          className={menuOpen ? "hamburger hamburger-open" : "hamburger"}
          onClick={handleClickHamburgerMenu}
        >
          <div></div>
        </div>
        <div className={menuOpen ? "menu menu-open" : "menu"}>
          <div>
            <ul>
              <li>
                <a href="#about" onClick={handleClickHamburgerMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={handleClickHamburgerMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#work" onClick={handleClickHamburgerMenu}>
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleClickHamburgerMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="../static/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <div
                    className="resume-link"
                    style={{
                      fontSize: "1.3rem",
                      width: "4.7rem",
                    }}
                  >
                    <p>Resume</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="nav-menu">
        <div className="menu-items">
          <a href="#about">
            <div id="about-menu">
              <p>
                <span>01.</span> About
              </p>
            </div>
          </a>
          <a href="#experience">
            <div id="experience-menu">
              <p>
                <span>02.</span> Experience
              </p>
            </div>
          </a>
          <a href="#work">
            <div id="work-menu">
              <p>
                <span>03.</span> Work
              </p>
            </div>
          </a>
          <a href="#contact">
            <div id="contact-menu">
              <p>
                <span>04.</span> Contact
              </p>
            </div>
          </a>
        </div>
        <a
          href="../static/resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div className="resume-link">
            <p>Resume</p>
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Header;
