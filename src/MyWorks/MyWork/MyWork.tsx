import React from 'react';
import { CSSProperties } from 'react';
import style from './MyWork.module.scss';

type MyWorkPropsType = {
	title: string,
	description: string,
	style: CSSProperties
}

let MyWork = (props: MyWorkPropsType) => {
	return (
		<div className={style.myWork}>
			<div className={style.bgImage} style={props.style}>
				<button>Learn more</button>
			</div>
			<div className={style.projectInfo}>
				<h3 className={style.projectTitle}>{props.title}</h3>
				<span className={style.projectDescription}>{props.description}</span>
			</div>
		</div>
	)
}

export default MyWork;