// Contains data for past work experience

import React from 'react'
import { Link } from 'react-router-dom'
import Company from './Company'
import urls from './urls'

const novaly = new Company('Novaly Studios', urls.novaly)
const roblox = new Company('Roblox Corporation', urls.roblox)
// const bitsquid = new Company('Bitsquid Games', urls.bitsquid);

const experiences = [
	{
		job: 'Software Engineer',
		company: roblox,
		description: 'Employed full-time working on new and exciting projects with an incredible team to bring the world together through play.',
		wasInHouse: true,
		startDate: new Date(2021, 5),
	},

	{
		job: 'Software Engineering Intern',
		company: roblox,
		description: 'Worked remotely amindst the COVID-19 pandemic for 10 weeks to rebuild Roblox\'s in-game Bubble Chat from the ground up using a React-like framework.',
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
		job: 'Level Designer',
		company: novaly,
		description: <span>Continued where we left off after being in the Accelerator program. I worked with the team to create the world of <a href='https://www.roblox.com/games/5000625666/NITRO-DELOREAN-Car-Tycoon-Demo'>Car Tycoon!</a></span>,
		wasInHouse: false,
		startDate: new Date(2017, 5),
		endDate: new Date(2020, 1),
	},

	{
		job: 'Software Engineering Intern',
		company: roblox,
		description: '10 weeks of working in house at Roblox HQ on the application layer of the platform. Removed bloat, helped set best practices, and worked with full-time employees to make their existing workflows better.',
		wasInHouse: true,
		startDate: new Date(2019, 5),
		endDate: new Date(2019, 7),
	},

	{
		job: 'Programmer',
		company: novaly,
		description: <span>Squashed bugs and created the Robbery feature for <a href='https://www.roblox.com/games/2563455047/Bandit-Simulator'>Bandit Simulator</a>, introducing a brand new way to play the game.</span>,
		wasInHouse: false,
		startDate: new Date(2018, 10),
		endDate: new Date(2019, 0),
	},

	{
		job: 'Level Design contractor',
		company: roblox,
		description: <span>Worked for Roblox to create <Link to='/projects/aquaman'>Aquaman: City of Rolantis</Link> for a Warner Bros. sponsorship.</span>,
		wasInHouse: false,
		startDate: new Date(2018, 6),
		endDate: new Date(2018, 10),
	},

	{
		job: 'Accelerator Intern',
		company: roblox,
		description: 'The Accelerator program gave my team and I the opportunity to work in-house at Roblox HQ for 3 months to create a brand new game from the ground up.',
		wasInHouse: true,
		startDate: new Date(2018, 5),
		endDate: new Date(2018, 7),
	},

	{
		job: 'Various freelance jobs',
		company: roblox,
		description: 'A block of several years that I spent working with different studios on the Roblox platform as I built up my skillset.',
		wasInHouse: false,
		// This is around the time I made the Trade Shop for Anne, which was my
		// first time getting my feet wet with a real project.
		// https://www.roblox.com/games/417640647/Trade-Shop
		startDate: new Date(2016, 4),
		endDate: new Date(2018, 5),
	}
]

export default experiences
