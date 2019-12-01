import React from 'react';
import bulma from 'bulma.scss';
import { ProjectType } from 'types';
import thumbnail from './images/thumbnail.jpg';
import beforeImage from './images/before.png';
import afterImage from './images/after.png';

export default {
	title: 'class()',
	slug: 'class',
	releaseDate: new Date(2016, 0),
	type: ProjectType.Code,
	thumbnail: thumbnail,
	url: 'https://github.com/vocksel/class.lua',
	description: (
		<React.Fragment>
			<p>A dead simple Lua module to make classes easier to define.</p>

			<p>While Lua has support for OOP, their implementation is not the easiest to work with. Unlike other languages, there is no <code>class</code> keyword. What Lua uses instead are <code>metatables</code>, which can be confusing to work with for even seasoned Lua programmers. Every class definition comes with a heap of overhead because of the work you have to do with metatables. To fix this, I made a simple function that abstracts away the metatable overhead, which makes class definitions easier to parse and reason about.</p>

			<div className={bulma.columns}>
				<div className={bulma.column}>
					<h2>Before (Metatables)</h2>

					<img src={beforeImage} />
				</div>

				<div className={bulma.column}>
					<h2>After (<code>class()</code>)</h2>

					<img src={afterImage} />
				</div>
			</div>
		</React.Fragment>
	)
};
