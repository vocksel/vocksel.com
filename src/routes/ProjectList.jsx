import React from 'react';
import projects from 'projects';
import ProjectTile from 'components/ProjectTile';
import bulma from 'bulma.scss';
import style from './ProjectList.scss';

const ProjectList = () => {
	const tiles = projects.map(project =>
		<ProjectTile slide='x' className={style.tile} key={project.slug} project={project} />
	);

	return (
		<div className={bulma.section}>
			<div className={bulma.container}>
				{tiles}
			</div>
		</div>
	);
};

export default ProjectList;
