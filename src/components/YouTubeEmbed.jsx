import PropTypes from 'prop-types';
import React from 'react';
import style from './YoutubeEmbed.scss';

export default class YoutubeEmbed extends React.Component {
	static propTypes = {
		src: PropTypes.string
	};

	render() {
		return (
			<div className={style.videoContainer}>
				<iframe className={style.video} src={this.props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		);
	}
}
