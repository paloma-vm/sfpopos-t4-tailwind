// src/POPOSDetails.js

import React from 'react'
import { useParams } from 'react-router'
import data from '../../sfpopos-data.js'
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList.js';
import Map from '../Map/Map.js';

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo, address } = data[id]
  
  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={`photograph of the space`} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">Hours: { hours }</p>
        <p className="POPOSDetails-address">Address:<address>{ address }</address></p>
        {/* <p className="POPOSDetails-features">{ features }</p> */}
        <POPOSFeatureList features={ features }/>
        <Map />

        {/* <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p> */}
      </div>
    </div>
  )
}

export default POPOSDetails