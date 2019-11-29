import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './ProjectTile.scss';
import { Content } from '../layout';
import ProjectPreview from './ProjectPreview';

export default class ProjectTile extends Component {
  render() {
    return (
      <Content half className={styles.base}>
        <Link to={`/projects/${this.props.slug}`}>
          <ProjectPreview name={this.props.name} image={this.props.image}
            released={this.props.released} />
        </Link>
      </Content>
    );
  }
}

ProjectTile.propTypes = {
  name: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
