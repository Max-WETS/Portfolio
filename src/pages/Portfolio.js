import React, { useState, useEffect, useRef } from "react";
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
  const aboutElement = useRef();
  const experienceElement = useRef();
  const workElement = useRef();
  const projectsElement = useRef();
  const contactElement = useRef();
  const componentsList = useRef([]);
  const offsets = useRef([]);
  const scrolledByList = useRef([]);

  useEffect(() => {
    const components = [
      aboutElement,
      experienceElement,
      workElement,
      projectsElement,
      contactElement,
    ];

    const bodyRectTop = document.body.getBoundingClientRect().top;
    for (let i = 0; i < components.length; i++) {
      const elementTop = components[i].current.getBoundingClientRect().top;
      const offset = elementTop - bodyRectTop;

      offsets.current[i] = offset;
      componentsList.current[i] = components[i].current;
    }
  }, []);

  const ScrollControl = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollBottom = window.innerHeight + scrollTop;

    if (componentsList.current.length > scrolledByList.current.length) {
      for (let i = 0; i < offsets.current.length; i++) {
        const componentInstance = componentsList.current[i];
        const classList = Object.values(componentInstance.classList);
        const alreadyScrolledBy = classList.includes("active-scroll");

        if (i < 4) {
          if (
            scrollBottom >= offsets.current[i] &&
            scrollBottom < offsets.current[i + 1] &&
            !alreadyScrolledBy
          ) {
            componentInstance.classList.add("active-scroll");
            scrolledByList.current.push(componentInstance);
          }
        } else {
          if (scrollBottom >= offsets.current[i] && !alreadyScrolledBy) {
            componentInstance.classList.add("active-scroll");
            scrolledByList.current.push(componentInstance);
          }
        }
      }
    } else {
      for (let component of componentsList.current) {
        component.classList.remove("active-scroll");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollControl);

    return () => {
      window.removeEventListener("scroll", ScrollControl);
    };
  }, []);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="body-container">
        <div className="left-container">
          <LeftSideBar />
        </div>
        <div className="center-container">
          <Main />
          <About aboutElement={aboutElement} />
          <Experience experienceElement={experienceElement} />
          <Work workElement={workElement} />
          <ProjectsGrid projectsElement={projectsElement} />
          <Contact contactElement={contactElement} />
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
