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

import React, { Component, PropTypes } from 'react';

class PhotoLink extends Component {
  render() {
    return (
      <a className='photo__link' href={this.props.href} title={this.props.title}>
        {image}
      </a>
    );
  }
}

export class PhotoCaption extends Component {
  render() {
    return (
      <figcaption className='photo__caption'>{this.props.children}</figcaption>
    );
  }
}

export class Photo extends Component {
  render() {
    const image = <img className='photo__image' src={props.image} />;

    return (
      <figure className='photo'>
        {props.href ? getImageAsLink(image, props.href, props.title) : image}
        {props.children}
      </figure>
    );
  }
}

Photo.propTypes = {
  image: PropTypes.string.isRequired,
  href: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.node
};
