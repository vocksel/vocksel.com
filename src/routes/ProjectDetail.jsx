import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HorizontalList from '../components/HorizontalList';
import Button from '../components/Button';
import TweetIntent from '../components/TweetIntent';
import NoMatch from './NoMatch';
import projects from 'projects';
import { ProjectType } from 'types';
import bulma from 'bulma.scss';
import style from './ProjectDetail.scss';
import formatDate from '../formatDate';

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
		playButton = <Button theme='play'>
			<a href={project.url}>Play on Roblox <i className='fas fa-play'></i></a>
		</Button>;
	}

	return (
		<div className={bulma.section}>
			<Helmet>
				<title>{project.title} &mdash; David Minnerly</title>
			</Helmet>

			<div className={bulma.container}>
				<h1 className={style.title}>{project.title}</h1>
				<p className={style.subtitle}>{project.subtitle}</p>

				<img src={project.thumbnail} alt="" />

				<p className={style.subtitle}>Released {formatDate(project.releaseDate)} &mdash; Authored {formatDate(project.authorDate)}</p>

				<section>
					{project.description}
				</section>

				<div className={bulma.columns}>
					{playButton &&
						<div className={bulma.column}>
							{playButton}
						</div>
					}

					<div className={bulma.column}>
						<Button>
							<TweetIntent text={`${project.title}: ${project.subtitle}`}>
								Share on Twitter
							</TweetIntent>
						</Button>
					</div>
				</div>

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
