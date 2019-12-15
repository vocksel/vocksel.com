import React from 'react';
import { ProjectType } from 'types';
import thumbnail from './thumbnail.jpg';

export default {
	title: 'Aquaman',
	subtitle: 'City of Rolantis',
	slug: 'aquaman',
	startDate: new Date(2018, 6),
	releaseDate: new Date(2018, 10),
	type: ProjectType.Game,
	thumbnail: thumbnail,
	url: 'https://www.roblox.com/games/2056459358/City-of-Rolantis',
	description: (
		<>
			<p>A hectic 4 month sprint to release a game for the Warner Brother's sponsorship.</p>

			<p>Hello, World!</p>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam soluta <a href="#">tempora harum</a> ut aut vero fuga similique necessitatibus nostrum quas doloremque, minus error ipsam ullam, blanditiis itaque ratione eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.	<a href="#">Voluptatem maiores</a> fugiat nam quibusdam accusamus officia aliquid tempore, ea suscipit illum.</p>
		</>
	)
};
