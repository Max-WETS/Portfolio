import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import ProjectsGrid from "../components/ProjectsGrid";
import Contact from "../components/Contact";

function Portfolio() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Experience />
      <Work />
      <ProjectsGrid />
      <Contact />
    </>
  );
}

export default Portfolio;
