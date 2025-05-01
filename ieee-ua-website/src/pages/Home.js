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
import { Link } from "react-router-dom";
import Header from '../components/Header'


// Statement component for reusability
const Statement = ({ title, text, image, imagePosition = "right" }) => (
  <div className={`content-statement-container statement-${imagePosition === "left" ? "2" : "1"}`}>
    {imagePosition === "left" ? (
      <>
        <div>
          <img src={image} className="content-statement-image" alt={title}/> 
          <div>Fellow person with a bread board</div>
        </div>
        <div className="content-statement-text">
          <h1>{title}</h1>
          {text}
        </div>
      </>
    ) : (
      <>
        <div className="content-statement-text">
          <h1>{title}</h1>
          {text}
        </div>
        <div>
          <img src={image} className="content-statement-image" alt={title} />
          <div>More people with a bread boards</div>
        </div>
      </>
    )}
  </div>
);

// Join section component
const JoinSection = () => (
  <div className="content-join-container">
    <h2 className="content-join-text">Join us!</h2>
    <div className="content-button-container">

      <Link 
        to="/contact-us"
        >
      <button className="join-buttons">EMAIL</button>
      </Link>

      <a
        href="https://discord.gg/tpzjghvd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="join-buttons">DISCORD</button>
      </a>
      
      <a
        href="https://myinvolvement.org/organization/ieee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="join-buttons">MY INVOLVEMENT</button>
      </a>
    </div>
    <div>
      <h1 className="content-our-events">Our Events</h1>
    </div>
  </div>
);

// Main Home component
function Home() {
  useEffect(() => {
    // Add light-mode class by default
    document.body.classList.add("light-mode");
  }, []);

  return (
    <div className="page-container">
      <Header
        backgroundImage={homePageHeader}
      >
        

      <div className="header-information-container">
        <div className="header-ieee-container">
          <img src={weAre} className="header-ieee-logo header-logo1" alt="header" />
          <img src={ieeeLogo} className="header-ieee-logo header-logo2" alt="header" />
          <img src={atUA} className="header-ieee-logo header-logo3" alt="header" />
        </div>
        <div className="header-event-container">
          NEXT EVENT
          </div>
        </div>
      </Header>

      
      <div className="content-container">
        <div className="content-about-us-container">
          <Statement 
            title="Our Organization" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            image={statement1Image}
          />
          
          <Statement 
            title="What We Do" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            image={statement2Image}
            imagePosition="left"
          />
          
          <Statement 
            title="Professional Development" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            image={statement3Image}
          />
        </div>
      </div>
      <JoinSection/>
      </div>

  );
}

export default Home;
