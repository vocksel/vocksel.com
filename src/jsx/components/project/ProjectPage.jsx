import React, { Component, PropTypes } from 'react';

import grids from 'css/objects/_grids.scss';
import ProjectGallery from './ProjectGallery';

export default class ProjectPage extends Component {
  render() {
    return (
      <div className={grids.grid}>
        <div className={grids.full}>
          <h1>{this.props.name}</h1>

          <ProjectGallery images={this.props.images} />

          <ul>
            <li><i className="fa fa-clock-o" /> {this.props.released}</li>
            <li><i className="fa fa-tags" /> {this.props.tags.join(', ')}</li>
          </ul>

          <div>
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
