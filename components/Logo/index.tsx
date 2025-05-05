import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";
import style from "./style.module.scss";

export default function Logo() {
	return (
		<div className={style.base}>
			<Link className={style.link} href="/">
				<Image className={style.image} src={logo} alt="💖" />
			</Link>
		</div>
	);
}
