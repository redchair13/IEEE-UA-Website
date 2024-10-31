import React from 'react';
import './Home.css';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    // Add light-mode class by default
    document.body.classList.add('light-mode');
  }, []);
  return (

    <div>
      
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

      
    </div>
  );
}

export default Home;
