import classNames from 'classnames';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Keyword from '../components/Keyword';
import YouTubeEmbed from '../components/YouTubeEmbed';
import getAge from 'getAge';
import bulma from 'bulma.scss';
import generic from 'generic.scss';
import style from './About.scss';

const AGE_STARTED_PROGRAMMING = 13;

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
						<p>So hey, my name's <Keyword>David Minnerly</Keyword>. I live in upstate New York, where I’m currently pursuing an associates degree in Computer Science at <a href='https://sunydutchess.edu/'>Dutchess Community College</a>.</p>

						<p>I’ve been programming for the past {getAge() - AGE_STARTED_PROGRAMMING} years, with most of my time spent working in Lua. I’ve also got a good hold on JavaScript and Python, and right now I’m most interested in learning a functional language, like Rust.</p>
					</div>

					<div className={classNames(bulma.column, bulma['is-one-third'])}>
						<img className={style.face} src={require('blox.jpg').default} alt=""/>
					</div>
				</div>

				<p>I’ve worked on many types of projects. A majority of what I do involves games, but I also do web development, work on Linux servers, and create command line tools. For examples of my work, check out my <a href='https://github.com/vocksel'>GitHub</a> for software, and the <Link to='/projects'>Projects</Link> page for everything else.</p>


				<p>For the past 2 summers I've worked as an intern for Roblox. This last time, our CEO came through the office with a marching band and brought us all outside to the lawn for a company photo <span className={generic.finePrint}>(mind the volume)</span>.</p>

				<YouTubeEmbed src='https://www.youtube.com/embed/EkKvDcCG5Ac'/>
			</div>
		</section>
	);
}
