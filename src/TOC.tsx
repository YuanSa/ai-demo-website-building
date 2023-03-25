import React from 'react';
import { NavLink } from 'react-router-dom';
import './TOC.css';

const TOC: React.FC = () => {
  return (
    <nav className='toc'>
      <ul>
        <li>
          <NavLink className='nav-link' to='/' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/skills'>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/projects'>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/contact'>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/story'>
            Our Story
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TOC;
