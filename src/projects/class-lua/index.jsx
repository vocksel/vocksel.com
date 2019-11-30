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

			<p>Object Oriented Programming (OOP) is a commonly used paradigm across all major programming languages. While Lua has support for OOP, their implementation isn't the easiest to work with.</p>

			<p>There is no class keyword like you would come to expect from other programming languages. What Lua uses instead are called metatables, which can be tedious to work with and cause confusion. </p>

			<p>Every class definition comes with a heap of overhead because of the excessive amount of work you have to do with metatables. To fix this, I made a simple module that abstracts away all of that overhead so you can focus on your code.</p>

			<div className={bulma.columns}>
				<div className={bulma.column}>
					<h2>Before</h2>

					<img src={beforeImage} />
				</div>

				<div className={bulma.column}>
					<h2>After</h2>

					<img src={afterImage} />
				</div>
			</div>
		</React.Fragment>
	)
};
