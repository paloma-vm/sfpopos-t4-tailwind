// src/Header.js
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
// import RandomSpace from '../RandomSpace/RandomSpace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

icon({name: 'user', family: 'classic', style: 'solid'})

function Header() {
  return (
    <header className="Header">
      <div className='Header-left'> {/* make this <nav> */}
        <h1>SFPOPOS</h1>
        <div className="Header-Subheader">San Francisco Privately Owned Public Open Spaces</div>
      </div>
      <div className='Header-right a'> 
        <div className='mobile-nav'>
          <NavLink
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/"><FontAwesomeIcon icon={icon({name: 'house', family: 'classic', style: 'solid'})} />
                  <span className="sr-only">All Spaces</span></NavLink>
          <NavLink
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/about"><FontAwesomeIcon icon={icon({name: 'circle-info', family: 'classic', style: 'solid', size: '6x'})} />
                  <span className="sr-only">About</span></NavLink>
          <NavLink
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/register"><FontAwesomeIcon icon={icon({name: 'user-plus', family: 'classic', style: 'solid'})} />
                  <span className="sr-only">Register</span></NavLink>
        </div>

        <div className='desk-nav'>
          <NavLink
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/">Spaces</NavLink>
          <NavLink
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/about">About</NavLink>
          <NavLink
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/register">Register</NavLink>
        </div>
        {/* <RandomSpace className='RandomSpace'/> */}
      </div>
    </header>
  )
}

export default Header