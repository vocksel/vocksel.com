import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ProjectPreview from './ProjectPreview';

export default class ProjectTile extends Component {
  render() {
    return (
      <div className="ProjectTile">
        <Link to={`/projects/${this.props.slug}`}>
          <ProjectPreview name={this.props.name} image={this.props.image}
            released={this.props.released} />
        </Link>
      </div>
    );
  }
}

ProjectTile.propTypes = {
  name: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
