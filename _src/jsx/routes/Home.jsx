import React, { Component } from 'react';

import Portfolio from 'jsx/components/Portfolio';
import Intro from 'jsx/components/Intro';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Portfolio />
      </div>
    );
  }
}
