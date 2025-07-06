import React, { useState } from 'react';
import './heder.css';
import { Link } from 'react-router-dom';
import listicon from '../Assets/list.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="navbar">
      <div className="main">
        <p className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: "#48252F" ,fontSize:"30px",marginBottom:"700px"}}>
            Dima Jayyousi
          </Link>
        </p>
        <img
          src={listicon}
          alt="menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
      </div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="#me" onClick={() => setMenuOpen(false)}>Me</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/activity" onClick={() => setMenuOpen(false)}>Volunteering</Link></li>
      </ul>
    </div>
  );
};

export default Header;
