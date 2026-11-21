// Work history, migrated from the legacy site (legacy/src/experiences.js).
// Ordered most-recent first.

export type Experience = {
	role: string
	company: string
	period: string
	description: string
}

export const experience: Experience[] = [
	{
		role: 'Software Engineer',
		company: 'Roblox',
		period: '2021 — Now',
		description:
			'Full-time, building new projects with an incredible team to bring the world together through play.',
	},
	{
		role: 'Software Engineering Intern',
		company: 'Roblox',
		period: '2020',
		description:
			"Rebuilt Roblox's in-game Bubble Chat from the ground up using a React-like framework.",
	},
	{
		role: 'Level Designer',
		company: 'Novaly Studios',
		period: '2017 — 2020',
		description: 'Worked with the team to create the world of Car Tycoon.',
	},
	{
		role: 'Software Engineering Intern',
		company: 'Roblox',
		period: '2019',
		description:
			'Ten weeks on the application layer of the platform — removing bloat and helping set best practices.',
	},
	{
		role: 'Level Design Contractor',
		company: 'Roblox',
		period: '2018',
		description:
			'Built Aquaman: City of Rolantis for a Warner Bros. sponsorship.',
	},
	{
		role: 'Accelerator Intern',
		company: 'Roblox',
		period: '2018',
		description:
			'Three months in-house at Roblox HQ creating a brand new game from the ground up.',
	},
	{
		role: 'Freelance developer',
		company: 'Various studios',
		period: '2016 — 2018',
		description:
			'Several years working with different studios on the Roblox platform as I built up my skillset.',
	},
]
