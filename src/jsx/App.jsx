import React, { Component } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="wrapper">
          <div className="grid">
            {this.props.children}
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}
