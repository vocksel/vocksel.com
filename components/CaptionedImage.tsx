import Image, { StaticImageData } from "next/image";
import style from "./CaptionedImage.module.scss";

type Props = {
	caption: string;
	src: StaticImageData;
	alt?: string;
	className?: string;
};

export default function CaptionedImage({
	className,
	caption,
	src,
	alt,
}: Props) {
	return (
		<div className={`${style.container} ${className}`}>
			<Image
				className={style.image}
				src={src}
				alt={alt ? alt : caption}
			/>

			<div className={`${style.captionContainer} ${style.gradient}`}>
				<p className={style.caption}>{caption}</p>
			</div>
		</div>
	);
}
