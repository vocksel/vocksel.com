/**
 * This is the navigation we use at the top of the page.
 *
 * It's the user's primary source of navigating between pages.
 */

import React, { Component } from 'react';
import classNames from 'classnames';

import styles from 'css/components/_navigation.scss';
import NavLink from './NavLink';
import NavGroup from './NavGroup';

export default class PrimaryNav extends Component {
  render() {
    return (
      <nav className={classNames(styles.FlatNav, styles['FlatNav--main'])}>
        <NavGroup className={styles['FlatNav-groupd']}>
          <NavLink onlyActiveOnIndex={true} to="/">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavGroup>
      </nav>
    );
  }
}
