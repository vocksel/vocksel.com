import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import style from './HorizontalList.scss';

export default class HorizontalList extends React.Component {
	static propTypes = {
		isCentered: PropTypes.bool,
	};

	render() {
		return (
			<ul className={classNames(style.list, this.props.isCentered ? style.isCentered : '')}>
				{React.Children.map(this.props.children, item => <li>{item}</li>)}
			</ul>
		);
	}
}
