import ProjectTile from "@/components/ProjectTile";
import projects from "@/projects";
import style from "./page.module.scss";

export default function Page() {
	const tiles = projects.map((project) => (
		<li key={project.slug}>
			<ProjectTile slide="x" className={style.tile} project={project} />
		</li>
	));

	return (
		<div className={"section"}>
			<div className={"container"}>
				<h1>Projects</h1>

				<ul>{tiles}</ul>
			</div>
		</div>
	);
}
