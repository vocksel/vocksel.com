import PropTypes from 'prop-types'
import React from 'react'
import style from './YoutubeEmbed.scss'

export default class YoutubeEmbed extends React.Component {
	static propTypes = {
		// The end part of the YouTube video URL that acts as its ID. For
		// example, if you have the YouTube URL youtube.com/watch?v=d0uBuSYCD4g
		// then "d0uBuSYCD4g" is the ID to use.
		id: PropTypes.string
	};

	render() {
		return (
			<div className={style.videoContainer}>
				<iframe className={style.video} src={'https://www.youtube.com/embed/' + this.props.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		)
	}
}
