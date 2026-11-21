// Work history and education, most recent first.

export type ProjectLink = {
	name: string
	url: string
}

export type Experience = {
	role: string
	company: string
	period: string
	description?: string
	highlights?: string[]
	projects?: ProjectLink[]
}

export type Education = {
	award: string
	institution: string
	location: string
	period: string
	details?: string
}

export const experience: Experience[] = [
	{
		role: 'Senior Software Engineer',
		company: 'Roblox · Music Team',
		period: '2021 — Now',
		description:
			'Building new and exciting projects with an incredible team to bring the world together through play.',
		projects: [
			{
				name: 'Now Playing',
				url: 'https://devforum.roblox.com/t/amplify-your-experiences-with-new-music/3164792',
			},
			{
				name: 'Toolbox Audio UX',
				url: 'https://devforum.roblox.com/t/new-audio-discovery-features/2618235',
			},
			{
				name: 'Events Platform',
				url: 'https://devforum.roblox.com/t/events-platform-full-release/2226550',
			},
			{
				name: 'Verified Badge',
				url: 'https://devforum.roblox.com/t/introducing-the-verified-badge/1980978',
			},
			{
				name: 'Developer Modules',
				url: 'https://create.roblox.com/docs/resources/modules',
			},
		],
	},
	{
		role: 'Software Engineering Intern',
		company: 'Roblox · Apps Team',
		period: 'Summer 2019 & 2020',
		highlights: [
			"Worked remotely amidst the COVID-19 pandemic to rebuild Roblox's in-game Bubble Chat from the ground up using a React-like framework.",
			'Worked in house at Roblox HQ on the apps layer. Removed bloat, established best practices, and collaborated with senior engineers to improve their existing workflows.',
		],
		projects: [
			{
				name: 'Bubble Chat',
				url: 'https://devforum.roblox.com/t/the-big-bubble-chat-rework/819483',
			},
		],
	},
	{
		role: 'Programmer, Level Designer',
		company: 'Novaly Studios',
		period: '2017 — 2020',
		highlights: [
			'Continued where we left off after the Accelerator program, creating the world of Car Tycoon.',
			'Squashed bugs and created the Robbery feature for Bandit Simulator, introducing a brand new way to play the game.',
		],
		projects: [
			{
				name: 'Bandit Simulator',
				url: 'https://www.roblox.com/games/2563455047/Bandit-Simulator',
			},
			{ name: 'Wild Revolvers', url: '/projects/wild-revolvers' },
		],
	},
	{
		role: 'Level Design Contractor',
		company: 'Roblox',
		period: '2018',
		description:
			'Remote contract position creating the Aquaman event experience for a Warner Bros. sponsorship.',
		projects: [{ name: 'Aquaman', url: '/projects/aquaman' }],
	},
	{
		role: 'Accelerator Program',
		company: 'Roblox',
		period: '2018',
		description:
			'Three months in house at Roblox HQ with my team, creating a brand new game from the ground up.',
	},
	{
		role: 'Freelance developer',
		company: 'Various studios',
		period: '2016 — 2018',
		description:
			'Several years working with different studios on the Roblox platform as I built up my skillset.',
	},
]

export const education: Education[] = [
	{
		award: 'AS in Computer Science',
		institution: 'Dutchess Community College',
		location: 'Poughkeepsie, NY',
		period: '2019 — 2021',
		details: 'GPA 4.0',
	},
	{
		award: 'High School Equivalency Diploma',
		institution: 'Adult Learning Institute',
		location: 'Poughkeepsie, NY',
		period: '2018',
	},
]
