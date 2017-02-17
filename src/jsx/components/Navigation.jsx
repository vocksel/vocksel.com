import React, { Component } from 'react';
import { Link } from 'react-router';

class NavLink extends Component {
  render() {
    return (
      <Link className="Navigation-link" activeClassName="active" {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}

export default class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <ul>
          <li><NavLink onlyActiveOnIndex={true} to='/'>Portfolio</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    );
  }
}
