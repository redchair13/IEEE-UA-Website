import React from 'react';
import { Link } from 'react-router-dom';
import YoutubeLogo from './images/youtube.svg'
import DiscordLogo from './images/discord.svg'
import LinkedInLogo from './images/linkedin.svg'
import InstagramLogo from './images/instagram.svg'
import IEEELOGO from './images/ieeelogo.png'
import './Footer.css';

export default function Footer({darkMode}) {
  return (
      <footer className={`footer ${darkMode ? 'dark':''}`}>
            <div className="IEEE-container">
                <img src ={IEEELOGO}  className = "IEEE-icon" alt="Instagram"/>
                <div className="IEEE-text">
                    AT UALBANY
                </div>
            </div>
            <div className="socials-container"> {/* used anchor elements for href */}
                <a href="https://www.instagram.com/ieee.ualbany/?hl=en" target="_blank">
                    <img src ={InstagramLogo}  className = "social-icon" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/ieeeualbany/" target="_blank">
                    <img src ={LinkedInLogo}  className = "social-icon" alt="LinkedIn"/>
                </a>
                <a href="https://www.youtube.com/@UAlbanyIEEE" target="_blank">
                    <img src ={YoutubeLogo}  className = "social-icon" alt="YouTube"/>
                </a>
                <a href="https://discord.gg/Dbc9zggT" target="_blank">
                    <img src ={DiscordLogo}  className = "social-icon" alt="Discord"/>
                </a>
            </div>
        </footer>
  );
}