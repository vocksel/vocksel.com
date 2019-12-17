import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import style from './Button.scss';

export default class Button extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	};

	render() {
		const { url } = this.props;

		return (
			<div href={url} className={classNames(style.button, style.outline )}>
				{this.props.children}
			</div>
		);
	}
}
