import React, { Component } from 'react';

import Footer from 'jsx/components/Footer';
import Header from 'jsx/components/Header';
import wrappers from 'css/objects/_wrappers.scss';

export default class App extends Component {
  render() {
    return (
      <div className={wrappers.base}>
        <Header />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}
