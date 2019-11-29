import React, { Component } from 'react';

import styles from './ProjectPreview.scss';

export default class ProjectPreview extends Component {
  render() {
    return (
      <div className={styles.image}
        style={{ backgroundImage: `url(${this.props.image})` }} />
    );
  }
}
