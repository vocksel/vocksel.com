import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Portfolio</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
}
