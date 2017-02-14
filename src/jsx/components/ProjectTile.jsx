import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function ProjectTile(props) {
  return (
    <div className="project-tile grid__col grid__col--1-of-2">
      <Link to={`/projects/${props.slug}`}>
        <h1 className="project__title">{props.name}</h1>
        <img className="project__image" src={props.images[0]} />
      </Link>

      <div className="project__meta">
        <p>{props.released} &ndash; {props.tags.join(', ')}</p>
      </div>
    </div>
  );
}

ProjectTile.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.array
};
