import React, { useState, useEffect } from "react";
import "../styles/index.scss";
import Portfolio from "./Portfolio";

const primaryColor = "white";

// markup
const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingStarted, setIsLoadingStarted] = useState(false);
  const [isLoadingEnding, setIsLoadingEnding] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser) {
      const htmlElement = document.getElementsByTagName("html")[0];
      if (menuOpen) {
        htmlElement.classList.add("html-menu-open");
      } else {
        htmlElement.classList.remove("html-menu-open");
      }
    }
  }, [menuOpen, isBrowser]);

  useEffect(() => {
    if (isLoading) {
      setIsLoadingStarted(true);

      setTimeout(() => {
        setIsLoadingEnding(true);
      }, 3000);

      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isLoading]);

  const handleClickHamburgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={
          menuOpen ? "body-overlay body-overlay-menu-open" : "body-overlay"
        }
        onClick={menuOpen ? handleClickHamburgerMenu : null}
      ></div>
      {isLoading ? (
        <nav>
          <div className="logo-container">
            <div className="logo">
              <button
                className={
                  isLoadingEnding
                    ? "circle-btn loading-end-fade-out loading-end-scale-up"
                    : "circle-btn"
                }
              >
                <svg
                  width="50"
                  height="50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <circle r="20" cx="25" cy="25" fill="none" class="bg-svg" />
                  <circle
                    r="20"
                    cx="25"
                    cy="25"
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth="3px"
                    className={
                      isLoadingStarted ? "filled loading-circle" : "filled"
                    }
                    pathLength="1"
                  />
                  <line
                    x1="46.4"
                    y1="25"
                    x2="5"
                    y2="25"
                    stroke={primaryColor}
                    strokeWidth="3px"
                    pathLength="1"
                    className={
                      isLoadingStarted ? "filled loading-circle" : "filled"
                    }
                  />
                  <path
                    d="M10 25 L20 11 L21.5 23 L31 11 L34 25 M40 25 L30 39 L27 27 L18 39 L15 24"
                    fill="none"
                    stroke={primaryColor}
                    strokeWidth="3px"
                    className={isLoadingStarted ? "loading-text" : null}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      ) : (
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}{" "}
    </>
  );
};

export default IndexPage;
