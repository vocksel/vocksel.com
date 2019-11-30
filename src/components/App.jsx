import React from 'react';
import projects from '../projects';
import bulma from '../bulma.scss';

export default class App extends React.Component {
	getProjects() {
		return projects.map(project => (
			<div key={project.slug}>
				<h3><a href={project.url}>{project.title}</a></h3>

				<p>{project.shortDescription}</p>

				<img src={project.thumbnail} />

				{project.description}
			</div>
		));
	}

	render() {
		return (
			<div className={bulma.container}>
				<section className={bulma.section}>
					<h1>About</h1>

					<p>Hi I'm David Minnerly. I'm a programmer and 3D modeler, and I love creating new experiences and expressing myself through artistic mediums.</p>
				</section>

				<section className={bulma.section}>
					<h1>Experience</h1>

					<p>Software Engineering intern at Roblox working on the mobile app</p>

					<p>Accelerator creating a game in-house at Roblox</p>
				</section>

				<section className={bulma.section}>
					<h1>Projects</h1>

					{this.getProjects()}
				</section>

				<section className={bulma.section}>
					<h1>Contact</h1>

					<p><a href="https://twitter.com/vocksel_">Twitter</a></p>
					<p>LinkedIn</p>
					<p>Email</p>
				</section>
			</div>
		);
	}
}
