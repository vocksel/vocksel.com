import { type Experience } from "@/app/types";
import generic from "@/styles/generic.module.scss";
import style from "./Experience.module.scss";

type Props = {
	exp: Experience;
};

export default function Experience({ exp }: Props) {
	const startDate = exp.startDate.getFullYear();
	const endDate = exp.endDate ? exp.endDate.getFullYear() : "Present";

	return (
		<div className={`${style.container} columns`}>
			<p className={`column ${style.date}`}>
				{startDate}&ndash;{endDate}
			</p>

			<div className={"column is-three-quarters"}>
				<p className={style.title}>{exp.title}</p>

				<p
					className={`${style.description} ${generic.finePrint} ${generic.tight}`}
				>
					{exp.description}
				</p>
			</div>
		</div>
	);
}
