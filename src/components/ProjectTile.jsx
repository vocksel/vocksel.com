import React from 'react';
import PropTypes from 'prop-types';

export default class ProjectTile extends React.Component {
	static propTypes = {
		project: PropTypes.shape({
			slug: PropTypes.string,
			title: PropTypes.string,
			shortDescription: PropTypes.string,
			thumbnail: PropTypes.string,
			description: PropTypes.element,
		})
	};

	render() {
		const { project } = this.props;

		return (
			<div>
				<h2><a href={project.url}>{project.title}</a></h2>

				<p>{project.shortDescription}</p>

				<img src={project.thumbnail} />

				{project.description}
			</div>
		);
	}
}
