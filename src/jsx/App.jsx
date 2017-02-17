import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

export default function App(props) {
  return (
    <div>
      <Header />

      <div className="wrapper">
        <div className="grid">
          {props.children}
        </div>

        <Footer />
      </div>
    </div>
  );
}
