import ProjectTile from 'components/ProjectTile'
import projects from 'projects'
import React from 'react'
import { Helmet } from 'react-helmet'
import style from './ProjectList.module.scss'

const ProjectList = () => {
	const tiles = projects.map(project =>
		<ProjectTile slide='x' className={style.tile} key={project.slug} project={project} />
	)

	return (
		<React.Fragment>
			<Helmet>
				<title>Projects &mdash; Marin Minnerly</title>
			</Helmet>

			<div className={'section'}>
				<div className={'container'}>
					<h1>Projects</h1>

					{tiles}
				</div>
			</div>
		</React.Fragment>
	)
}

export default ProjectList
