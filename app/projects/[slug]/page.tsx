"use client";

import formatDate from "@/app/formatDate";
import Button from "@/components/Button";
import HorizontalList from "@/components/HorizontalList";
import TweetIntent from "@/components/TweetIntent";
import projects from "@/projects";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import style from "./page.module.scss";

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
		<div className={"section"}>
			<div className={"container"}>
				<h1 className={style.title}>{project.title}</h1>
				<p className={style.subtitle}>{project.subtitle}</p>

				<Image src={project.thumbnail} alt="" />

				<p className={style.subtitle}>
					Released {formatDate(project.releaseDate)} &mdash; Authored{" "}
					{formatDate(project.authorDate)}
				</p>

				<section>{project.description}</section>

				<div className={"columns"}>
					{playButton && <div className={"column"}>{playButton}</div>}

					<div className={"column"}>
						<Button>
							<TweetIntent
								text={`${project.title}: ${project.subtitle}`}
							>
								Share on Twitter
							</TweetIntent>
						</Button>
					</div>
				</div>

				<HorizontalList isCentered>
					{getProjectLink(index - 1, "< Prev")}
					<Link href="/">Home</Link>
					{getProjectLink(index + 1, "Next >")}
				</HorizontalList>
			</div>
		</div>
	);
}
