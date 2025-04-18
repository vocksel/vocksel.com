import { StaticImageData } from "next/image";
import React from "react";

export type Company = {
	name: string;
	url: string;
};

// Eventually I want to collapse this and Project together. For now I just need
// a way to jot down all of the projects I had at work
export type WorkProject = {
	name: string;
	url: string;
	startDate: Date;
	endDate: Date;
};

export type Job = {
	job: string;
	company: Company;
	description: React.ReactNode;
	wasInHouse: boolean;
	startDate: Date;
	endDate?: Date;
	projects?: WorkProject[];
};

export type Education = {
	award: string;
	institution: string;
	location: string;
	details?: string;
	dates: number[];
};

export type Experience = {
	title: React.ReactNode;
	description?: React.ReactNode;
	startDate: Date;
	endDate?: Date;
};

export type SkillType = "Hard" | "Soft";

export type Skill = {
	name: string;
	proficiency: number;
	skillType: SkillType;
	tags: string[];
};

export type ProjectType = "Game" | "Code";

export type Project = {
	title: string;
	subtitle: string;
	slug: string;
	authorDate: Date;
	startDate?: Date;
	releaseDate: Date;
	type: ProjectType;
	thumbnail: StaticImageData;
	url: string;
	description: React.ReactNode;
};
