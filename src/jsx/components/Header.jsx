import React, { Component } from 'react';

import PrimaryNav from './navigation/PrimaryNav';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <PrimaryNav />
      </header>
    );
  }
}
