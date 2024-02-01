import React from 'react'
import { ProjectType } from 'types'
import ImageSlider from 'components/ImageSlider'

export default {
	title: 'Snowy Mountain',
	subtitle: 'A small mountain study, blanketed in snow with an ominous rune',
	slug: 'snowy-mountain',
	authorDate: new Date(2017, 1, 28),
	releaseDate: new Date(2015, 2),
	type: ProjectType.Game,
	thumbnail: require('./images/rune.jpg').default,
	url: 'https://www.roblox.com/games/225915406/Snowy-Mountain',
	description: <>
		<p>An ominous mountain, blanketed in a thick layer of snow. Features a small cave and standing stone, with a mysterious glowing rune carved into it.</p>

		<p>I used a set of <a href="https://www.roblox.com/library/218283829/Ancient-Stones">public domain rock meshes</a> to design the mountain. At the time I wasn't very well versed in Roblox's modeling system, and when I saw them I was inspired to create something, the result being the mountain you see before you.</p>

		<p>Despite the assets used not being my own creation, the end result gave me useful insight into designing mountainous terrain, and I'm quite pleased with the overall ambience of the finished project.</p>

		<ImageSlider images={[
			{ src: require('./images/mountain.jpg').default, caption: '' },
			{ src: require('./images/hill.jpg').default, caption: '' },
		]} />
	</>
}
