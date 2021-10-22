import React from "react";

function Header() {
  return (
    <div class="header-container">
      <a href="">
        <div class="logo-main">
          <object data="../logo.svg" width="50" height="50" type="" />
        </div>
      </a>
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
