import React from 'react';

function SiteHeader(props) {
  return (
    <header id="top" className="wrapper--content">
      <h1 className="site-title">{props.children}</h1>
    </header>
  )
}

export default SiteHeader;
