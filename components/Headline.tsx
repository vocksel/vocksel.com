import { useMemo } from "react";

import me from "@/app/elevator.jpg";
import getAge from "@/app/getAge";
import urls from "@/app/urls";
import HorizontalList from "@/components/HorizontalList";
import Keyword from "@/components/Keyword";
import ProfilePicture from "@/components/ProfilePicture";
import Link from "@/components/generic/Link";

export default function Headline() {
	const age = useMemo(getAge, []);

	return (
		<div className="flex columns-2 gap-4">
			<div className="flex-1 space-y-4">
				<p className="text-2xl">
					<Keyword>Marin Minnerly</Keyword> is a {age} year old
					software engineer and hobbyist game developer that loves
					creating new experiences through artistic mediums
				</p>

				<HorizontalList>
					<Link
						href={urls.github}
						title="Check out my code on GitHub"
					>
						GitHub
					</Link>

					<Link
						href={urls.linkedin}
						title="Connect with me on LinkedIn"
					>
						LinkedIn
					</Link>

					<Link href={urls.email} title="Shoot me an email">
						Email
					</Link>
				</HorizontalList>
			</div>

			<div className="flex-shrink">
				<ProfilePicture src={me} alt="" />
			</div>
		</div>
	);
}
