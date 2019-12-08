// Contains data for past work experience

import React from 'react';
import Company from './Company';

const novaly = new Company('Novaly Studios', 'https://twitter.com/novalystudios');
const roblox = new Company('Roblox Corporation', 'https://corp.roblox.com/');

const experiences = [
	{
		job: 'Level Designer',
		company: novaly,
		description: 'Working on our upcoming social racing game.',
		wasInHouse: false,
		startDate: new Date(2017, 5),
	},

	{
		job: 'Software Engineering Intern',
		company: roblox,
		description: 'Worked to remove bloat and set best-practices in-house with my knowledge of the Roblox platform.',
		wasInHouse: true,
		startDate: new Date(2019, 5),
		endDate: new Date(2019, 7),
	},

	{
		job: 'Programmer',
		company: novaly,
		description: <span>Created the Robbery feature for <a href='https://www.roblox.com/games/2563455047/Bandit-Simulator'>Bandit Simulator</a> and squashed bugs.</span>,
		wasInHouse: false,
		startDate: new Date(2019, 5),
		endDate: new Date(2019, 7),
	},

	{
		job: 'Level Design contractor',
		company: roblox,
		description: 'Worked for Roblox to create the Aquaman game for a Warner Brother\'s sponsorship.',
		wasInHouse: false,
		startDate: new Date(2018, 6),
		endDate: new Date(2019, 10),
	},

	{
		job: 'Accelerator Intern',
		company: roblox,
		description: '3 month sprint to create a game working in house at Roblox HQ.',
		wasInHouse: true,
		startDate: new Date(2018, 5),
		endDate: new Date(2018, 7),
	},
];

export default experiences;
