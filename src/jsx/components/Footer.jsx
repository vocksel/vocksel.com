import React from 'react';

import Copyright from './Copyright';

export default function Footer(props) {
  return (
    <footer id="bottom" className="centered-text fine-print">
      <ul className="list-inline--delimited">
        <li><Copyright /></li>
        <li><a href="https://github.com/vocksel/my-website">Website Source</a></li>
      </ul>
    </footer>
  )
}
