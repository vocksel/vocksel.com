import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HorizontalList from '../components/HorizontalList';
import projects from 'projects';
import bulma from 'bulma.scss';
import style from './ProjectDetail.scss';

const getProjectLink = (index, text) => {
	const project = projects[index];
	if (project) {
		return <Link to={`/projects/${project.slug}`}>{text}</Link>;
	} else {
		return <span>{text}</span>;
	}
};

const ProjectDetail = () => {
	const { projectId } = useParams();

	const project = projects.find(project => project.slug == projectId);
	const index = projects.indexOf(project);

	return (
		<div className={bulma.section}>
			<h1 className={style.title}>{project.title} <span className={style.date}> &mdash; {project.releaseDate.getFullYear()}</span></h1>
			<p className={style.subtitle}>{project.subtitle}</p>

			<img src={project.thumbnail} alt="" />

			<section className={style.description}>
				{project.description}
			</section>

			<HorizontalList isCentered>
				{getProjectLink(index-1, '< Prev')}
				<Link to="/">Home</Link>
				{getProjectLink(index+1, 'Next >')}
			</HorizontalList>
		</div>
	);
};

export default ProjectDetail;
