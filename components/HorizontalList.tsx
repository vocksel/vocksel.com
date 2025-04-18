import React from 'react'
import style from './HorizontalList.module.scss'

type Props = {
	isCentered?: boolean,
	isRightAligned?: boolean,
	children?: React.ReactNode
}

export default function HorizontalList(props: Props) {
	const isCentered = props.isCentered ? style.isCentered : ''
	const isRightAligned = props.isRightAligned ? style.isRightAligned : ''

	return (
		<ul className={`${style.list} ${isCentered} ${isRightAligned}`}>
			{React.Children.map(props.children, item => <li>{item}</li>)}
		</ul>
	)
}
