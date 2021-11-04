import React from "react";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About({ aboutElement }) {
  return (
    <article id="about">
      <div className="about-container" ref={aboutElement}>
        <div className="about-text">
          <div>
            <p>
              <span>01.</span> About Me
            </p>
            <div className="line"></div>
          </div>
          <p>
            After graduating as a marine engineer, I set about focusing on the
            technological and ecological aspects of the shipping industry
            assuming a managing position in an environmental auditing company
            for three and a half years.
          </p>
          <p>
            This was a multi-faceted job which required you to strike the right
            balance between customer satisfaction and technical expertise.
          </p>
          <p>
            During those years, audits of big clients got me acquainted with a
            wide array of cutting-edge monitoring tools and platforms. This
            sparked a growing curiosity in me and it soon became crystal-clear
            that new technologies were where I wanted to go.
          </p>
          <p>
            You'll find below the latest technologies I've been working with in
            building my projects:
          </p>
          <div className="list-container">
            <ul className="fa-ul">
              <li>
                <FontAwesomeIcon icon={faAngleRight} listItem />
                Javascript
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} listItem />
                React
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} listItem />
                Node.js
              </li>
            </ul>
            <ul className="fa-ul">
              <li>
                <FontAwesomeIcon icon={faAngleRight} listItem />
                TypeScript
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} listItem />
                MongoDB
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} listItem />
                Chakra-UI
              </li>
            </ul>
          </div>
        </div>
        <div className="about-picture">
          <div className="picture-container">
            <div className="image-overlay">
              <img src="pp-pro-fit.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default About;
