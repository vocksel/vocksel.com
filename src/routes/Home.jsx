import React from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames'
import Experience from '../components/Experience'
import HorizontalList from '../components/HorizontalList'
import Keyword from '../components/Keyword'
import ProjectTile from '../components/ProjectTile'
import bulma from 'css/bulma.scss'
import generic from 'css/generic.scss'
import { ProjectType } from 'types'
import getAge from 'getAge'
import experiences from 'experiences'
import projects from 'projects'
import me from 'me.jpg'
import urls from 'urls.json'

export default class Home extends React.Component {
	getFreelanceProjects() {
		const freelance = projects.filter(project => project.type === ProjectType.Game)

		return freelance.map(project =>
			<ProjectTile className={classNames(bulma.column, bulma['is-one-third'])}
				key={project.slug} project={project} />)
	}

	getCodeProjects() {
		const code = projects.filter(project => project.type === ProjectType.Code)

		// Need a new component to return. Should be just be a list of my code projects
		return code.map(project =>
			<ProjectTile className={classNames(bulma.column, bulma['is-one-third'])}
				key={project.slug} project={project} />)
	}

	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Marin Minnerly</title>
				</Helmet>

				<section className={bulma.section}>
					<div className={bulma.container}>
						<div className={bulma.columns}>
							<div className={bulma.column}>
								<p className={generic.bigText}>I'm <Keyword>Marin Minnerly</Keyword>&mdash;a {getAge()} year old Software Engineer and hobbyist game developer that loves creating new experiences through artistic mediums 💖</p>

								<HorizontalList>
									<a href={urls.twitter} title='Follow on Twitter for updates'>Twitter</a>
									<a href={urls.github} title='Check out my code on GitHub'>GitHub</a>
									<a href={urls.linkedin} title='Connect with me on LinkedIn'>LinkedIn</a>
									<a href={urls.email} title='Shoot me an email'>Email</a>
								</HorizontalList>
							</div>

							<div className={classNames(bulma.column, bulma['is-narrow'])}>
								<img className={bulma.image} src={me} alt="" />
							</div>
						</div>
					</div>
				</section>

				<section className={bulma.section}>
					<div className={bulma.container}>
						<h1>Experience</h1>

						{experiences.map((exp, index) => <Experience key={index} exp={exp} />)}
					</div>
				</section>

				<section className={bulma.section}>
					<div className={bulma.container}>
						<h1>Projects</h1>

						<div className={classNames(bulma.columns, bulma['is-multiline'])}>
							{this.getFreelanceProjects()}

							{this.getCodeProjects()}
						</div>
					</div>
				</section>
			</React.Fragment>
		)
	}
}
