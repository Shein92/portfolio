import React from 'react';
import styles from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css';
import MyWork from './MyWork/MyWork';

const MyWorks = () => {
	return (
		<div className={styles.myWorksBlock}>
			<div className={`${styleContainer.container} ${styles.myWorksContainer}`}>
				<h2 className={styles.title}>My works</h2>
				<div className={styles.myWorks}>
					<MyWork title={"Cool React Project"} description={'HERE WILL BE SOME RANDOM DESCRIPTION'}/>
					<MyWork title={"SOME TEST PROJECT"} description={"IT WAS A LITTLE BAD AND SHAMY TEST PROJECT"}/>
				</div>
			</div>
		</div>
	)
}

export default MyWorks;