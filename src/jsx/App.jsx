import React from 'react';
import { Link } from 'react-router';

import SiteFooter from './SiteFooter';

export default function App(props) {
  return (
    <div className='wrapper'>
      <nav>
        <ul>
          <li><Link to='/'>Portfolio</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>

      {props.children}

      <SiteFooter />
    </div>
  );
}
