// src/Footer.js
import React from 'react';
import './Footer.css';

function Footer(props) {
  const {name, copyright_year} = props
  return (
    <footer className='Footer'>
      <div>{name}</div>
      <div>{copyright_year}</div> 
    </footer>

  )
}

export default Footer