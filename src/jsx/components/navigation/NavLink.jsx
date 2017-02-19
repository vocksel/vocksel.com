import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavLink extends Component {
  render() {
    return (
      <Link className="FlatNav-link" activeClassName="is-active" {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}
