import React from 'react'
import style from './Keyword.scss'

export default class Keyword extends React.Component {
	render() {
		return <span className={style.keyword}>{this.props.children}</span>
	}
}
