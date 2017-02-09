import React from 'react';

import About from './About.jsx';
import EchoRidge from './portfolio/echo-ridge/Page.jsx';
import Fireflies from './portfolio/fireflies/Page.jsx';

function Home() {
  return (
    <div>
      <About/>
      <EchoRidge/>
      <Fireflies/>
    </div>
  )
}

export default Home
