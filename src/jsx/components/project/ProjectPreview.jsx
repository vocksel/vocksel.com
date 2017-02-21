import React, { Component } from 'react';

import styles from 'css/components/_project.scss';

export default class ProjectPreview extends Component {
  render() {
    return (
      <div className={styles.ProjectPreview}>
        <div className={styles['ProjectPreview-image']}
          style={{ backgroundImage: `url(${this.props.image})` }} />
      </div>
    );
  }
}
