import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import style from './CaptionedImage.scss';

export default class CaptionedImage extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		caption: PropTypes.string.isRequired,
		src: PropTypes.string.isRequired,
		alt: PropTypes.string,
	};

	render() {
		return (
			<div className={classNames(style.container, this.props.className)}>
				<img className={style.image} src={this.props.src} alt={this.props.alt} />

				<div className={classNames(style.captionContainer, style.gradient)}>
					<p className={style.caption}>{this.props.caption}</p>
				</div>
			</div>
		);
	}
}
