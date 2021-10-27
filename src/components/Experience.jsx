import React, { useState, useEffect } from "react";
import experienceData from "../experienceData";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience() {
  const [currentExperience, setCurrentExperience] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--h",
      currentExperience * 3 + "rem"
    );
  }, [currentExperience]);

  const handleClickExperience = (e) => {
    setCurrentExperience(e.target.value);
  };

  return (
    <article id="experience">
      <div className="experience-container">
        <div className="experience-title">
          <p>
            <span>02.</span> Where I've Worked
          </p>
          <div class="line"></div>
        </div>
        <div className="experience-content">
          <div className="company-list">
            <ul>
              {experienceData.map((e, i) => (
                <li
                  className={currentExperience === i ? "active-li" : null}
                  value={i}
                  key={i}
                  onClick={(e) => handleClickExperience(e)}
                >
                  {e.company}
                </li>
              ))}
            </ul>
          </div>
          <div className="job-info">
            <p>
              {experienceData[currentExperience].jobTitle}{" "}
              <span>
                @{" "}
                <a class="link-style" href="">
                  {experienceData[currentExperience].company}
                </a>
              </span>
            </p>
            <p>
              {experienceData[currentExperience].startingDate} -{" "}
              {experienceData[currentExperience].endingDate}
            </p>
            <ul className="fa-ul">
              {experienceData[currentExperience].jobInfo.map((i) => (
                <li>
                  <FontAwesomeIcon icon={faAngleRight} listItem />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Experience;
