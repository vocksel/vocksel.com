import { education, jobs } from "@/app/experience";
import { Project, ProjectType } from "@/app/types";
import Experience from "@/components/Experience";
import Headline from "@/components/Headline";
import ProjectTile from "@/components/ProjectTile";
import projects from "@/projects";
import { useMemo } from "react";

export default function Home() {
	const projectsByType = useMemo(() => {
		return projects.reduce(
			(acc, item) => {
				if (!acc[item.type]) {
					acc[item.type] = [];
				}
				acc[item.type].push(item);
				return acc;
			},
			{} as Record<ProjectType, Project[]>,
		);
	}, []);

	return (
		<main className="flex flex-col space-y-10">
			<Headline />

			<section className="space-y-6">
				<h1 className="text-4xl">Experience</h1>

				{jobs.map((job) => (
					<Experience key={job.title?.toString()} exp={job} />
				))}
			</section>

			<section className="space-y-6">
				<h1 className="text-4xl">Education</h1>

				{education.map((experience) => (
					<Experience
						key={experience.institution}
						exp={{
							title: experience.award,
							startDate: experience.startDate,
							endDate: experience.endDate,
							description: (
								<ul className="space-y-2">
									<li>{experience.institution}</li>
									<li>{experience.location}</li>
									<li>{experience.details}</li>
								</ul>
							),
						}}
					/>
				))}
			</section>

			<section>
				<h1 className="text-4xl">Projects</h1>

				<div className="columns-3">
					{projectsByType.Game.map((project) => (
						<ProjectTile key={project.slug} project={project} />
					))}

					{projectsByType.Code.map((project) => (
						// Need a new component to return. Should be just be a list of my code projects
						<ProjectTile key={project.slug} project={project} />
					))}
				</div>
			</section>
		</main>
	);
}
