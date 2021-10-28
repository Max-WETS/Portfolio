import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import ProjectsGrid from "../components/ProjectsGrid";
import Contact from "../components/Contact";
import LeftSideBar from "../components/LeftSideBar";

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
            <p>Designed & built by Maxime Wets</p>
          </footer>
        </div>
        <div className="right-container"></div>
      </div>
    </>
  );
}

export default Portfolio;
