import React from 'react'

export default class Copyright extends React.Component {
	getYear() {
		return new Date().getFullYear()
	}

	render() {
		return <span>&copy; {this.getYear()} Marin Minnerly</span>
	}
}
