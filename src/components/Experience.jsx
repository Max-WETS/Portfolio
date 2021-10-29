import React, { useState, useEffect, useCallback, useRef } from "react";
import experienceData from "../experienceData";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience({ experienceElement }) {
  const [currentExperience, setCurrentExperience] = useState(0);
  const breakingPoint = 650;
  const lastSize = useRef();
  const newSize = useRef();
  const translateRatio = useRef();
  translateRatio.current = 3 / 6.5;

  const checkWindowResize = useCallback(() => {
    newSize.current = window.innerWidth;

    const isEqual = newSize.current === lastSize.current;
    const hasIncreased = newSize.current > lastSize.current;

    if (!isEqual) {
      const lowerPoint = hasIncreased ? lastSize.current : newSize.current;
      const higherPoint = hasIncreased ? newSize.current : lastSize.current;

      const distBreakingPoint = breakingPoint - lowerPoint;
      const distNewPoint = higherPoint - lowerPoint;

      if (distBreakingPoint <= distNewPoint && distBreakingPoint > 0) {
        document.documentElement.style.setProperty("--transition", "0.0s");
        const currentTranslateValue = parseFloat(
          document.documentElement.style.getPropertyValue("--h")
        );
        if (hasIncreased) {
          document.documentElement.style.setProperty(
            "--h",
            currentTranslateValue * translateRatio.current + "rem"
          );
        } else {
          document.documentElement.style.setProperty(
            "--h",
            currentTranslateValue / translateRatio.current + "rem"
          );
        }
      }
    }

    // document.documentElement.style.setProperty("--transition", "0.3s");
    lastSize.current = newSize.current;
    // }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkWindowResize);
  }, []);

  useEffect(() => {
    let viewportWidth = window.innerWidth;
    if (
      document.documentElement.style.getPropertyValue("--transition") === "0s"
    )
      document.documentElement.style.setProperty("--transition", "0.3s");

    if (viewportWidth > breakingPoint) {
      document.documentElement.style.setProperty(
        "--h",
        currentExperience * 3 + "rem"
      );
    } else {
      document.documentElement.style.setProperty(
        "--h",
        currentExperience * 6.5 + "rem"
      );
    }
  }, [currentExperience]);

  const handleClickExperience = (e) => {
    setCurrentExperience(e.target.value);
  };

  return (
    <article id="experience">
      <div className="experience-container" ref={experienceElement}>
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
