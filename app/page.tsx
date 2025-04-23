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
		<main className="flex flex-col space-y-16">
			<Headline />

			<section className="space-y-8">
				<h1 className="text-4xl text-zinc-100">Experience</h1>

				<div className="space-y-12">
					{jobs.map((job) => (
						<Experience key={job.id} exp={job} />
					))}
				</div>
			</section>

			<section className="space-y-8">
				<h1 className="text-4xl">Education</h1>

				<div className="space-y-12">
					{education.map((experience) => (
						<Experience
							key={experience.institution}
							exp={{
								id: experience.institution,
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
				</div>
			</section>

			<section className="space-y-8">
				<h1 className="text-4xl">Projects</h1>

				<div className="grid md:grid-cols-3 gap-4">
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
