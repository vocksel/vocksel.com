import { education, jobs } from "./experience";

import getAge from "@/app/getAge";
import urls from "@/app/urls";
import Experience from "@/components/Experience";
import HorizontalList from "@/components/HorizontalList";
import Keyword from "@/components/Keyword";
import ProfilePicture from "@/components/ProfilePicture";
import ProjectTile from "@/components/ProjectTile";
import projects from "@/projects";
import generic from "@/styles/generic.module.scss";
import { useMemo } from "react";
import me from "./elevator.jpg";
import { Project, ProjectType } from "./types";

export default function Home() {
	const age = useMemo(getAge, []);

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
		<main>
			<section className={"section"}>
				<div className={"container"}>
					<div className={"columns"}>
						<div className={"column"}>
							<p className={generic.bigText}>
								<Keyword>Marin Minnerly</Keyword> is a {age}{" "}
								year old software engineer and hobbyist game
								developer that loves creating new experiences
								through artistic mediums
							</p>

							<HorizontalList>
								<a
									href={urls.github}
									title="Check out my code on GitHub"
								>
									GitHub
								</a>
								<a
									href={urls.linkedin}
									title="Connect with me on LinkedIn"
								>
									LinkedIn
								</a>
								<a href={urls.email} title="Shoot me an email">
									Email
								</a>
							</HorizontalList>
						</div>

						<div className={"column is-narrow"}>
							<ProfilePicture src={me} alt="" />
						</div>
					</div>
				</div>
			</section>

			<section className={"section"}>
				<div className={"container"}>
					<h1>Experience</h1>

					{jobs.map((job) => (
						<Experience key={job.title?.toString()} exp={job} />
					))}
				</div>
			</section>

			<section className={"section"}>
				<div className={"container"}>
					<h1>Education</h1>

					{education.map((experience) => (
						<Experience
							key={experience.institution}
							exp={{
								title: experience.award,
								startDate: experience.startDate,
								endDate: experience.endDate,
								description: (
									<ul>
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

			<section className={"section"}>
				<div className={"container"}>
					<h1>Projects</h1>

					<div className={"columns is-multiline"}>
						{projectsByType.Game.map((project) => (
							<ProjectTile
								className={"column is-one-third"}
								key={project.slug}
								project={project}
							/>
						))}

						{projectsByType.Code.map((project) => (
							// Need a new component to return. Should be just be a list of my code projects
							<ProjectTile
								className={"column is-one-third"}
								key={project.slug}
								project={project}
							/>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
