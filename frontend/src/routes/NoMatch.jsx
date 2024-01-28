import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import bulma from 'css/bulma.scss'
import urls from 'urls.json'

export default function NoMatch() {
	return (
		<React.Fragment>
			<Helmet>
				<title>404 &mdash; Marin Minnerly</title>
			</Helmet>

			<section className={bulma.section}>
				<div className={bulma.container}>
					<h1>404 not found</h1>

					<p>The page you were looking for does not exist. If this is a result of following a link on the site, please <a href={urls.email}>let me know</a>. Otherwise, you can start back at the  <Link to='/'>homepage</Link>. <br /> </p>
				</div>
			</section>
		</React.Fragment>
	)
}
