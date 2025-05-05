import { useMemo } from "react";

export default function Copyright() {
	const year = useMemo(() => new Date().getFullYear(), []);
	return <span className="text-zinc-200">&copy; {year} Marin Minnerly</span>;
}
