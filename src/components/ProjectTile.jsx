import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CaptionedImage from './CaptionedImage';
import style from './ProjectTile.scss';

export default class ProjectTile extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		project: PropTypes.shape({
			slug: PropTypes.string,
			title: PropTypes.string,
			shortDescription: PropTypes.string,
			thumbnail: PropTypes.string,
			description: PropTypes.element,
		}),
	};

	render() {
		const { project } = this.props;

		return (
			<div className={classNames(style.container, this.props.className)}>
				<Link to={`/projects/${project.slug}/`} className={style.link}>
					<CaptionedImage className={style.image} src={project.thumbnail} caption={project.title} />
				</Link>
			</div>
		);
	}
}
