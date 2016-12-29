import React from 'react';

import PhotoImage from './PhotoImage.jsx'

function PhotoLink(props) {
  return (
    <a className="photo__link" href={props.href} title={props.title}>
      <PhotoImage image={props.image} />
    </a>
  )
}

export default PhotoLink;
