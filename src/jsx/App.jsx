import React, { Component } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper grid">
        <Header />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}
