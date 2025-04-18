import formatDate from "@/app/formatDate";
import { Job } from "@/app/types";
import generic from "@/styles/generic.module.scss";
import style from "./Experience.module.scss";

type Props = {
	exp: Job;
};

export default function Experience({ exp }: Props) {
	const startDate = formatDate(exp.startDate);
	const endDate = exp.endDate ? formatDate(exp.endDate) : "Present";
	const connector = exp.wasInHouse ? "at" : "for";

	return (
		<div className={`${style.container} columns`}>
			<p className={`column ${style.date}`}>
				{startDate}&ndash;{endDate}
			</p>

			<div className={"column is-two-thirds"}>
				<p className={style.job}>
					{exp.job} {connector}{" "}
					<a href={exp.company.url}>{exp.company.name}</a>.
				</p>

				<p className={`${style.description} ${generic.tight}`}>
					{exp.description}
				</p>
			</div>
		</div>
	);
}
