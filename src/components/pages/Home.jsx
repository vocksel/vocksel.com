import React from 'react';

import About from './sections/About.jsx';
import EchoRidge from 'components/portfolio/echo-ridge/Page.jsx';
import Fireflies from 'components/portfolio/fireflies/Page.jsx';

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
