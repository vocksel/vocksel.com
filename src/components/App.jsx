import classNames from 'classnames';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Copyright from './Copyright';
import Home from './Home';
import HorizontalList from './HorizontalList';
import ProjectDetail from './ProjectDetail';
import ScrollToTop from './ScrollToTop';
import TransFlag from './TransFlag';
import bulma from 'bulma.scss';
import generic from 'generic.scss';
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<ScrollToTop />

				<div className={bulma.container}>
					<Switch>
						<Route path='/projects/:projectId'><ProjectDetail /></Route>
						<Route path='/'><Home /></Route>
					</Switch>

					<footer className={classNames(bulma.section, generic.finePrint)}>
						<HorizontalList isCentered>
							<Copyright />

							<a href="https://github.com/vocksel/davidminnerly.com">Source</a>

							<TransFlag />
						</HorizontalList>
					</footer>
				</div>
			</Router>
		);
	}
}
