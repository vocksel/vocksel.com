import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import style from './HorizontalList.scss'

export default class HorizontalList extends React.Component {
	static propTypes = {
		isCentered: PropTypes.bool,
		isRightAligned: PropTypes.bool,
	};

	render() {
		const isCentered = this.props.isCentered ? style.isCentered : ''
		const isRightAligned = this.props.isRightAligned ? style.isRightAligned : ''

		return (
			<ul className={classNames(style.list, isCentered, isRightAligned)}>
				{React.Children.map(this.props.children, item => <li>{item}</li>)}
			</ul>
		)
	}
}
