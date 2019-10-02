import React, { useState } from 'react';

import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, checkDarkMode, setValue] = useDarkMode()

  console.log(darkMode)
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);

  // };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle"
      onClick={checkDarkMode} >
        
        <div
          
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
