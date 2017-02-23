import React, { Component } from 'react';
import classNames from 'classnames';

import grids from 'css/objects/_grids.scss';
import styles from './Section.scss';

export default class Section extends Component {
  render() {
    return (
      <section className={classNames(styles.base, grids.grid)}>
        {this.props.children}
      </section>
    );
  }
}
