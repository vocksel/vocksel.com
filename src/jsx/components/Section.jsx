import React, { Component } from 'react';
import classNames from 'classnames';

import grids from 'css/objects/_grids.scss';
import styles from 'css/components/_section.scss';

export default class Section extends Component {
  render() {
    return (
      <section className={classNames(styles.base, grids.grid)}>
        <header className={grids.full}>
          <h1 className={styles.title}>{this.props.name}</h1>
        </header>

        {this.props.children}
      </section>
    );
  }
}
