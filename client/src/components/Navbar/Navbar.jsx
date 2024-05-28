import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import './ThemeToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="nav-cont">
      <div className="logo-block">
        <div className="theme-toggle">
          <label className="toggle-switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="slider">
              <span className="icon sun-icon"><FontAwesomeIcon icon={faSun} /></span>
              <span className="icon moon-icon"><FontAwesomeIcon icon={faMoon} /></span>
            </span>
          </label>
        </div>
      </div>
      <div className="nav-block">
        <Link className="link" to="/">About</Link>
        <Link className="link" to="/contact">Contact</Link>
        <Link className="link" to="/skills">Skills</Link>
        <Link className="link" to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
