import React, { useState, useEffect } from "react";

function Header({ menuOpen, setMenuOpen }) {
  let oldScrollY = 0;

  const [direction, setDirection] = useState("up");

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection("down");
    } else if (window.scrollY < oldScrollY && oldScrollY < 30) {
      setDirection("top");
    } else {
      setDirection("up");
    }
    oldScrollY = window.scrollY;
    // console.log("oldScrollY: ", oldScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

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
      <a href="">
        <div class="logo-main">
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
              stroke-width="3px"
            />
            <line
              x1="46.4"
              y1="25"
              x2="5"
              y2="25"
              stroke="white"
              stroke-width="3px"
              pathLength="1"
            />
            <path
              d="M10 25 L20 11 L21.5 23 L31 11 L34 25 M40 25 L30 39 L27 27 L18 39 L15 24"
              fill="none"
              stroke="white"
              stroke-width="3px"
            />
          </svg>
        </div>
      </a>
      <div class="menu-wrap">
        {/* <input type="checkbox" class="toggler" /> */}
        <div
          id="hamburger"
          class={menuOpen ? "hamburger hamburger-open" : "hamburger"}
          onClick={handleClickHamburgerMenu}
        >
          <div></div>
        </div>
        <div class={menuOpen ? "menu menu-open" : "menu"}>
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
            </ul>
          </div>
        </div>
      </div>
      <nav class="nav-menu">
        <div class="menu-items">
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
          href=""
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div class="resume-link">
            <p>Resume</p>
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Header;
