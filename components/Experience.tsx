import formatDate from "@/app/formatDate";
import { type Experience } from "@/app/types";
import generic from "@/styles/generic.module.scss";
import { useMemo } from "react";
import style from "./Experience.module.scss";

type Props = {
	exp: Experience;
};

export default function Experience({ exp }: Props) {
	const subtitle = useMemo(() => {
		if (exp.customSubtitle) {
			return <p>{exp.customSubtitle}</p>;
		} else {
			const startDate = formatDate(exp.startDate);
			const endDate = exp.endDate ? formatDate(exp.endDate) : "Present";

			return (
				<p>
					{startDate}&ndash;{endDate}
				</p>
			);
		}
	}, [exp]);

	const description = useMemo(() => {
		return (
			<div>
				{!exp.milestones && <p>{exp.description}</p>}

				{exp.milestones &&
					exp.milestones.map((milestone) => (
						<div key={milestone.startDate.getFullYear()}>
							<p>{milestone.description}</p>
						</div>
					))}

				{exp.projects && (
					<ul>
						{exp.projects.map((project) => (
							<li key={project.name}>
								<a href={project.url}>{project.name}</a>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}, [exp]);

	return (
		<div className={`${style.container}`}>
			<h3 className={style.title}>{exp.title}</h3>

			<div
				className={`${style.subtitle} ${generic.finePrint} ${generic.tight}`}
			>
				{subtitle}
			</div>

			<div
				className={`${style.description} ${generic.finePrint} ${generic.tight}`}
			>
				{description}
			</div>
		</div>
	);
}
