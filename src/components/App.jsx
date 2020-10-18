import classNames from 'classnames';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Copyright from './Copyright';
import HorizontalList from './HorizontalList';
import Home from 'routes/Home';
import About from 'routes/About';
import Brand from 'routes/Brand';
import ProjectDetail from 'routes/ProjectDetail';
import ProjectList from 'routes/ProjectList';
import NoMatch from 'routes/NoMatch';
import BurgerMenu from './nav/BurgerMenu';
import LineMenu from './nav/LineMenu';
import Logo from './Logo';
import ScrollToTop from './ScrollToTop';
import TransFlag from './TransFlag';
import generic from 'generic.scss';
import bulma from 'bulma.scss';
import urls from 'urls.json';

export default function App() {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
	);
}
