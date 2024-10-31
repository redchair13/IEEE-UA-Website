import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from 'react';


const Layout = () => {
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
      <>
        <div>
            {/* <header>Navbar goes here:</header> */}
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet />
            <Footer darkMode={darkMode}/>
        </div>
      </>
    );
};

export default Layout;