import HorizontalList from '@/components/HorizontalList'
import Link from 'next/link'

export default function LineMenu() {
	return (
		<nav>
			<HorizontalList isRightAligned>
				<Link href='/'>Home</Link>
				<Link href='/projects'>Projects</Link>
				<Link href='/about'>About</Link>
			</HorizontalList>
		</nav>
	)
}
