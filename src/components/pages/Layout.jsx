import React from 'react';
import ReactDOM from 'react-dom';

import SiteFooter from 'components/includes/SiteFooter.jsx';
import Home from './Home.jsx';

function Layout(props) {
  return (
    <div>
      <Home/>
      <SiteFooter/>
    </div>
  )
}

export default Layout;
