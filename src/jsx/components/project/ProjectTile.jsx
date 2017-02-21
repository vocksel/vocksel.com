import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import grids from 'css/objects/_grids.scss';
import styles from 'css/components/_project.scss';
import ProjectPreview from './ProjectPreview';

export default class ProjectTile extends Component {
  render() {
    return (
      <div className={classNames(styles.ProjectTile, grids['Grid-halfColumn'])}>
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
