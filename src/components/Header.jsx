import React, { useState, useEffect } from "react";

function Header() {
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
      <nav className="hamburger-menu" id="hamburger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </nav>
      <nav class="nav-menu">
        <div class="menu-items">
          <div id="about">
            <p>
              <span>01.</span> About
            </p>
          </div>
          <div id="experience">
            <p>
              <span>02.</span> Experience
            </p>
          </div>
          <div id="work">
            <p>
              <span>03.</span> Work
            </p>
          </div>
          <div id="contact">
            <p>
              <span>04.</span> Contact
            </p>
          </div>
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
