import React, { PropTypes } from 'react';

export default function ProjectPage(props) {
  return (
    <div className="project">
      <h1 className="project__title">{props.name}</h1>

      <div className="project__gallery">
        {props.images.map(image => <img key={image} src={image} />)}
      </div>

      <div className="project__meta">
        <p className="project__date">Released {props.released}.</p>

        <ul className="project__tags">
          {props.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>

      <div className="project__description">
        {props.children}
      </div>
    </div>
  );
}

ProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
  released: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]).isRequired,
  tags: PropTypes.array
};
