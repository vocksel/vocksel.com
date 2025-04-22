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
		<div className="space-y-6">
			<h1 className="text-3xl">Projects</h1>

			<ul>{tiles}</ul>
		</div>
	);
}
