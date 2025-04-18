import logo from 'logo.png'
import React from 'react'
import { Helmet } from 'react-helmet'
import Keyword from '../components/Keyword'
import style from './Brand.module.scss'

export default function About() {
	return (
		<section className={'section'}>
			<Helmet>
				<title>Brand &mdash; Marin Minnerly</title>
			</Helmet>

			<div className={'container'}>
				<h1>Brand</h1>

				<p>marin vocksel brand guidelines. if you intend to use any of my branding to refer to my work make sure to follow the rules defined in this document.</p>

				<h2>Me</h2>

				<p>Name is <Keyword>marin</Keyword> or <Keyword>dav</Keyword>.</p>

				<p>Pronouns are <Keyword>they/them</Keyword>. Do not call me he. or him. you will die.</p>

				<p>My legal last name may be &ldquo;Minnerly,&rdquo; but if you do not refer to me as <Keyword>marin vocksel</Keyword> we are not friends.</p>

				<h2>Logo</h2>

				<div className={'columns'}>
					<div className={'column'}>
						<figure>
							<img src={logo} width="64px" />
							<figcaption>Glurrr</figcaption>
						</figure>
					</div>

					<div className={'column'}>
						<p>My lil mascot friend. Had this little dude for as long as I can remember. Literally just a Terraria slime with some antennae. Still hoping to not get sued.</p>
					</div>
				</div>

				<h2>Misuse</h2>

				<div className={'columns'}>
					<figure className={`column ${style.tile}`}>
						<p>Marin</p>
						<figcaption>I'm not a capitalist, so do not use capital letters for my name</figcaption>
					</figure>

					<figure className={`column ${style.tile}`}>
						<p>Marin</p>
						<figcaption>nope</figcaption>
					</figure>

					<figure className={`column ${style.tile}`}>
						<p>Dav</p>
						<figcaption>we've been over this</figcaption>
					</figure>
				</div>

				<div className={'columns'}>
					<figure className={`column ${style.tile}`}>
						<p><img src={logo} className={style.rotato} /></p>
						<figcaption>do not spin the boy. he does not like that</figcaption>
					</figure>

					<figure className={`column ${style.tile}`}>
						<p><img src={logo} className={style.skewed} /></p>
						<figcaption>no stretching him either</figcaption>
					</figure>

					<figure className={`column ${style.tile}`}>
						<p><img src={logo} className={style.fucked} /></p>
						<figcaption>please just leave him alone</figcaption>
					</figure>
				</div>
			</div>
		</section>
	)
}
