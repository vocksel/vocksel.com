import React from 'react';
import ReactDOM from 'react-dom';

import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';
import About from './content/About.jsx';
import Experience from './content/Experience.jsx';
import EchoRidge from './content/EchoRidge.jsx';
import Fireflies from './content/Fireflies.jsx';

function Website(props) {
  return (
    <div>
      <SiteHeader>David Minnerly</SiteHeader>
      <About/>
      <Experience/>
      <EchoRidge/>
      <Fireflies/>
      <SiteFooter/>
    </div>
  )
}

export default Website;
