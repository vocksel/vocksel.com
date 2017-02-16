import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ProjectPreview from './ProjectPreview';

export default class ProjectTile extends Component {
  render() {
    return (
      <div className="ProjectTile grid__col grid__col--1-of-2">
        <Link to={`/projects/${this.props.slug}`}>
          <ProjectPreview name={this.props.name} image={this.props.images[0]}
            released={this.props.released} />
        </Link>
      </div>
    );
  }
}

ProjectTile.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.array
};
