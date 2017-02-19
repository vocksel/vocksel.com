/**
 * This is the navigation we use at the top of the page.
 *
 * It's the user's primary source of navigating between pages.
 */

import React, { Component } from 'react';

import NavLink from './NavLink';
import NavGroup from './NavGroup';

export default class PrimaryNav extends Component {
  render() {
    return (
      <nav className="FlatNav FlatNav--main">
        <NavGroup className="FlatNav-group">
          <NavLink onlyActiveOnIndex={true} to="/">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavGroup>

        <NavGroup className="FlatNav-group">
          <a href="https://twitter.com/voxeldavid">Twitter</a>
          <a href="https://github.com/vocksel">GitHub</a>
        </NavGroup>
      </nav>
    );
  }
}
