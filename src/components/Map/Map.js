// src/components/Map/Map.js
import React from 'react';
import './Map.css';
// import { Link } from 'react-router-dom';

function Map() {
  return (
    <map className='POPOSDetails-map'>
      <img src={process.env.PUBLIC_URL + '/map-placeholder.png'} alt='map placeholder'/> {/* Will add actual maps at some point */}
    </map>
  )
}

export default Map