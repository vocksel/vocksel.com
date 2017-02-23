import React, { Component } from 'react';

import Footer from 'jsx/components/Footer';
import Header from 'jsx/components/Header';
import Wrapper from 'jsx/components/Wrapper';

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />

        {this.props.children}

        <Footer />
      </Wrapper>
    );
  }
}
