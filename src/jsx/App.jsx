import React from 'react';

import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function App(props) {
  return (
    <div className='wrapper'>
      <Navigation />

      <div className="grid">
        {props.children}
      </div>

      <Footer />
    </div>
  );
}
