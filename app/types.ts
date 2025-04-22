import { StaticImageData } from "next/image";
import React from "react";

// Eventually I want to collapse this and Project together. For now I just need
// a way to jot down all of the projects I had at work
export type WorkProject = {
	name: string;
	url: string;
	startDate: Date;
	endDate: Date;
};

export type Education = {
	award: string;
	institution: string;
	location: string;
	details?: string;
	startDate: Date;
	endDate: Date;
};

export type Milestone = {
	description: React.ReactNode;
	startDate: Date;
	endDate?: Date;
	projects?: WorkProject[];
};

export type Experience = {
	id: string;
	title: React.ReactNode;
	description?: React.ReactNode;
	customSubtitle?: React.ReactNode;
	startDate: Date;
	endDate?: Date;
	projects?: WorkProject[];
	milestones?: Milestone[];
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
