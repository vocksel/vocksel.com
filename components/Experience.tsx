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
			return <span>{exp.customSubtitle}</span>;
		} else {
			const startDate = formatDate(exp.startDate);
			const endDate = exp.endDate ? formatDate(exp.endDate) : "Present";

			return (
				<span>
					{startDate} &ndash; {endDate}
				</span>
			);
		}
	}, [exp]);

	return (
		<div className={`${style.container}`}>
			<h3 className={style.title}>{exp.title}</h3>

			<p
				className={`${style.subtitle} ${generic.finePrint} ${generic.tight}`}
			>
				{subtitle}
			</p>

			<p
				className={`${style.description} ${generic.finePrint} ${generic.tight}`}
			>
				{exp.description}
			</p>

			{exp.projects && (
				<ul
					className={`${style.projects} ${generic.finePrint} ${generic.tight}`}
				>
					{exp.projects.map((project) => (
						<li key={project.name}>
							<a href={project.url}>{project.name}</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
