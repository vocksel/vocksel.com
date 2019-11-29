/**
 * Used for grouping a set of links for navigation.
 *
 * It effectively just makes it easier to define a list of links that you want
 * to use for navigation.
 *
 * You can use multiple sets of NavGroups in a single <nav> element and then
 * style them so they have a clear separation.
 *
 * Usage:

  <nav className="Navigation">
    <NavGroup className="Navigation-linkGroup">
      <a href="http://twitter.com/you">My Twitter</a>
      <a href="http://github.com/you">My GitHub</a>
    </NavGroup>
  </nav>

 */

import React, { Component } from 'react';

export default class NavGroup extends Component {
  render() {
    return (
      <ul className={this.props.className}>
        {React.Children.map(this.props.children, (child, index) =>
          <li key={index}>{child}</li> )}
      </ul>
    );
  }
}
