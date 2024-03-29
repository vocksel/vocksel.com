import React from 'react'
import { Helmet } from 'react-helmet'
import projects from 'projects'
import ProjectTile from 'components/ProjectTile'
import bulma from 'css/bulma.scss'
import style from './ProjectList.scss'

const ProjectList = () => {
	const tiles = projects.map(project =>
		<ProjectTile slide='x' className={style.tile} key={project.slug} project={project} />
	)

	return (
		<React.Fragment>
			<Helmet>
				<title>Projects &mdash; Marin Minnerly</title>
			</Helmet>

			<div className={bulma.section}>
				<div className={bulma.container}>
					<h1>Projects</h1>

					{tiles}
				</div>
			</div>
		</React.Fragment>
	)
}

export default ProjectList
