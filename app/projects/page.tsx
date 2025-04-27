import ProjectTile from "@/components/ProjectTile";
import projects from "@/projects";

export default function Page() {
	const tiles = projects.map((project) => (
		<li key={project.slug}>
			<ProjectTile project={project} />
		</li>
	));

	return (
		<div className="space-y-8">
			<h1>Projects</h1>

			<ul className="grid md:grid-cols-2 gap-4">{tiles}</ul>
		</div>
	);
}
