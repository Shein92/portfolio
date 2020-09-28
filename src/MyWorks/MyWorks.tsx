import React from 'react';
import styles from './MyWorks.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import MyWork from './MyWork/MyWork';
import Title from '../common/Components/Title/Title';
import socNetImg from '../assets/img/socNet.jpg';
import todoImg from '../assets/img/todo.png';

const MyWorks = () => {

	const socialNetwork = {
		backgroundImage: `url(${socNetImg})`,
	};
	const todoList = {
		backgroundImage: `url(${todoImg})`,
	};

	return (
		<div className={styles.myWorksBlock}>
			<div className={`${styleContainer.container} ${styles.myWorksContainer}`}>
				<Title title={"My works"}/>
				<div className={styles.myWorks}>
					<MyWork title={"Cool React Project"} description={'Here will be some random description'} style={socialNetwork}/>
					<MyWork title={"SOME TEST PROJECT"} description={"IT WAS A LITTLE BAD AND SHAMY TEST PROJECT"} style={todoList}/>
				</div>
			</div>
		</div>
	)
}

export default MyWorks;