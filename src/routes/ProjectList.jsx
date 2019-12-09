import classNames from 'classnames';
import React from 'react';
import projects from 'projects';
import ProjectTile from 'components/ProjectTile';
import bulma from 'bulma.scss';

const ProjectList = () => {
	const tiles = projects.map(project =>
		<ProjectTile className={classNames(bulma.column, bulma['is-half'])} key={project.slug} project={project} />
	);

	return (
		<div className={classNames(bulma.columns, bulma['is-multiline'])}>
			{tiles}
		</div>
	);
};

export default ProjectList;
