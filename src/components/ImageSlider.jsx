import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import style from './ImageSlider.scss';

export default function ImageSlider({ images }) {
	const settings = {
		dots: true,
		dotClass: style.dots,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<Slider className={style.slider} {...settings}>
			{images.map(image => (
				<figure className={style.figure}>
					<img src={image.src} alt={image.alt} />
					<figcaption>{image.caption}</figcaption>
				</figure>
			))}
		</Slider>
	);
}
