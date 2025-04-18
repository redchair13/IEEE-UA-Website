import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import lightModeIcon from '../icons/lightModeIcon.svg';
import darkModeIcon from '../icons/darkModeIcon.svg';
import logo1 from '../icons/logo1.png';

export default function Navbar({darkMode, toggleDarkMode}) {
  
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <ul>
        <li className = "left">
        <Link to="/">
          <img src = {logo1} alt = "IEEE" className = "logo"/></Link>
          </li>
        <li><Link to="/board">BOARD</Link></li>
        <li><Link to="/hackathon">HACKATHON</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><a href ="#">SERVER</a></li>
        <li>
        <img
        src={darkMode ? lightModeIcon : darkModeIcon}
        alt="Toggle mode"
        onClick={toggleDarkMode}
        style={{ cursor: 'pointer', width: '30px', height: '30px', marginRight: '25px'}}
      />
      </li>
      </ul>
    </nav>
  );
}