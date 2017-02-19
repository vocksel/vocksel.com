import React, { Component, PropTypes } from 'react';

import ProjectGallery from './ProjectGallery';

export default class ProjectPage extends Component {
  render() {
    return (
      <div className="Project Grid">
        <div className="Grid-fullColumn">
          <h1 className="Project-title">{this.props.name}</h1>

          <ProjectGallery images={this.props.images} />

          <ul className="ProjectMeta">
            <li><i className="fa fa-clock-o" /> {this.props.released}</li>
            <li><i className="fa fa-tags" /> {this.props.tags.join(', ')}</li>
          </ul>

          <div className="Project-bio">
            {this.props.children}
          </div>
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
