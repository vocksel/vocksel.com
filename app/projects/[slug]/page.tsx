"use client";

import formatDate from "@/app/formatDate";
import Button from "@/components/Button";
import Link from "@/components/generic/Link";
import TweetIntent from "@/components/TweetIntent";
import projects from "@/projects";
import Image from "next/image";
import { use } from "react";

const getProjectLink = (index: number, text: string) => {
	const project = projects[index];
	if (project) {
		return <Link href={`/projects/${project.slug}`}>{text}</Link>;
	} else {
		return <span>{text}</span>;
	}
};

type Props = {
	params: Promise<{ slug: string }>;
};

export default function Page({ params }: Props) {
	const { slug } = use(params);
	const project = projects.find((project) => slug == project.slug);

	if (!project) {
		return;
	}

	const index = projects.indexOf(project);

	let playButton;
	if (project.type === "Game" && project.url) {
		playButton = (
			<Button>
				<a href={project.url}>
					Play on Roblox <i className="fas fa-play"></i>
				</a>
			</Button>
		);
	}

	return (
		<div className="space-y-6">
			<header className="space-y-3">
				<h1 className="text-4xl">{project.title}</h1>

				<p className="text-zinc-500 italic">{project.subtitle}</p>

				<Image src={project.thumbnail} alt="" />
			</header>

			<p className="text-zinc-500 italic">
				Released {formatDate(project.releaseDate)} &mdash; Authored{" "}
				{formatDate(project.authorDate)}
			</p>

			<section className="space-y-6">{project.description}</section>

			<footer className="space-y-3">
				<div className="columns-2">
					{playButton}

					<Button>
						<TweetIntent
							text={`${project.title}: ${project.subtitle}`}
						>
							Share on Twitter
						</TweetIntent>
					</Button>
				</div>

				<ul className="flex flex-row justify-center space-x-4">
					<li>{getProjectLink(index - 1, "< Prev")}</li>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>{getProjectLink(index + 1, "Next >")}</li>
				</ul>
			</footer>
		</div>
	);
}
