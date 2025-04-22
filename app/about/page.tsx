import Keyword from "@/components/Keyword";
import Image from "next/image";
import bunnyCamp from "./img/bunny-camp.jpg";
import bunnySizeComparison from "./img/bunny-size-comparison.jpg";
import marinCar from "./img/marin-car.jpg";

export default function Page() {
	return (
		<section className="flex flex-col space-y-6">
			<h1 className="text-4xl">About</h1>

			<div className="flex columns-2">
				<p className="flex-shrink">
					<Keyword>Marin Minnerly</Keyword> is a curious soul with a
					deep love for life&lsquo;s simple joys and creative sparks.
					Whether it&lsquo;s spending time with their spouse, doting
					on their bunny, or watching the birds,{" "}
					<Keyword>Marin</Keyword> finds magic in the natural world
					and quiet moments. They thrive on tinkering and creating,
					especially in the digital world, and love to learn more
					about the latest technologies.{" "}
					<Keyword>Marin&lsquo;s</Keyword> happy place is behind the
					wheel on an open road&mdash;or just lounging with good shows
					and videogames.
				</p>

				<Image
					className="flex-none w-1/3"
					src={marinCar}
					alt="Marin sitting and holding a baby goat while another one climbs up their leg. They have a big smile on their face"
				/>
			</div>

			<p>The bunny in question:</p>

			<div className="flex flex-row space-x-10">
				<Image
					className="flex-grow"
					src={bunnyCamp}
					alt="Ciabatta the bunny sitting in a hutch looking compac. She is sitting in front of a leafy green"
				/>

				<Image
					className="flex-grow"
					src={bunnySizeComparison}
					alt="Ciabatta the bunny sitting next to a bottle showing off how small she is"
				/>
			</div>
		</section>
	);
}
