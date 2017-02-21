import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import grids from 'css/objects/_grids.scss';
import styles from 'css/components/_project.scss';
import ProjectGallery from './ProjectGallery';

export default class ProjectPage extends Component {
  render() {
    return (
      <div className={classNames(styles.Project, grids.Grid)}>
        <div className={grids['Grid-fullColumn']}>
          <h1 className={styles['Project-title']}>{this.props.name}</h1>

          <ProjectGallery images={this.props.images} />

          <ul className={styles.ProjectMeta}>
            <li><i className="fa fa-clock-o" /> {this.props.released}</li>
            <li><i className="fa fa-tags" /> {this.props.tags.join(', ')}</li>
          </ul>

          <div className={styles['Project-bio']}>
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
