import React from 'react';
import { useNavigate } from 'react-router-dom'
import './RandomSpace.css';
import data from '../../sfpopos-data.json'

function RandomSpace() {
	const navigate = useNavigate()
  return (
		<div className='random-spaces'>
			<button 
				className="RandomSpace random-desk"
				onClick={(e) => {
				const id = Math.floor(Math.random() * data.length)
				navigate(`/details/${id}`)
			}}>Show me a random space</button>
			<button
			className="RandomSpace random-mobile"
			onClick={(e) => {
					const id = Math.floor(Math.random() * data.length)
					navigate(`/details/${id}`)
				}}>show random</button>
		</div>
  )
}

export default RandomSpace