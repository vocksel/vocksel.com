export default function formatDate(date) {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}
