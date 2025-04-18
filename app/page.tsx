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

export default function Home() {
	const age = useMemo(getAge, []);

	const workHistory = useMemo(() => {
		return jobs.map((job) => {
			const connector = job.wasInHouse ? "at" : "for";

			return (
				<Experience
					key={`${job.startDate.getFullYear()}-${job.job}`}
					exp={{
						title: (
							<span>
								{job.job} {connector}{" "}
								<a href={job.company.url}>{job.company.name}</a>
							</span>
						),
						description: (
							<div>
								<p>{job.description}</p>
								{job.projects && (
									<ul>
										{job.projects.map((project) => (
											<li key={project.name}>
												<a href={project.url}>
													{project.name}
												</a>
											</li>
										))}
									</ul>
								)}
							</div>
						),
						startDate: job.startDate,
						endDate: job.endDate,
					}}
				/>
			);
		});
	}, []);

	const educationHistory = useMemo(() => {
		return education.map((experience) => (
			<Experience
				key={`${experience.dates[0]}-${experience.institution}`}
				exp={{
					title: experience.award,
					description: (
						<span>
							<p>{experience.institution}</p>
							<p>{experience.location}</p>
							<p>{experience.details}</p>
						</span>
					),
					startDate: new Date(experience.dates[0], 1),
					endDate: new Date(experience.dates[1], 1),
				}}
			/>
		));
	}, []);

	const freelanceProjects = useMemo(() => {
		const freelance = projects.filter((project) => project.type === "Game");

		return freelance.map((project) => (
			<ProjectTile
				className={"column is-one-third"}
				key={project.slug}
				project={project}
			/>
		));
	}, []);

	const codeProjects = useMemo(() => {
		const code = projects.filter((project) => project.type === "Code");

		// Need a new component to return. Should be just be a list of my code projects
		return code.map((project) => (
			<ProjectTile
				className={"column is-one-third"}
				key={project.slug}
				project={project}
			/>
		));
	}, []);

	return (
		<main>
			<section className={"section"}>
				<div className={"container"}>
					<div className={"columns"}>
						<div className={"column"}>
							<p className={generic.bigText}>
								I&apos;m <Keyword>Marin Minnerly</Keyword>
								&mdash;a {age} year old Software Engineer and
								hobbyist game developer that loves creating new
								experiences through artistic mediums 💖
							</p>

							<HorizontalList>
								<a
									href={urls.twitter}
									title="Follow on Twitter for updates"
								>
									Twitter
								</a>
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
					{workHistory}
				</div>
			</section>

			<section className={"section"}>
				<div className={"container"}>
					<h1>Education</h1>
					{educationHistory}
				</div>
			</section>

			<section className={"section"}>
				<div className={"container"}>
					<h1>Projects</h1>

					<div className={"columns is-multiline"}>
						{freelanceProjects}

						{codeProjects}
					</div>
				</div>
			</section>
		</main>
	);
}
