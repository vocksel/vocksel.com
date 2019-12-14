export default function getAge() {
	// Note that this might have some precision issues.
	//
	// This answer is where I got the idea from:
	// https://stackoverflow.com/a/20669357
	//
	// However this answer in a different thread might yield better results. It
	// works in days, however, and I didn't want to think about how I would
	// convert that to years, so we're just rolling with the current solution.
	// https://stackoverflow.com/a/15289883

	const birthday = new Date('7/15/1996');
	const today = new Date();
	const diff = new Date(today.getTime() - birthday.getTime());

	return diff.getUTCFullYear()  - 1970;
}
