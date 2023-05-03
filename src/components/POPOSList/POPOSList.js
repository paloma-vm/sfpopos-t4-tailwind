// src/POPOSList.js
// a component that will display a list of spaces

import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js'
import { useState } from 'react'
import RandomSpace from '../RandomSpace/RandomSpace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function POPOSList() {
  const [ query, setQuery ] = useState('')
  const spaces = data
  // for case-sensitive search
  // .filter(obj => obj.title.includes(query) || obj.address.includes(query))
  // for non-case-sensitive search 
  .filter((obj) => {
    // true if query is in title
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    // true if query is in address
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    // return true if either is true
    return inTitle || inAddress
  })
  .map((obj) => { // remove i here
    // Add id here!
    const { id, title, address, images, hours, features } = obj
  return (
    <POPOSSpace
      id={id} // use id here
      key={`${title}-${id}`} // use id here
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
    />
  )
})

  return (
    <div className='POPOSList'>
      <div className='search-header'>
        <form>
          <label htmlFor="listSearchInput" className='searchFormLabel'>search input area</label>
          <input
            value={query}
            placeholder="add search term"
            onChange={(e) => setQuery(e.target.value)}
            className="listSearchInput"
            id="listSearchInput"
            type="search"
          />
          <button type="submit" className='search-button'><FontAwesomeIcon icon={icon({name: 'magnifying-glass', family: 'classic', style: 'solid'})} /><div className='search-button-label'> Search</div></button>
        </form>
        <RandomSpace className='RandomSpace'/>
      </div>
      <div className="POPOSList-grid">
        {spaces}
      </div>
    </div>
  )
}

export default POPOSList