import Link from "next/link";
import React from "react";
import { Company, Education, Job, Skill } from "./types";

const urls = {
	dutchess: "https://sunydutchess.edu/",
	novaly: "https://twitter.com/novalystudios",
	roblox: "https://corp.roblox.com",
	bitsquid: "https://twitter.com/BitsquidGames",
};

const novaly: Company = {
	name: "Novaly Studios",
	url: urls.novaly,
};
const roblox: Company = {
	name: "Roblox Corporation",
	url: urls.roblox,
};
// const bitsquid: Company = {
// 	name: 'Bitsquid Games',
// 	url: urls.bitsquid
// }

export const jobs: Job[] = [
	{
		job: "Senior Software Engineer",
		company: roblox,
		description:
			"Employed full-time working on new and exciting projects with an incredible team to bring the world together through play.",
		wasInHouse: true,
		startDate: new Date(2025, 1),
	},

	{
		job: "Software Engineer",
		company: roblox,
		description:
			"Employed full-time working on new and exciting projects with an incredible team to bring the world together through play.",
		wasInHouse: true,
		startDate: new Date(2021, 5),
		endDate: new Date(2025, 1),
	},

	{
		job: "Software Engineering Intern",
		company: roblox,
		description:
			"Worked remotely amindst the COVID-19 pandemic for 10 weeks to rebuild Roblox's in-game Bubble Chat from the ground up using a React-like framework.",
		wasInHouse: true,
		startDate: new Date(2020, 5),
		endDate: new Date(2020, 7),
	},

	// {
	// 	job: 'Frontend Programmer',
	// 	company: bitsquid,
	// 	description: 'All-purpose programmer primarily writing React style code for frontend UI.',
	// 	wasInHouse: false,
	// 	startDate: new Date(2020, 0),
	// },

	{
		job: "Level Designer",
		company: novaly,
		description: (
			<span>
				Continued where we left off after being in the Accelerator
				program.I worked with the team to create the world of
				<a href="https://www.roblox.com/games/5000625666/NITRO-DELOREAN-Car-Tycoon-Demo">
					Car Tycoon!
				</a>
			</span>
		),
		wasInHouse: false,
		startDate: new Date(2017, 5),
		endDate: new Date(2020, 1),
	},

	{
		job: "Software Engineering Intern",
		company: roblox,
		description:
			"10 weeks of working in house at Roblox HQ on the application layer of the platform. Removed bloat, helped set best practices, and worked with full-time employees to make their existing workflows better.",
		wasInHouse: true,
		startDate: new Date(2019, 5),
		endDate: new Date(2019, 7),
	},

	{
		job: "Programmer",
		company: novaly,
		description: (
			<span>
				Squashed bugs and created the Robbery feature for{" "}
				<a href="https://www.roblox.com/games/2563455047/Bandit-Simulator">
					{" "}
					Bandit Simulator{" "}
				</a>
				, introducing a brand new way to play the game.
			</span>
		),
		wasInHouse: false,
		startDate: new Date(2018, 10),
		endDate: new Date(2019, 0),
	},

	{
		job: "Level Design contractor",
		company: roblox,
		description: (
			<span>
				Worked for Roblox to create{" "}
				<Link href="/projects/aquaman">
					{" "}
					Aquaman: City of Rolantis{" "}
				</Link>{" "}
				for a Warner Bros. sponsorship.
			</span>
		),
		wasInHouse: false,
		startDate: new Date(2018, 6),
		endDate: new Date(2018, 10),
	},

	{
		job: "Accelerator Intern",
		company: roblox,
		description:
			"The Accelerator program gave my team and I the opportunity to work in-house at Roblox HQ for 3 months to create a brand new game from the ground up.",
		wasInHouse: true,
		startDate: new Date(2018, 5),
		endDate: new Date(2018, 7),
	},

	{
		job: "Various freelance jobs",
		company: roblox,
		description:
			"A block of several years that I spent working with different studios on the Roblox platform as I built up my skillset.",
		wasInHouse: false,
		// This is around the time I made the Trade Shop for Anne, which was my
		// first time getting my feet wet with a real project.
		// https://www.roblox.com/games/417640647/Trade-Shop
		startDate: new Date(2016, 4),
		endDate: new Date(2018, 5),
	},
];

export const education: Education[] = [
	{
		award: "AS in Computer Science",
		institution: "Dutchess Community College",
		location: "Poughkeepsie, NY",
		details: "GPA 4.0",
		dates: [2019, 2021],
	},
	{
		award: "High School Equivalency Diploma",
		institution: "Adult Learning Institute",
		location: "Poughkeepsie, NY",
		dates: [2018, 2018],
	},
];

export const skills: Skill[] = [
	{
		name: "Git",
		proficiency: 8,
		skillType: "Hard",
		tags: ["CLI"],
	},

	{
		name: "Git",
		proficiency: 8,
		skillType: "Hard",
		tags: ["CLI"],
	},
	{
		name: "Luau",
		proficiency: 9,
		skillType: "Hard",
		tags: ["Language"],
	},
	{
		name: "Time management",
		proficiency: 5,
		skillType: "Soft",
		tags: ["Operational"],
	},
	{
		name: "Project planning",
		proficiency: 7,
		skillType: "Soft",
		tags: ["Operational"],
	},
	{
		name: "Tech spec writing",
		proficiency: 6,
		skillType: "Soft",
		tags: ["Operational"],
	},
	{
		name: "Jira",
		proficiency: 7,
		skillType: "Soft",
		tags: ["Software"],
	},
	{
		name: "Agile",
		proficiency: 5,
		skillType: "Soft",
		tags: ["Operational"],
	},
	{
		name: "Sprint planning",
		proficiency: 6,
		skillType: "Soft",
		tags: ["Operational"],
	},
	{
		name: "Interviewing",
		proficiency: 1,
		skillType: "Soft",
		tags: ["Operational"],
	},
	{
		name: "Code review",
		proficiency: 7,
		skillType: "Hard",
		tags: ["Operational"],
	},
	{
		name: "CI/CD",
		proficiency: 6,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "GitHub Actions",
		proficiency: 8,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "C#",
		proficiency: 4,
		skillType: "Hard",
		tags: ["Language"],
	},
	{
		name: "C++",
		proficiency: 3,
		skillType: "Hard",
		tags: ["Language"],
	},
	{
		name: "Confluence",
		proficiency: 0,
		skillType: "Soft",
		tags: ["Software"],
	},
	{
		name: "On-call",
		proficiency: 6,
		skillType: "Soft",
		tags: ["Operational"],
	},
	{
		name: "3D modeling",
		proficiency: 6,
		skillType: "Hard",
		tags: ["Software"],
	},
	{
		name: "VS Code",
		proficiency: 8,
		skillType: "Soft",
		tags: ["Software"],
	},
	{
		name: "Storybooking",
		proficiency: 8,
		skillType: "Soft",
		tags: ['"Software, UI/UX"'],
	},
	{
		name: "Figma",
		proficiency: 6,
		skillType: "Soft",
		tags: ['"Software, UI/UX"'],
	},
	{
		name: "Slack",
		proficiency: 5,
		skillType: "Soft",
		tags: ["Software"],
	},
	{
		name: "Docker",
		proficiency: 6,
		skillType: "Soft",
		tags: ["Software"],
	},
	{
		name: "Blender",
		proficiency: 6,
		skillType: "Soft",
		tags: [],
	},
	{
		name: "Unit Testing",
		proficiency: 8,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "Integration Testing",
		proficiency: 7,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "JavaScript",
		proficiency: 6,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "TypeScript",
		proficiency: 3,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "React",
		proficiency: 8,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "Rust",
		proficiency: 4,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "Computer Science",
		proficiency: 7,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "Engineering",
		proficiency: 7,
		skillType: "Hard",
		tags: [],
	},
	{
		name: "CSS",
		proficiency: 4,
		skillType: "Hard",
		tags: ["Language"],
	},
	{
		name: "HTML",
		proficiency: 4,
		skillType: "Hard",
		tags: ["Language"],
	},
	{
		name: "Visual Studio",
		proficiency: 0,
		skillType: "Soft",
		tags: ["Software"],
	},
	{
		name: "Postman",
		proficiency: 0,
		skillType: "Soft",
		tags: ["Software"],
	},
	{
		name: "Code Coverage",
		proficiency: 0,
		skillType: "Hard",
		tags: [],
	},
];
