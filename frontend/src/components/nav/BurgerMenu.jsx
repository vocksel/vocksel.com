import React from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import { Link } from 'react-router-dom'
import './BurgerMenu.scss'

// Everything going on with the state is to make the menu work with
// react-router-dom. Since the page isn't actually changing, we have to close
// the menu ourselves when a link is clicked.

export default class BurgerMenu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: false
		}
	}

	handleStateChange(state) {
		this.setState({ isOpen: state.isOpen })
	}

	closeMenu() {
		this.setState({ isOpen: false })
	}

	render() {
		return (
			<Menu right
				isOpen={this.state.isOpen}
				onStateChange={(state) => this.handleStateChange(state)}
			>
				<Link onClick={() => this.closeMenu()} to='/'><i className='fas fa-home' /> Home</Link>
				<Link onClick={() => this.closeMenu()} to='/projects/'><i className='fas fa-heart' /> Projects</Link>
				<Link onClick={() => this.closeMenu()} to='/about/'><i className='fas fa-question-circle' /> About</Link>
			</Menu>
		)
	}
}
