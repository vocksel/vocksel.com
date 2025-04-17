import { Job } from '@/app/experience'
import classNames from 'classnames'
import React from 'react'
import bulma from '../css/bulma.scss'
import generic from '../css/generic.scss'
import formatDate from '../formatDate'
import style from './Experience.scss'

type Props = {
	exp: Job,
}

export default function Experience({ exp }: Props) {
	const startDate = formatDate(exp.startDate)
	const endDate = exp.endDate ? formatDate(exp.endDate) : 'Present'
	const connector = exp.wasInHouse ? 'at' : 'for'

	return (
		<div className={classNames(style.container, bulma.columns)}>
			<p className={classNames(bulma.column, style.date)}>{startDate}&ndash;{endDate}</p>

			<div className={classNames(bulma.column, bulma['is-two-thirds'])}>
				<p className={style.job}>{exp.job} {connector} <a href={exp.company.url}>{exp.company.name}</a>.</p>

				<p className={classNames(style.description, generic.tight)}>{exp.description}</p>
			</div>
		</div>
	)
}
