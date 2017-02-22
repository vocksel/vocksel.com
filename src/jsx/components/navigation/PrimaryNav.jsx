/**
 * This is the navigation we use at the top of the page.
 *
 * It's the user's primary source of navigating between pages.
 */

import React, { Component } from 'react';

import styles from 'css/components/_navigation.scss';
import NavLink from './NavLink';
import NavGroup from './NavGroup';

export default class PrimaryNav extends Component {
  render() {
    return (
      <nav className={styles.primaryNav}>
        <NavGroup className={styles.group}>
          <NavLink onlyActiveOnIndex={true} to="/">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavGroup>
      </nav>
    );
  }
}
