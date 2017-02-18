import React, { Component } from 'react';

import Copyright from './Copyright';

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <ul className="list-inline--delimited">
          <li><Copyright /></li>
          <li><a href="https://github.com/vocksel/my-website">Website Source</a></li>
        </ul>
      </footer>
    );
  }
}
