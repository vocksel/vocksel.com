import projects from '@/projects'

type Props = {
	params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
	const { slug } = await params
	const project = projects.find((project) => slug == project.slug)

	if (!project) {
		return
	}

	return (
		<div>
			<h1>{project.title}</h1>

			<div>{project.description}</div>
		</div>
	)
}
