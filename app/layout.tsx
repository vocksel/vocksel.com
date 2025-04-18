import Copyright from "@/components/Copyright";
import HorizontalList from "@/components/HorizontalList";
import Logo from "@/components/Logo";
// import BurgerMenu from '@/components/nav/BurgerMenu'
import LineMenu from "@/components/nav/LineMenu";
import TransFlag from "@/components/TransFlag";
import generic from "@/css/generic.module.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import urls from "./urls";

import "@/css/globals.scss";

const poppins = Poppins({
	weight: "400",
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
			<body className={poppins.className}>
				{/* {isTabletOrMobile && <BurgerMenu />} */}

				<header className={"section"}>
					<div className={"container"}>
						<div className={"columns"}>
							<div className={"column"}>
								<Logo />
							</div>

							{/* {!isTabletOrMobile && */}
							<div className={"column"}>
								<LineMenu />
							</div>
							{/* } */}
						</div>
					</div>
				</header>

				{children}

				<footer className={`section ${generic.finePrint}`}>
					<HorizontalList isCentered>
						<Copyright />

						<a href={urls.repo}>Source</a>

						<TransFlag />
					</HorizontalList>
				</footer>
			</body>
		</html>
	);
}
