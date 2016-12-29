import React from 'react';

import About from './sections/About.jsx';
import EchoRidge from './sections/EchoRidge.jsx';
import Experience from './sections/Experience.jsx';
import Fireflies from './sections/Fireflies.jsx';

function Home() {
  return (
    <div>
      <About/>
      <Experience/>
      <EchoRidge/>
      <Fireflies/>
    </div>
  )
}

export default Home
