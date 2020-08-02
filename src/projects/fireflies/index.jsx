import React from 'react';
import { ProjectType } from 'types';

export default {
	title: 'Fireflies',
	subtitle: 'A small application that display a random quote and background image',
	slug: 'fireflies',
	authorDate: new Date(),
	releaseDate: new Date(),
	type: ProjectType.Code,
	thumbnail: require('./images/perks.jpg').default,
	url: 'http://fireflies.davidminnerly.com',
	description: <>
		<p>Fireflies is a small application that displays a quote and background image at random every time the page is loaded.</p>

		<p>It started as an <a href="https://angularjs.org">AngularJS</a> app. It fit my needs very well at the start, but a major drawback to my setup was that new images and quotes were cumbersome to implement. I later fixed this by porting Fireflies to <a href="https://djangoproject.org">Django</a>. This works considerably better, as now when I want to add a new image or quote, I can do it directly from the admin interface.</p>

		<img src={require('./images/stars.jpg').default} alt="" />

		<p>All of the backgrounds and quotes mean a lot to me, I picked ones that I personally liked, and because of that I hold Fireflies very near to my heart.</p>
	</>
};
