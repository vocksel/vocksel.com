import { useMemo } from "react";

export default function Copyright() {
	const year = useMemo(() => new Date().getFullYear(), []);
	return <span>&copy; {year} Marin Minnerly</span>;
}
