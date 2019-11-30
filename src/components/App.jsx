import React from 'react';
import { ProjectType } from 'types';
import ProjectTile from './ProjectTile';
import Keyword from './Keyword';
import projects from '../projects';
import bulma from '../bulma.scss';

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
				<section className={bulma.section}>
					<h1>About</h1>

					<p>I'm <Keyword>David Minnerly</Keyword>&mdash;a programmer and 3D modeler that loves creating new experiences through artistic mediums.</p>
				</section>

				<section className={bulma.section}>
					<h1>Experience</h1>

					<p>Software Engineering intern at Roblox working on the mobile app</p>

					<p>Accelerator creating a game in-house at Roblox</p>
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
						<li>Copyright &copy; 2019 David Minnerly</li>
						<li><a href="https://github.com/vocksel/davidminnerly.com">Source</a></li>
					</ul>
				</footer>
			</div>
		);
	}
}
