import { StaticImageData } from 'next/image'
import React from 'react'

export type Company = {
	name: string,
	url: string
}

export type Job = {
	job: string,
	company: Company,
	description: React.ReactNode,
	wasInHouse: boolean,
	startDate: Date,
	endDate?: Date,
}

export type SkillType = 'Hard' | 'Soft'

export type Skill = {
	name: string,
	proficiency: number,
	skillType: SkillType,
	tags: string[]
}

export type ProjectType = 'Game' | 'Code'

export type Project = {
	title: string,
	subtitle: string,
	slug: string,
	authorDate: Date,
	startDate?: Date,
	releaseDate: Date,
	type: ProjectType,
	thumbnail: StaticImageData,
	url: string,
	description: React.ReactNode,
}
