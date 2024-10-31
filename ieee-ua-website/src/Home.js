import React, { useState } from 'react';
import './Home.css';

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
     
  );
}

export default Home;
