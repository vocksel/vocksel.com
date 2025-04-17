import projects from "@/projects"

export default function Page() {
	return <div>
		<h1>My projects</h1>

		{projects.map((project) => {
			return <p>{project.title} &ndash; {project.releaseDate.getFullYear()}</p>
		})}
	</div>
}
