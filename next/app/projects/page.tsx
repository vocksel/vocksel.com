import ProjectTile from '@/components/ProjectTile'
import projects from '@/projects'
import style from './page.module.scss'

export default function Page() {
	const tiles = projects.map(project =>
		<ProjectTile key={project.slug} slide='x' className={style.tile} project={project} />
	)

	return (
		<div className={'section'}>
			<div className={'container'}>
				<h1>Projects</h1>

				{tiles}
			</div>
		</div>
	)
}
