import PropTypes from 'prop-types';
import React from 'react';
import style from './Button.scss';

export default class Button extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	};

	render() {
		const { url, text } = this.props;
		return (
			<a href={url} className={style.button}>
				<span className={style.text}>{text}</span> <i class='fas fa-play'></i>
			</a>
		);
	}
}
