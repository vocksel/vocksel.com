import React, { Component } from 'react';

import Footer from 'jsx/components/Footer';
import Header from 'jsx/components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}
