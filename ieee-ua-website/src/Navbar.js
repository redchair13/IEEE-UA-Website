import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import lightModeIcon from './icons/lightModeIcon.svg';
import darkModeIcon from './icons/darkModeIcon.svg';
import logo1 from './icons/logo1.png';

export default function Navbar({darkMode, toggleDarkMode}) {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <ul>
        <li className = "left"><a href ="/home.js">
          <img src = {logo1} alt = "IEEE" className = "logo"/></a></li>
        <li><a href ="#">BOARD</a></li>
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