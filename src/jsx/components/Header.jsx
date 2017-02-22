import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import grids from 'css/objects/_grids.scss';
import nav from 'css/components/_navigation.scss';
import styles from 'css/components/_header.scss';
import PrimaryNav from './navigation/PrimaryNav';

export default class Header extends Component {
  render() {
    return (
      <header className={classNames(styles.base, grids.grid)}>
        <div className={grids.half}>
          <Link to="/" className={nav.link}>David Minnerly</Link>
        </div>

        <div className={grids.half}>
          <PrimaryNav />
        </div>
      </header>
    );
  }
}
