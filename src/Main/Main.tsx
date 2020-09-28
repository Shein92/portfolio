import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'

let Main = () => {
	return (
		<div className={style.mainBlock}>
			<div className={styleContainer.container}>
				<div className={style.text}>
					<span>Hi there!</span>
					<h1>I am Vasyl Almashiy</h1>
					<p>A React/Fronend developer</p>
				</div>
				<div className={style.photo}>

				</div>
			</div>
		</div>
	)
}

export default Main;