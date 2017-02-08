import React from 'react';

// Component for displaying photographs.
function PhotoImage(props) {
  return (
    <img className="photo__image" src={props.image} />
  )
}

// Wraps <PhotoImage> in an <a> tag.
function PhotoLink(props) {
  return (
    <a className="photo__link" href={props.href} title={props.title}>
      {props.children}
    </a>
  )
}

// Container Component for all other Components in this file.
function PhotoWrapper(props) {
  return <figure className="photo">{props.children}</figure>
}

// Used for displaying images on the page.
//
// This is the main Component you'll be interested in. The other being
// PhotoCaption, which allows you to caption your images.
//
// Usage:
//
//   <Photo href={'http://example.com'} title={'Click me'}
//     image={require('example.png')}>
//
// With a caption:
//
//   <Photo href={'http://example.com'} title={'Click me'}
//     image={require('example.png')}>
//
//     <PhotoCaption>Caption for the image.</PhotoCaption>
//   </Photo>
export function Photo(props) {
  const photo = <PhotoImage image={props.image} />;

  return (
    <PhotoWrapper>
      {props.href
        ? <PhotoLink href={props.href} title={props.title}>{photo}</PhotoLink>
        : photo }

      {props.children}
    </PhotoWrapper>
  )
}

// Used as a child of <Photo> to apply a caption.
export function PhotoCaption(props) {
  return <figcaption className="photo__caption">{props.children}</figcaption>
}
