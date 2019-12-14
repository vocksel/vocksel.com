import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'logo.png';
import style from './Logo.scss';

export default class Logo extends React.Component {
	render() {
		return (
			<div className={style.base}>
				<Link className={style.link} to='/'>
					<img className={style.image} src={logo} alt='💖' />
				</Link>
			</div>
		);
	}
}
