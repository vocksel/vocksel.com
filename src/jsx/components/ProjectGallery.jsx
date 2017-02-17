import React, { Component } from 'react';

import Slider from 'react-slick';

export default class ProjectGallery extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider className="ProjectGallery" {...settings}>
        {this.props.images.map(image =>
          <img key={image} src={image} />)}
      </Slider>
    );
  }
}
