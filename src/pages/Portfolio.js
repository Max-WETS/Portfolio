import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import ProjectsGrid from "../components/ProjectsGrid";
import Contact from "../components/Contact";
import LeftSideBar from "../components/LeftSideBar";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

function Portfolio({ menuOpen, setMenuOpen }) {
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="body-container">
        <div className="left-container">
          <LeftSideBar />
        </div>
        <div className="center-container">
          <Main />
          <About />
          <Experience />
          <Work />
          <ProjectsGrid />
          <Contact />
          <footer>
            <div>
              <div>
                <a href="https://github.com/Max-WETS" target="_blank">
                  <FiGithub fontSize="25px" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/maxime-wets-a039a911b/"
                  target="_blank"
                >
                  <AiFillLinkedin fontSize="25px" />
                </a>
              </div>
              <div>
                <a href="mailto:wetsmaxime@gmail.com">
                  <GrMail fontSize="25px" />
                </a>
              </div>
            </div>
            <p>Designed & built by Maxime Wets</p>
          </footer>
        </div>
        <div className="right-container"></div>
      </div>
    </>
  );
}

export default Portfolio;
