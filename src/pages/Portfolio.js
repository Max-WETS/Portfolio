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
  const offsets = useRef();
  const aboutElement = useRef();
  const experienceElement = useRef();
  const workElement = useRef();
  const projectsElement = useRef();
  const contactElement = useRef();

  useEffect(() => {
    const elements = [
      aboutElement,
      experienceElement,
      workElement,
      projectsElement,
      contactElement,
    ];
    const elementsOffset = [];
    const bodyRectTop = document.body.getBoundingClientRect().top;
    for (let i = 0; i < elements.length; i++) {
      const elementTop = elements[i].current.getBoundingClientRect().top;
      const offset = elementTop - bodyRectTop;
      // console.log("bodyRectTop", bodyRectTop);
      // console.log("elementTop", elementTop);
      console.log("offset", offset);
      elementsOffset.push(offset);
    }
    offsets.current = elementsOffset;
  }, []);

  const ScrollControl = () => {
    const scrollPosition = window.scrollY;
    const scrollTop = document.documentElement.scrollTop;
    const scrollBottom = window.innerHeight + scrollTop;

    // console.log("oldScrollY: ", window.scrollY);
    // console.log("mainElementYPos", mainElementTop);
    // console.log("offsets array", offsets.current);
    // console.log("scrollTop", scrollTop);
    console.log("scrollBottom", scrollBottom);

    for (let i = 0; i < offsets.current.length; i++) {
      if (i < 4) {
        if (
          scrollBottom >= offsets.current[i] &&
          scrollBottom < offsets.current[i + 1]
        ) {
          // console.log("scroll position", scrollPosition);
          console.log(`element ${i + 1} reached`);
        }
      } else {
        if (scrollBottom >= offsets.current[i]) {
          console.log(`element ${i + 1} reached`);
        }
      }
    }

    // if (
    //   scrollPosition >= offsets.current[0] &&
    //   scrollPosition < offsets.current[1]
    // ) {
    //   console.log("first element reached");
    // } else if (
    //   scrollPosition >= offsets.current[1] &&
    //   scrollPosition < offsets.current[2]
    // ) {
    //   console.log("second element reached");
    // } else if (
    //   scrollPosition >= offsets.current[2] &&
    //   scrollPosition < offsets.current[3]
    // ) {
    //   console.log("third element reached");
    // } else if (
    //   scrollPosition >= offsets.current[3] &&
    //   scrollPosition < offsets.current[4]
    // ) {
    //   console.log("fourth element reached");
    // } else if (
    //   scrollPosition >= offsets.current[4] &&
    //   scrollPosition < offsets.current[5]
    // ) {
    //   console.log("fifth element reached");
    // }
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
