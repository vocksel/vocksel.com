import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CaptionedImage from './CaptionedImage'
import style from './ProjectTile.scss'

export default class ProjectTile extends React.Component {
	static propTypes = {
		className: PropTypes.string,

		// Determines the direction that the tile will slide when hovered.
		slide: PropTypes.oneOf([ 'x', 'y' ]),

		project: PropTypes.shape({
			slug: PropTypes.string,
			title: PropTypes.string,
			shortDescription: PropTypes.string,
			thumbnail: PropTypes.string,
			description: PropTypes.element,
		}),
	};

	static defaultProps = {
		slide: 'y',
	}

	render() {
		const { project, slide } = this.props

		let hoverClass
		if (slide == 'x') {
			hoverClass = style.hoverRight
		} else {
			hoverClass = style.hoverUp
		}

		return (
			<div className={classNames(style.container, this.props.className)}>
				<Link to={`/projects/${project.slug}/`} className={style.link}>
					<CaptionedImage className={classNames(style.image, hoverClass)} src={project.thumbnail} caption={project.title} />
				</Link>
			</div>
		)
	}
}
