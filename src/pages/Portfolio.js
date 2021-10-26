import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";
import ProjectsGrid from "../components/ProjectsGrid";

function Portfolio() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Experience />
      <Work />
      <ProjectsGrid />
    </>
  );
}

export default Portfolio;
