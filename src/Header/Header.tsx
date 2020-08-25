import React from 'react';
import style from './Header.module.css';
import Navigation from '../Navigation/Navigation';

function Header() {
	return (
		<div className={style.header}>
			<Navigation />
		</div>
	)
}

export default Header;