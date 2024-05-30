import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink exact className="link" activeClassName="active" to="/">About</NavLink>
        <NavLink className="link" activeClassName="active" to="/skills">Skills</NavLink>
        <NavLink className="link" activeClassName="active" to="/projects">Projects</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
