import React from 'react';
import style from './App.scss';

console.log(style.app);

export default class App extends React.Component {
	render() {
		return (
			<p className={style.app}>Hello, World!</p>
		);
	}
}
