import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Copyright from './Copyright';
import Home from './Home';
import HorizontalList from './HorizontalList';
import ProjectDetail from './ProjectDetail';
import bulma from 'bulma.scss';
import flag from 'transflag.png';
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className={bulma.container}>
					<Switch>
						<Route path='/projects/:projectId'><ProjectDetail /></Route>
						<Route path='/'><Home /></Route>
					</Switch>

					<footer className={bulma.section}>
						<HorizontalList isCentered>
							<Copyright />

							<a href="https://github.com/vocksel/davidminnerly.com">Source</a>

							<img src={flag} title={'I know the world is scary, but you\'re doing great <3'} alt='Trans Flag'/>
						</HorizontalList>
					</footer>
				</div>
			</Router>
		);
	}
}
