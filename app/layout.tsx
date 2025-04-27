import Copyright from "@/components/Copyright";
import HorizontalList from "@/components/HorizontalList";
import Logo from "@/components/Logo";
// import BurgerMenu from '@/components/nav/BurgerMenu'
import LineMenu from "@/components/nav/LineMenu";
import TransFlag from "@/components/TransFlag";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import urls from "@/app/urls";

import "@/app/globals.css";
import Link from "@/components/generic/Link";

const poppins = Poppins({
	weight: ["300"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Marin Minnerly",
	description:
		"The online resume of Marin Minnerly, showcasing various projects and work experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

	return (
		<html lang="en">
			<body
				className={`${poppins.className} mx-auto px-8  max-w-5xl space-y-10`}
			>
				{/* {isTabletOrMobile && <BurgerMenu />} */}

				<header className="columns-2 py-8">
					<Logo />

					{/* {!isTabletOrMobile && */}
					<LineMenu />
					{/* } */}
				</header>

				{children}

				<footer className="py-16">
					<HorizontalList isCentered>
						<Copyright />

						<Link href={urls.repo}>Source</Link>

						<TransFlag />
					</HorizontalList>
				</footer>
			</body>
		</html>
	);
}
