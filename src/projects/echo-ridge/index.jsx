import React from 'react'
import { ProjectType } from 'types'
import ImageSlider from 'components/ImageSlider'

export default {
	title: 'Echo Ridge',
	subtitle: 'A faithful recreation of Echo Ridge from the Mega Man: Star Force 3 series',
	slug: 'echo-ridge',
	authorDate: new Date(2017, 1, 28),
	releaseDate: new Date(2014, 7),
	thumbnail: require('./images/overview.jpg').default,
	type: ProjectType.Game,
	url: 'http://www.roblox.com/games/13525723/view?rbxp=1343930',
	description: <>
		<p>Echo Ridge is a 3D recreation of the hub level in Mega Man Star Force 3. I built it over the span of 3 months, and it has quickly become my favorite Roblox project to date. I made the first version of Echo Ridge when I was 14, back in October of 2010. Almost 4 and a half years later, I took another look at it and felt it didn't do the original game justice.</p>

		<ImageSlider images={[
			{ src: require('./images/geos-house-exterior.jpg').default, caption: '' },
			{ src: require('./images/geos-living-room.jpg').default, caption: '' },
			{ src: require('./images/geos-room.jpg').default, caption: '' },
			{ src: require('./images/sky-wave-teleport.jpg').default, caption: '' },
			{ src: require('./images/sky-wave.jpg').default, caption: '' },
		]} />

		<p>Thanks to Roblox's modeling system I was able to achieve a much higher level of detail. This also opened up the possibility to remove all of the seam lines, giving the map a much cleaner appearance.</p>
	</>
}
