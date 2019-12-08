import React from 'react';
import { useParams } from 'react-router-dom';
import projects from 'projects';
import style from './ProjectDetail.scss';
import bulma from 'bulma.scss';

const ProjectDetail = () => {
	const { projectId } = useParams();

	const project = projects.find(project => project.slug == projectId);

	return (
		<div>
			<h1 className={style.title}>{project.title}</h1>
			<p className={style.subtitle}>{project.subtitle}</p>

			<img className={style.masthead} src={project.thumbnail} alt="" />

			<section className={style.description}>
				{project.description}
			</section>
		</div>
	);
};

export default ProjectDetail;
