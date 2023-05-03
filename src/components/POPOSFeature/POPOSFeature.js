import React from 'react'
import './POPOSFeature.css'
import Emoji from '../Emoji/Emoji';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function getFeature(str) {
	switch(str) {
		case 'outdoors':
			//return <span role="img" aria-label="outdoors" >🌲</span>;
					
			//return '🌲'
			//return <Emoji symbol='🌲' label='outdoors'/>
			return <FontAwesomeIcon icon={icon({name: 'tree'})} />


		case 'coffee':
			//return '☕️'
			return <FontAwesomeIcon icon={icon({name: 'coffee'})} />
		case 'art':
			//return '🖼'
			return <FontAwesomeIcon icon={icon({name: 'landmark'})} />
		case 'toilet':
			//return '🚽'
			return <FontAwesomeIcon icon={icon({name: 'toilet'})} />
		case 'power':
			//return '🔌'
			return <FontAwesomeIcon icon={icon({name: 'plug-circle-bolt'})} />
		default:
			return '？'
	}
}

function POPOSFeature(props) {
	const emoji = getFeature(props.name)
	// return <div className="POPOSFeature" aria-label={props.name} accessibilitylabel={props.name}>{emoji}</div>
	return <div className="POPOSFeature">{emoji}</div>

	// return <Emoji symbol={emoji} label={props.name} />
}

export default POPOSFeature