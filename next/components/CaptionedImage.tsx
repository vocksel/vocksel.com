import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import style from './CaptionedImage.scss'

type Props = {
	caption: string,
	src: string,
	alt?: string,
	className?: string,
}

export default function CaptionedImage({ className, caption, src, alt }: Props) {
	return (
		<div className={classNames(style.container, className)}>
			<Image className={style.image} src={src} alt={alt ? alt : caption} />

			<div className={classNames(style.captionContainer, style.gradient)}>
				<p className={style.caption}>{caption}</p>
			</div>
		</div>
	)
}

