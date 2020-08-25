import React from 'react';
import styles from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './Skill/Skill';

let Skills = () => {

	let descr1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos deleniti consequatur ducimus'
	let descr2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos deleniti consequatur ducimus'
	let descr3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos deleniti consequatur ducimus'
	return (
		<div className={styles.skillsBlock}>
			<div className={`${styleContainer.container} ${styles.skillsContainer}`}>
				<h2 className={styles.title}>Skills</h2>
				<div className={styles.skills}>
					<Skill title={'HTML'} description={descr1}/>
					<Skill title={"CSS"} description={descr2}/>
					<Skill title={'JS'} description={descr3}/>
				</div>
			</div>
		</div>
	)
}

export default Skills;