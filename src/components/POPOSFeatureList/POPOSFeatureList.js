import React from 'react'
import POPOSFeature from '../POPOSFeature/POPOSFeature'

function POPOSFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
  })
	return <li className="POPOSFeatureList">{icons}</li>
}

export default POPOSFeatureList