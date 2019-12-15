import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HorizontalList from '../components/HorizontalList';
import Button from '../components/Button';
import NoMatch from './NoMatch';
import projects from 'projects';
import { ProjectType } from 'types';
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

	if (!project) {
		return <NoMatch />;
	}

	let playButton;
	if (project.type === ProjectType.Game && project.url) {
		playButton = <Button url={project.url} text='Play on Roblox' />;
	}

	return (
		<div className={bulma.section}>
			<Helmet>
				<title>{project.title} &mdash; David Minnerly</title>
			</Helmet>

			<div className={bulma.container}>
				<h1 className={style.title}>{project.title} <span className={style.date}> &mdash; {project.releaseDate.getFullYear()}</span></h1>
				<p className={style.subtitle}>{project.subtitle}</p>

				<img src={project.thumbnail} alt="" />

				<section>
					{project.description}
				</section>

				{playButton}

				<HorizontalList isCentered>
					{getProjectLink(index-1, '< Prev')}
					<Link to="/">Home</Link>
					{getProjectLink(index+1, 'Next >')}
				</HorizontalList>
			</div>
		</div>
	);
};

export default ProjectDetail;
