import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiGithub } from "react-icons/fi";

function Work() {
  return (
    <article id="work">
      <div className="work-container">
        <div className="work-title">
          <p>
            <span>03.</span> Some Things I've Built
          </p>
          <div class="line"></div>
        </div>
        <div className="work-content">
          <div className="work-image-overlay" id="work-image-overlay">
            <img src="../maxweb-fit.png" alt="" />
          </div>
          <div className="work-picture">
            <div className="work-picture-container">
              <div className="work-image-overlay">
                <img src="../maxweb-fit.png" alt="" />
              </div>
            </div>
          </div>
          <div className="work-info">
            <p>Featured project</p>
            <p>Project Name</p>
            <div className="text-container">
              <p>
                Lorem, ipsum dolor sit amet consectetur{" "}
                <a class="link-style" href="">
                  adipisicing
                </a>{" "}
                elit. Quod, neque sit. Aliquid esse sed, aperiam quia facere, at
                alias eveniet voluptatum laborum!
              </p>
            </div>
            <div className="technology-list">
              <div>VS Code</div>
              <div>React</div>
              <div>Express</div>
              <div>Heroku</div>
            </div>
            <div className="links-list">
              <div>
                <a href="">
                  <div>
                    <FiGithub fontSize="20px" />
                  </div>
                </a>
                <a href="">
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
