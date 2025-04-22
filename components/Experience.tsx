import formatDate from "@/app/formatDate";
import { type Experience } from "@/app/types";
import Link from "@/components/generic/Link";
import { useMemo } from "react";

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
		<div className="flex flex-col space-y-2">
			<h3 className="text-2xl">{exp.title}</h3>

			<p className="text-stone-500">{subtitle}</p>

			<p>{exp.description}</p>

			{exp.projects && (
				<ul className="flex flex-row gap-4">
					{exp.projects.map((project) => (
						<li key={project.name}>
							<Link href={project.url}>{project.name}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
