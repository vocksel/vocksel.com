import React from 'react';
import Copyright from './Copyright';
import HorizontalList from './HorizontalList';
import Home from './Home';
import bulma from 'bulma.scss';
import flag from 'transflag.png';

export default class App extends React.Component {
	render() {
		return (
			<div className={bulma.container}>
				<Home />

				<footer className={bulma.section}>
					<HorizontalList isCentered>
						<Copyright />

						<a href="https://github.com/vocksel/davidminnerly.com">Source</a>

						<img src={flag} title={'I know the world is scary, but you\'re doing great <3'} alt='Trans Flag'/>
					</HorizontalList>
				</footer>
			</div>
		);
	}
}
