import HorizontalList from "@/components/HorizontalList";
import Link from "@/components/generic/Link";

export default function LineMenu() {
	return (
		<nav className="text-md">
			<HorizontalList isRightAligned>
				<Link href="/">Home</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/about">About</Link>
			</HorizontalList>
		</nav>
	);
}
