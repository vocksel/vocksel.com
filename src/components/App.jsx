import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { ProjectType } from 'types';
import getAge from 'getAge';
import Copyright from './Copyright';
import ProjectTile from './ProjectTile';
import Keyword from './Keyword';
import projects from '../projects';
import bulma from '../bulma.scss';
import boy from 'boy.jpg';

class Company {
	constructor(name, url) {
		this.name = name;
		this.url = url;
	}
}

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
		wasInHouse: true,
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

function formatDate(date) {
	return moment(date).format('MMM YYYY');
}

function getExperiences() {
	return experiences.map(exp => {
		const startDate = formatDate(exp.startDate);
		const endDate = exp.endDate ? formatDate(exp.endDate) : 'Present';
		const connector = exp.wasInHouse ? 'at' : 'for';

		return (
			<div className={bulma.columns}>
				<p className={bulma.column}>{startDate}&ndash;{endDate}</p>

				<div className={classNames(bulma.column, bulma['is-two-thirds'])}>
					<p>{exp.job} {connector} <a href={exp.company.url}>{exp.company.name}</a>.</p>

					<p className={bulma.subtitle}>{exp.description}</p>
				</div>
			</div>
		);
	});
}

export default class App extends React.Component {
	getFreelanceProjects() {
		const freelance = projects.filter(project => project.type === ProjectType.Game);

		return freelance.map(project =>
			<ProjectTile key={project.slug} project={project} />);
	}

	getCodeProjects() {
		const code = projects.filter(project => project.type === ProjectType.Code);

		// Need a new component to return. Should be just be a list of my code projects
		return code.map(project =>
			<ProjectTile key={project.slug} project={project} />);
	}

	render() {
		return (
			<div className={bulma.container}>
				<section className={classNames(bulma.section, bulma.columns)}>
					<div className={bulma.column}>
					<h1>About</h1>

						<p>I'm <Keyword>David Minnerly</Keyword>&mdash;a {getAge()} year old freelance programmer and 3D modeler that loves creating new experiences through artistic mediums. <img src='' alt='💖' /></p>
					</div>

					<div className={classNames(bulma.column, bulma['is-narrow'])}>
						<img className={bulma.image} src={boy} alt="" />
					</div>
				</section>

				<section className={bulma.section}>
					<h1>Experience</h1>

					{getExperiences()}
				</section>

				<section className={bulma.section}>
					<h1>Projects</h1>

					{this.getFreelanceProjects()}

					{this.getCodeProjects()}
				</section>


				<section className={bulma.section}>
					<h1>Contact</h1>

					<p><a href="https://twitter.com/vocksel_">Twitter</a></p>
					<p><a href="https://www.linkedin.com/in/david-minnerly-916809149/">LinkedIn</a></p>
					<p><a href="mailto:david@vocksel.com">Email</a></p>
				</section>

				<footer className={bulma.section}>
					<ul>
						<li><Copyright /></li>
						<li><a href="https://github.com/vocksel/davidminnerly.com">Source</a></li>
					</ul>
				</footer>
			</div>
		);
	}
}
