import React from 'react';
import { ProjectType } from 'types';
import thumbnail from './images/overview.jpg';
import boat from './images/boat.jpg';
import cattails from './images/cattails.jpg';

export default {
	title: 'Mirage Isle',
	subtitle: 'A tranquil desert at sea.',
	slug: 'mirage-isle',
	released: '2016',
	authorDate: new Date(2017, 1, 28),
	releaseDate: new Date(2016, 7),
	type: ProjectType.Game,
	thumbnail: thumbnail,
	url: 'https://www.roblox.com/games/476819819/Mirage-Isle',
	description: (
		<div>
			<p>I used Mirage Isle as an “in between” project. I would incrementally add on to it when I needed a break from more intensive projects. Modeling the rocks used for the terrain was surprisingly therapeutic. It didn't require much thought or effort to sculpt a rock that fit in nicely with the existing landscape. This was a delightfully relaxing project to work on, with a very appealing end result.</p>

			<img src={boat} alt="" />

			<p>Amidst the sea in a location seldom traveled rests Mirage Isle, a small landmass sparsely covered with grass and trees. What appears to be a bastion of hope for weary travelers soon reveals itself as not much more than a desert at sea. With no food or drinkable water, sailors have described it as a mirage&mdash;hastily taking away what hope it initially inspired. A small boat rests atop the water, anchored to the dock. A tent and campfire sit just above. Someone has been here, but given the lack of sustainability, the chances they are still amongst the living is slim.</p>

			<img src={cattails} alt="" />
		</div>
	)
};
