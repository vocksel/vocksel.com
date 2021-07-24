import React from 'react'
import { Link } from 'react-router-dom'
import HorizontalList from '../HorizontalList'

export default function LineMenu() {
	return (
		<nav>
			<HorizontalList isRightAligned>
				<Link to='/'>Home</Link>
				<Link to='/projects'>Projects</Link>
				<Link to='/about'>About</Link>
			</HorizontalList>
		</nav>
	)
}
