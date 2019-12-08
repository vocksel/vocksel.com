import React from 'react';
import { useParams } from 'react-router-dom';
import projects from 'projects';
import style from './ProjectDetail.scss';

const ProjectDetail = () => {
	const { projectId } = useParams();

	const project = projects.find(project => project.slug == projectId);

	return (
		<div>
			<h2>{project.title}</h2>

			<img src={project.thumbnail} />

			<section className={style.description}>
				{project.description}
			</section>
		</div>
	);
};

export default ProjectDetail;
