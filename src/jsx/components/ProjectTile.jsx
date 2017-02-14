import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function ProjectTile(props) {
  return (
    <Link to={`/projects/${props.slug}`} className="project-tile grid__col grid__col--1-of-2">
      <h1 className="project-tile__title">{props.name}</h1>
      <img className="project-tile__image" src={props.images[0]} />
    </Link>
  );
}

ProjectTile.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.array
};
