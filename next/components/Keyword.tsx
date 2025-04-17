import React from 'react'
import style from './Keyword.scss'

type Props = {
	children: React.ReactNode
}

export default function Keyword({ children }: Props) {
	return <span className={style.keyword}>{children}</span>
}

