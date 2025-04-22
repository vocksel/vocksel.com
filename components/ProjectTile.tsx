import { Project } from "@/app/types";
import CaptionedImage from "@/components/CaptionedImage";
import Link from "next/link";
import style from "./ProjectTile.module.scss";

type Props = {
	className: string;
	slide?: "x" | "y";
	project: Project;
};

export default function ProjectTile({ project, slide = "y" }: Props) {
	let hoverClass;
	if (slide == "x") {
		hoverClass = style.hoverRight;
	} else {
		hoverClass = style.hoverUp;
	}

	return (
		<div className={`${style.container}`}>
			<Link href={`/projects/${project.slug}/`} className={style.link}>
				<CaptionedImage
					className={`${style.image} ${hoverClass}`}
					src={project.thumbnail}
					caption={project.title}
				/>
			</Link>
		</div>
	);
}
