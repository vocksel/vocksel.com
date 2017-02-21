import React, { Component } from 'react';
import { Link } from 'react-router';

import PrimaryNav from './navigation/PrimaryNav';

export default class Header extends Component {
  render() {
    return (
      <header className="Header Grid">
        <div className="Grid-halfColumn">
          <Link to="/" className="FlatNav-link">David Minnerly</Link>
        </div>

        <div className="Grid-halfColumn">
          <PrimaryNav />
        </div>
      </header>
    );
  }
}
