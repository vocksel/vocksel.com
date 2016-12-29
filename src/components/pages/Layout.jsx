import React from 'react';
import ReactDOM from 'react-dom';

import SiteHeader from 'components/includes/SiteHeader.jsx';
import SiteFooter from 'components/includes/SiteFooter.jsx';
import Home from './Home.jsx';

function Layout(props) {
  return (
    <div>
      <SiteHeader>David Minnerly</SiteHeader>
      <Home/>
      <SiteFooter/>
    </div>
  )
}

export default Layout;
