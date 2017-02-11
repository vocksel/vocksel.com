import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function ProjectTile(props) {
  return (
    <Link to={`/projects/${props.slug}`} className='project-tile'>
      <p className="project-tile__title">{props.name}</p>
      <img className="project-tile__image" src={props.images[0]} />
    </Link>
  );
}

ProjectTile.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.array
};
