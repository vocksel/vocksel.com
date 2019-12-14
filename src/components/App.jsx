import classNames from 'classnames';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Copyright from './Copyright';
import HorizontalList from './HorizontalList';
import Home from 'routes/Home';
import ProjectDetail from 'routes/ProjectDetail';
import ProjectList from 'routes/ProjectList';
import NoMatch from 'routes/NoMatch';
import ScrollToTop from './ScrollToTop';
import TransFlag from './TransFlag';
import generic from 'generic.scss';
import bulma from 'bulma.scss';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<ScrollToTop />

				<header className={bulma.section}>
					<div className={bulma.container}>
						<nav>
							<HorizontalList isRightAligned>
								<Link to='/'>Home</Link>
								<Link to='/projects'>Projects</Link>
								<Link to='/about'>About</Link>
							</HorizontalList>
						</nav>
					</div>
				</header>

				<Switch>
					<Route path='/projects/:projectId'><ProjectDetail /></Route>
					<Route path='/projects'><ProjectList /></Route>
					<Route exact path='/'><Home /></Route>
					<Route path='*'><NoMatch /></Route>
				</Switch>

				<footer className={classNames(bulma.section, generic.finePrint)}>
					<HorizontalList isCentered>
						<Copyright />

						<a href="https://github.com/vocksel/davidminnerly.com">Source</a>

						<TransFlag />
					</HorizontalList>
				</footer>
			</Router>
		);
	}
}
