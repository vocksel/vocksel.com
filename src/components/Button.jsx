import classNames from 'classnames';
import React from 'react';
import style from './Button.scss';

export default class Button extends React.Component {
	render() {
		return (
			<div className={classNames(style.button, style.outline )}>
				{this.props.children}
			</div>
		);
	}
}
