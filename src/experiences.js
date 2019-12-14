// Contains data for past work experience

import React from 'react';
import { Link } from 'react-router-dom';
import Company from './Company';
import urls from './urls';

const novaly = new Company('Novaly Studios', urls.novaly);
const roblox = new Company('Roblox Corporation', urls.roblox);

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
		description: '10 weeks of working in house at Roblox HQ on the application layer of the platform. Removed bloat, helped set best practices, and worked with full-time employees to make their existing workflows better.',
		wasInHouse: true,
		startDate: new Date(2019, 5),
		endDate: new Date(2019, 7),
	},

	{
		job: 'Programmer',
		company: novaly,
		description: <span>Created the Robbery feature for <a href='https://www.roblox.com/games/2563455047/Bandit-Simulator'>Bandit Simulator</a> and squashed bugs.</span>,
		wasInHouse: false,
		startDate: new Date(2018, 10),
		endDate: new Date(2019, 0),
	},

	{
		job: 'Level Design contractor',
		company: roblox,
		description: <span>Worked for Roblox to create <Link to='/projects/aquaman'>Aquaman: City of Rolantis</Link> for a Warner Brother's sponsorship.</span>,
		wasInHouse: false,
		startDate: new Date(2018, 6),
		endDate: new Date(2018, 10),
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
