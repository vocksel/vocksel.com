import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import style from './ImageSlider.scss'

type Props = {
	images: {
		src: StaticImageData,
		alt?: string,
		caption: string,
	}[],
}

const settings = {
	dots: true,
	dotClass: style.dots,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}


export default function ImageSlider({ images }: Props) {
	return (
		<Slider className={style.slider} {...settings}>
			{images.map((image, index) => (
				<figure key={index} className={style.figure}>
					<Image src={image.src} alt={image.alt ? image.alt : image.caption} />
					<figcaption>{image.caption}</figcaption>
				</figure>
			))}
		</Slider>
	)
}
