import React from 'react'
import './heder.css'
//import  Projects from '../../Pages/project';
//import Activity from '../../Pages/activity';
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const heder = () => {    //
  return (
    <div className='navbar'>
      <div className="main">
        <p><Link to="/" style={{ textDecoration: 'none' , color:"#48252F" ,}}>Dima Jayyousi</Link></p>
      </div>
      <ul className="nav-menu">
        <li><a href="#me">Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/activity">Volunteering</Link></li>
      </ul>
    </div>
  )
}

export default heder
