import ProjectTile from "@/components/ProjectTile";
import projects from "@/projects";

export default function Page() {
	const tiles = projects.map((project) => (
		<li key={project.slug}>
			<ProjectTile slide="x" project={project} />
		</li>
	));

	return (
		<div className="space-y-8">
			<h1 className="text-4xl">Projects</h1>

			<ul className="space-y-4">{tiles}</ul>
		</div>
	);
}
