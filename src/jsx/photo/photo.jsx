import React, { PropTypes } from 'react';

/**
  * Used for displaying images on the page.
  *
  * Use in conjunction with <PhotoCaption> to add a caption beneath your image.
  *
  * Properties:
  *
  * image (string, required)
  *  Path to the image you want to display.
  *
  *  When using Webpack, you'll need to wrap the path in a 'require()' call.
  *
  * href (string)
  *  When this property is used, the image is wrapped in an <a> tag.
  *
  *  Sets the 'href' attribute of the link.
  *
  * title (string)
  *  Used in conjunction with 'href'. Sets the 'title' attribute of the link.
  *
  * Usage:

      <Photo image={require('./example.png')} />

      // As a link:
      <Photo image={require('./example.png')} href='http://example.com'
        title='Click me' />

      // With a caption:
      <Photo image={require('./example.png')}>
        <PhotoCaption>Hello, World!</PhotoCaption>
      </Photo>

      // All together:
      <Photo image={require('./example.png')} href='http://example.com'
        title='Click me' caption='Hello, World!'>

        <PhotoCaption>Hello, World!</PhotoCaption>
      </Photo>

  */

function getImageAsLink(image, href, title) {
  return <a className='photo__link' href={href} title={title}>{image}</a>;
}

export function PhotoCaption(props) {
  return (
    <figcaption className='photo__caption'>{props.children}</figcaption>
  );
}

export function Photo(props) {
  const image = <img className='photo__image' src={props.image} />;

  return (
    <figure className='photo'>
      {props.href ? getImageAsLink(image, props.href, props.title) : image}
      {props.children}
    </figure>
  );
}

Photo.propTypes = {
  image: PropTypes.string.isRequired,
  href: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.node
};
