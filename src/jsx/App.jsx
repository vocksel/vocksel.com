import React, { Component } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="MainWrapper">
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}
