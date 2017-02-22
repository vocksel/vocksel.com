import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from 'css/components/_navigation.scss';

export default class NavLink extends Component {
  render() {
    return (
      <Link {...this.props} activeClassName={styles.isActive} className={styles.link}>
        {this.props.children}
      </Link>
    );
  }
}
