import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar';
import './Navbar.css';
import Footer from './Footer.js';
import './Footer.css';
import lightModeIcon from './icons/lightModeIcon.svg';
import darkModeIcon from './icons/darkModeIcon.svg';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="page-container">
      {/* <header>Navbar goes here:</header> */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="content">
        <p>Join Us!</p>
        <button>EMAIL LIST</button>
        <a href="https://discord.gg/tpzjghvd" target="_blank" rel="noopener noreferrer">
          <button>DISCORD</button>
        </a>
        <a href="https://myinvolvement.org/organization/ieee" target="_blank" rel="noopener noreferrer">
          <button>MY INVOLVEMENT</button>
        </a>
        <p>Our Events</p>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Home;
