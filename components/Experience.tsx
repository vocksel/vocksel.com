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

	const description: React.ReactNode =
		typeof exp.description === "string" ? (
			<p>{exp.description}</p>
		) : (
			exp.description
		);

	return (
		<div className="flex flex-col space-y-2">
			<h3 className="text-2xl text-zinc-300">{exp.title}</h3>

			<p className="text-zinc-500">{subtitle}</p>

			<div className="text-zinc-300">{description}</div>

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
