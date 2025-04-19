import Keyword from "@/components/Keyword";
import Image from "next/image";
import bunnyCamp from "./img/bunny-camp.jpg";
import bunnySizeComparison from "./img/bunny-size-comparison.jpg";
import marinCar from "./img/marin-car.jpg";

export default function Page() {
	return (
		<section className={"section"}>
			<div className={"container"}>
				<h1>About</h1>

				<div className={"columns"}>
					<div className={"column"}>
						<p>
							<Keyword>Marin Minnerly</Keyword> is a curious soul
							with a deep love for life&lsquo;s simple joys and
							creative sparks. Whether it&lsquo;s spending time
							with their spouse, doting on their bunny, or
							watching the birds, <Keyword>Marin</Keyword> finds
							magic in the natural world and quiet moments. They
							thrive on tinkering and creating, especially in the
							digital world, and love to learn more about the
							latest technologies.{" "}
							<Keyword>Marin&lsquo;s</Keyword> happy place is
							behind the wheel on an open road&mdash;or just
							lounging with good shows and videogames.
						</p>
					</div>

					<div className="column is-one-third">
						<Image
							src={marinCar}
							alt="Marin sitting and holding a baby goat while another one climbs up their leg. They have a big smile on their face"
						/>
					</div>
				</div>

				<p>The bunny in question:</p>

				<div className={"columns"}>
					<div className={"column"}>
						<Image
							src={bunnyCamp}
							alt="Ciabatta the bunny sitting in a hutch looking compac. She is sitting in front of a leafy green"
						/>
					</div>

					<div className={"column"}>
						<Image
							src={bunnySizeComparison}
							alt="Ciabatta the bunny sitting next to a bottle showing off how small she is"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
