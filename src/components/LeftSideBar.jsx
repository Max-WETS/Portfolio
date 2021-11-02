import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

function LeftSideBar() {
  return (
    <div className="left-menu-container">
      <div className="left-menu-bar">
        <div className="icons-container">
          <a
            href="https://github.com/Max-WETS"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub fontSize="25px" />
          </a>
          <a
            href="https://www.linkedin.com/in/maxime-wets-a039a911b/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin fontSize="25px" />
          </a>
          <a href="mailto:wetsmaxime@gmail.com">
            <GrMail fontSize="25px" />
          </a>
        </div>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
}

export default LeftSideBar;
