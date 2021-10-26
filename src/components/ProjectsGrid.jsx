import React from "react";
import { faExternalLinkAlt, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolder as farFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";

function ProjectsGrid() {
  return (
    <article className="projects-grid-section">
      <div className="projects-container">
        <div className="projects-title">
          <p>Other Noteworthy Projects</p>
        </div>
        <div className="projects-grid-container">
          <div className="grid-row">
            <div className="grid-item">
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
                      <a href="">
                        <div>
                          <FiGithub fontSize="1.4rem" />
                        </div>
                      </a>
                      <a href="">
                        <div>
                          <IoMdOpen fontSize="1.3rem" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item-grid-content-text">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam officiis, consequuntur fugit tempore iure
                    necessitatibus?
                  </p>
                  <div className="technology-list">
                    <div>React</div>
                    <div>Express</div>
                    <div>Heroku</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectsGrid;
