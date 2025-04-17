import bulma from '@/css/bulma.scss'
import generic from '@/css/generic.scss'
import classNames from 'classnames'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import About from 'routes/About'
import Brand from 'routes/Brand'
import Home from 'routes/Home'
import NoMatch from 'routes/NoMatch'
import ProjectDetail from 'routes/ProjectDetail'
import ProjectList from 'routes/ProjectList'
import urls from 'urls.json'
import Copyright from './Copyright'
import HorizontalList from './HorizontalList'
import Logo from './Logo'
import BurgerMenu from './nav/BurgerMenu'
import LineMenu from './nav/LineMenu'
import ScrollToTop from './ScrollToTop'
import TransFlag from './TransFlag'

export default function App() {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

	return (
		<Router>
			<ScrollToTop />

			{isTabletOrMobile && <BurgerMenu />}

			<header className={bulma.section}>
				<div className={bulma.container}>
					<div className={bulma.columns}>
						<div className={bulma.column}>
							<Logo />
						</div>


						{!isTabletOrMobile &&
							<div className={bulma.column}>
								<LineMenu />
							</div>
						}
					</div>
				</div>
			</header>

			<Switch>
				<Route path='/projects/:projectId'><ProjectDetail /></Route>
				<Route path='/projects'><ProjectList /></Route>
				<Route path='/about'><About /></Route>
				<Route path='/brand'><Brand /></Route>
				<Route exact path='/'><Home /></Route>
				<Route path='*'><NoMatch /></Route>
			</Switch>

			<footer className={classNames(bulma.section, generic.finePrint)}>
				<HorizontalList isCentered>
					<Copyright />

					<a href={urls.repo}>Source</a>

					<TransFlag />
				</HorizontalList>
			</footer>
		</Router>
	)
}
