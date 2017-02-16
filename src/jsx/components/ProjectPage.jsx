import React, { Component, PropTypes } from 'react';

export default class ProjectPage extends Component {
  render() {
    return (
      <div className="Project">
        <h1 className="Project-title">{this.props.name}</h1>

        <div className="ProjectGallery">
          {this.props.images.map(image => <img key={image} src={image} />)}
        </div>

        <ul className="ProjectMeta">
          <li>Released: {this.props.released}</li>
          <li>Tags: {this.props.tags.join(', ')}</li>
        </ul>

        <div className="Project-bio">
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
