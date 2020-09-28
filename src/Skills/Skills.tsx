import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './Skill/Skill';
import Title from '../common/Components/Title/Title';
import { faCss3, faHtml5, faJs, IconDefinition } from '@fortawesome/free-brands-svg-icons';

let Skills = () => {


	let descr1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos deleniti consequatur ducimus';
	let descr2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos deleniti consequatur ducimus';
	let descr3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos deleniti consequatur ducimus';

	const HTMLIcon: IconDefinition = faHtml5;
	const CSSIcon: IconDefinition = faCss3;
	const JSIcon: IconDefinition = faJs;

	return (
		<div className={styles.skillsBlock}>
			<div className={`${styleContainer.container} ${styles.skillsContainer}`}>
				<Title title={"Skills"}/>
				<div className={styles.skills}>
					<Skill title={'HTML'} description={descr1} icon={HTMLIcon}/>
					<Skill title={"CSS"} description={descr2} icon={CSSIcon}/>
					<Skill title={'JS'} description={descr3} icon={JSIcon}/>
				</div>
			</div>
		</div>
	)
}

export default Skills;