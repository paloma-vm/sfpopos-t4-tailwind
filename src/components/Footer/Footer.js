// src/Footer.js
import React from 'react';
// import './input.css';

function Footer(props) {
  const {name, copyright_year} = props
  return (
    <footer className='Footer text-slate-50 bg-slate-900'>
      <div className='container max-w-screen mx-auto items-center flex justify-between p-4'>
        <div>{name}</div>
        <div>{copyright_year}</div>
      </div>
    </footer>

  )
}

export default Footer