import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ProjectTile extends Component {
  render() {
    return (
      <div className="ProjectTile">
        <Link to={`/projects/${this.props.slug}`}>
          <h1 className="Project-title">{this.props.name}</h1>
          <img className="ProjectTile--mainImage" src={this.props.images[0]} />
        </Link>

        <div className="ProjectMeta">
          <p>{this.props.released} &ndash; {this.props.tags.join(', ')}</p>
        </div>
      </div>
    );
  }
}

ProjectTile.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.array
};
