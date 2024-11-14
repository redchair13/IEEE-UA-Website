import React from "react";
import "./Home.css";
import { useEffect } from "react";
import homePageHeader from "../icons/picture-home-page.jpeg";
import ieeeLogo from "../icons/logo1.png";
import weAre from "../icons/logo-we-are.png";
import atUA from "../icons/logo-at-ua.png";
import statement1Image from "../icons/statement-1-image.jpeg"
import statement2Image from "../icons/statement-2-image.jpeg"
import statement3Image from "../icons/statement-3-image.jpeg"

function Home() {
  useEffect(() => {
    // Add light-mode class by default
    document.body.classList.add("light-mode");
  }, []);
  return (
    <div className="page-container">
      <div className="header-container">
        <img src={homePageHeader} className="header-background-image" alt="header" />
        <div className="header-information-container">
          <div className="header-ieee-container">
            <img src={weAre} className="header-ieee-logo header-logo1" alt="header" />
            <img src={ieeeLogo} className="header-ieee-logo header-logo2" alt="header" />
            <img src={atUA} className="header-ieee-logo header-logo3" alt="header" />
          </div>

          <div className="header-event-container">NEXT EVENT</div>
        </div>
      </div>

      <div className="content-container">
        <div className="content-about-us-container">
          <div className="content-statement-container statement-1">
            <div className="content-statement-text">
              <h1> Our Organization </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>

            <img
              src={statement1Image}
              className="content-statement-image"
              alt="header"
            />
          </div>

          <div className="content-statement-container statement-2">

          <img
              src={statement2Image}
              className="content-statement-image"
              alt="header"
            />
            <div className="content-statement-text">
          
              <h1> What We Do </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>

          <div className="content-statement-container statement-3">
            <div className="content-statement-text">
              <h1> Professional Development </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>

            <img
              src={statement3Image}
              className="content-statement-image"
              alt="header"
            />
          </div>
        </div>

        <div className="content-join-container">
          <h2 className="content-join-text">Join us!</h2>
          <div className="content-button-container">
            <button>EMAIL LIST</button>
            <a
              href="https://discord.gg/tpzjghvd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>DISCORD</button>
            </a>
            <a
              href="https://myinvolvement.org/organization/ieee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>MY INVOLVEMENT</button>
            </a>
          </div>
          <div>
          <h1 className="content-our-events">Our Events</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
