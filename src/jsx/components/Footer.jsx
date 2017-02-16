import React, { Component } from 'react';

import Copyright from './Copyright';

export default class Footer extends Component {
  render() {
    return (
      <footer id="bottom" className="centered-text fine-print">
        <ul className="list-inline--delimited">
          <li><Copyright /></li>
          <li><a href="https://github.com/vocksel/my-website">Website Source</a></li>
        </ul>
      </footer>
    );
  }
}
