import React from 'react';

export function PhotoWrapper(props) {
  return <figure className="photo">{props.children}</figure>
}

export function Photo(props) {
  return (
    <img className="photo__image  js-color-scroll  transition--slow  coloring--grayscale"
      src={props.image} />
  )
}

export function PhotoLink(props) {
  return (
    <a className="photo__link" href={props.href} title={props.title}>
      <Photo image={props.image} />
    </a>
  )
}

export function PhotoCaption(props) {
  return <figcaption className="photo__caption">{props.children}</figcaption>
}
