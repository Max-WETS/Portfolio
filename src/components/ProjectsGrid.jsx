import React from "react";
import { faFolder as farFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import projectsData from "../projectsData";

function ProjectsGrid({ projectsElement }) {
  return (
    <div className="projects-grid-section" ref={projectsElement}>
      <div className="projects-container">
        <div className="projects-title">
          <p>Other Noteworthy Projects</p>
        </div>
        <div className="projects-grid-container">
          <div className="grid-row">
            {projectsData.map((p, i) => (
              <div className="grid-item" key={i}>
                <div className="item-grid-content">
                  <div className="item-grid-content-header">
                    <div>
                      <FontAwesomeIcon
                        size="3x"
                        color="white"
                        stroke="black"
                        icon={farFolder}
                      />
                    </div>
                    <div>
                      <div>
                        {p.gitHubLink !== "" ? (
                          <a href={p.gitHubLink}>
                            <div>
                              <FiGithub fontSize="1.4rem" />
                            </div>
                          </a>
                        ) : null}
                        {p.appLink !== "" ? (
                          <a href={p.appLink}>
                            <div>
                              <IoMdOpen fontSize="1.3rem" />
                            </div>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="item-grid-content-text">
                    <div>
                      <p>{p.projectName}</p>
                      <p>{p.desc}</p>
                    </div>
                    <div className="technology-list">
                      {p.technologies.map((t, i) => (
                        <div key={i}>{t}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsGrid;
