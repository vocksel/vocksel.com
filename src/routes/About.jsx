import classNames from 'classnames'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Keyword from '../components/Keyword'
import getAge from 'getAge'
import bulma from 'bulma.scss'
import style from './About.scss'
import urls from 'urls.json'

const AGE_STARTED_PROGRAMMING = 13

export default function About() {
	return (
		<section className={bulma.section}>
			<Helmet>
				<title>About &mdash; David Minnerly</title>
			</Helmet>

			<div className={bulma.container}>
				<h1>About</h1>

				<div className={bulma.columns}>
					<div className={bulma.column}>
						<p>So hey, my name's <Keyword>David Minnerly</Keyword>. I live in upstate New York, where I’m currently pursuing an associates degree in Computer Science at <a href={urls.dutchess}>DCC</a>.</p>

						<p>I have been programming for the past {getAge() - AGE_STARTED_PROGRAMMING} years, with most of my time spent working in Lua. I also have a solid grasp on JavaScript and Python, and right now I’m most interested in learning a functional language, like Rust.</p>
					</div>

					<div className={classNames(bulma.column, bulma['is-narrow'])}>
						<img className={style.face} src={require('god-i-love-art.jpg').default} alt=""/>
					</div>
				</div>

				<p>A majority of what I do involves games, but I also do web development, work on Linux servers, and create command line tools on occasion. For examples of the software I've worked on, check out my <a href={urls.github}>GitHub</a>. For everything else, check out the <Link to='/projects'>Projects</Link> page.</p>

				<p>For the past 2 summers I've worked as an intern for <a href={urls.roblox}>Roblox</a>. Each time is always such an incredibly valuable experience, where I get to work with some of the brightest people I've ever met. I get to work towards helping the platform I grew up with be even greater for future generations, and I'm even able to help out newhires and other interns with my knowledge of Roblox and the tools used internally.</p>
			</div>
		</section>
	)
}
