import React, { useState } from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiGithub } from "react-icons/fi";
import projectsData from "../projectsData";

function Work({ workElement }) {
  const [highlightedProject, setHighlightedProject] = useState(projectsData[1]);

  return (
    <article id="work">
      <div className="work-container" ref={workElement}>
        <div className="work-title">
          <p>
            <span>03.</span> My Work
          </p>
          <div className="line"></div>
        </div>
        <div className="work-content">
          <div className="work-image-overlay" id="work-image-overlay">
            <img src="images/maxweb-fit.png" alt="" />
          </div>
          <div className="work-picture">
            <div className="work-picture-container">
              <div className="work-image-overlay">
                <img src="images/maxweb-fit.png" alt="" />
              </div>
            </div>
          </div>
          <div className="work-info">
            <p>Highlighted project</p>
            <p>{highlightedProject.projectName}</p>
            <div className="text-container">
              <p>{highlightedProject.desc}</p>
            </div>
            <div className="technology-list">
              {highlightedProject.technologies.map((t, i) => (
                <div key={i}>{t}</div>
              ))}
            </div>
            <div className="links-list">
              <div>
                <a href={highlightedProject.gitHubLink}>
                  <div>
                    <FiGithub fontSize="20px" />
                  </div>
                </a>
                <a href={highlightedProject.appLink}>
                  <div>
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Work;
