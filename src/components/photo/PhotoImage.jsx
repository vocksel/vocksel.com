import React from 'react';

function PhotoImage(props) {
  return (
    <img className="photo__image  js-color-scroll  transition--slow  coloring--grayscale"
      src={props.image} />
  )
}

export default PhotoImage;
