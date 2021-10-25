import React from "react";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <article>
      <div class="about-container">
        <div className="about-text">
          <div>
            <p>
              <span>01.</span> About Me
            </p>
            <div class="line"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ad
            similique neque asperiores provident, esse perspiciatis nihil
            nesciunt rem consectetur quo voluptate, quasi ab expedita eaque
            itaque qui maxime? Voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut
            consequuntur, error rerum voluptas{" "}
            <a class="link-style" href="">
              voluptates
            </a>
            , non sapiente ipsa sint accusantium iure eaque fugit adipisci
            ducimus eligendi ipsum enim, repellat doloribus!
          </p>
          <p>
            Lorem ipsum dolor sit, amet{" "}
            <a class="link-style" href="">
              consectetur adipisicing
            </a>{" "}
            elit. Atque iste dolores amet id? Vel fugiat debitis quidem
            reprehenderit eos porro?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
            quisquam:
          </p>
          <div class="list-container">
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
                Eleventy
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} listItem />
                WordPress
              </li>
            </ul>
          </div>
        </div>
        <div className="about-picture">
          <div className="picture-container">
            <div className="image-overlay">
              <img src="../pp-pro-fit.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default About;
