import React from 'react'
import { ProjectType } from 'types'
import thumbnail from './images/thumbnail.jpg'
import bulma from 'css/bulma.scss'

export default {
	title: 'Repo Import',
	subtitle: 'Import Lua code into Roblox Studio',
	slug: 'repo-import',
	authorDate: new Date(),
	releaseDate: new Date(2014),
	type: ProjectType.Code,
	thumbnail: thumbnail,
	url: 'https://github.com/vocksel/roblox-repo-import',
	description: <>
		<p>Repo Import makes it easier to work on your games outside of Roblox's development environment, Roblox Studio.</p>

		<p>A little backstory: Roblox games are contained in a single file with all your source code and level geometry. This makes it incredibly difficult to version control your code, as you have to wade through thousands of lines of XML to do so.</p>

		<p>I've worked extensively on another project called <a href="http://vocksel.com/projects/elixir">Elixir</a>, which allows you to code your games outside of Studio. It compiles Lua source code into a Roblox-compatible XML file, also known as a 'Model' file, that you can import into your game. This lets you write all of your code outside of Studio, using any third-party software you like.</p>

		<div className={bulma.columns}>
			<div className={bulma.column}>
				<h2>Files</h2>
				<img src={require('./images/no-repo-import.png').default} />
			</div>

			<div className={bulma.column}>
				<h2>Roblox Studio</h2>
				<img src={require('./images/no-repo-import-in-game.png').default} />
			</div>
		</div>

		<p>Repo Import is bit of an extension of Elixir. It aims to fix a fundamental workflow problem with how Roblox imports Model files. When Roblox imports a Model file, it puts everything into the Workspace, the same location all of your geometry is stored.</p>

		<p>Roblox has specific locations where you store server, client, and shared code, so this becomes a problem when your entire codebase is grouped together with the geometry.</p>

		<p>When using Elixir by itself, you run into the workflow of: code -> compile -> import into Studio -> put everything in the right place. Repo Import takes care of the last step for you.</p>

		<p>With Repo Import, you create directories to match Studio's hierarchy. When compiled and imported, Repo Import automatically moves your files to the correct locations in your game. This is a major help, as having to drag-and-drop sections of your codebase each time you make a change is incredibly tedious.</p>

		<div className={bulma.columns}>
			<div className={bulma.column}>
				<h2>Files</h2>
				<img src={require('./images/with-repo-import.png').default} />
			</div>

			<div className={bulma.column}>
				<h2>Roblox Studio</h2>
				<img src={require('./images/with-repo-import-in-game.png').default} />
			</div>
		</div>

		<p>While there is still some tedium with this workflow, it's served me well for just about a year. <a href="http://vocksel.com/projects/echo-ridge">Echo Ridge</a> is my most notable game using this workflow. It's completely version controlled with Git, and even open-sourced on <a href="https://github.com/vocksel/echo-ridge">GitHub</a>.</p>

		<p>The biggest flaw with this workflow is once you compile your code, you have to drag-and-drop the Model file into Studio. While we can automate compiling and what happens after importing, this is an unfortunate flaw that can't be avoided.</p>
	</>
}
