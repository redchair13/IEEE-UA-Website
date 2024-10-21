import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar';
import './Navbar.css';
import Footer from './Footer';
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
    <div>
      {/* <header>Navbar goes here:</header> */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <br></br><br></br>

      <p>Join Us!</p>
      <button>EMAIL LIST</button>
      <a href="https://discord.gg/tpzjghvd" target="_blank" rel="noopener noreferrer">
        <button>DISCORD</button>
      </a>
      <a href="https://myinvolvement.org/organization/ieee" target="_blank" rel="noopener noreferrer">
        <button>MY INVOLVEMENT</button>
      </a>

      <br></br><br></br>

      <p>Our Events</p>

      <br></br><br></br>

      <footer>Footer goes here:</footer>
    </div>
  );
}

export default Home;
