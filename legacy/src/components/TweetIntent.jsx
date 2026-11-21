import PropTypes from 'prop-types'
import React from 'react'

export default class TweetIntent extends React.Component {
	BASE_URL = 'https://twitter.com/intent/tweet';

	static propTypes = {
		text: PropTypes.string.isRequired,
		url: PropTypes.string,
		via: PropTypes.string,
	}

	static defaultProps = {
		via: 'vocksel_',
	}

	render() {
		const { text, via } = this.props

		let url = this.props.url
		if (!url) {
			url = location.href
		}

		let intentUrl = `${this.BASE_URL}?text=${text}&url=${url}`

		if (via) {
			intentUrl = intentUrl + `&via=${via}`
		}

		return <a href={encodeURI(intentUrl)}>{this.props.children} <i className='fab fa-twitter' /></a>
	}
}
