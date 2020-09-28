import React from 'react';
import style from './Navigation.module.scss';

let Navigation = () => {
	return (
		<div className={style.nav}>
			<a href="#1">Home</a>
			<a href="#2">Skills</a>
			<a href="#3">Work</a>
			<a href="#4">Contact</a>
		</div>
	)
}

export default Navigation;