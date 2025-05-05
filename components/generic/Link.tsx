import NextLink from "next/link";

type Props = {
	href: string;
	title?: string;
	children?: React.ReactNode;
};

export default function Link({ href, title, children }: Props) {
	const isExternal = !href.startsWith("/");

	return (
		<NextLink
			className="text-blue-400 hover:text-blue-300 hover:underline"
			href={href}
			title={title}
			target={isExternal ? "_blank" : undefined}
		>
			{children}
		</NextLink>
	);
}
