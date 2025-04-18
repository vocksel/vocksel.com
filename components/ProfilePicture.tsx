import Image, { StaticImageData } from "next/image";
import style from "./ProfilePicture.module.scss";

type Props = {
	src: StaticImageData;
	alt: string;
};
export default function ProfilePicture({ src, alt }: Props) {
	return <Image className={style.pfp} src={src} alt={alt} />;
}
