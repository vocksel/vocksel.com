import React, { Component, PropTypes } from 'react';

export default class ProjectPage extends Component {
  render() {
    return (
      <div className="project">
        <h1 className="project__title">{this.props.name}</h1>

        <div className="project__gallery">
          {this.props.images.map(image => <img key={image} src={image} />)}
        </div>

        <div className="project__meta">
          <p className="project__date">Released {this.props.released}.</p>

          <ul className="project__tags">
            {this.props.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>

        <div className="project__description">
          {this.props.children}
        </div>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
  released: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]).isRequired,
  tags: PropTypes.array
};
