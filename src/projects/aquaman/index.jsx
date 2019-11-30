import React from 'react';
import { ProjectType } from '../types';
import thumbnail from './thumbnail.jpg';

export default {
	title: 'Aquaman Sponsorship',
	slug: 'aquaman',
	startDate: new Date(2018, 6),
	releaseDate: new Date(2018, 10),
	type: ProjectType.Game,
	thumbnail: thumbnail,
	url: 'https://github.com/vocksel/class.lua',
	shortDescription: 'A hectic 4 month sprint to release a game for the Warner Brother\'s sponsorship',
	description: (
		<React.Fragment>
			<p>Hello, World!</p>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam soluta tempora harum ut aut vero fuga similique necessitatibus nostrum quas doloremque, minus error ipsam ullam, blanditiis itaque ratione eaque.</p>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores fugiat nam quibusdam accusamus officia aliquid tempore, ea suscipit illum.</p>
		</React.Fragment>
	)
};
