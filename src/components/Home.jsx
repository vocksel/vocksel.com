import React from 'react';

import About from './About.jsx';
import EchoRidge from './portfolio/echo-ridge/Page.jsx';
import Fireflies from './portfolio/fireflies/Page.jsx';
import SiteFooter from './SiteFooter.jsx';

function Home() {
  return (
    <div className='wrapper'>
      <About/>
      <EchoRidge/>
      <Fireflies/>
      <SiteFooter />
    </div>
  )
}

export default Home
