import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ProjectTile extends Component {
  render() {
    return (
      <div className="project-tile grid__col grid__col--1-of-2">
        <Link to={`/projects/${this.props.slug}`}>
          <h1 className="project__title">{this.props.name}</h1>
          <img className="project__image" src={this.props.images[0]} />
        </Link>

        <div className="project__meta">
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
