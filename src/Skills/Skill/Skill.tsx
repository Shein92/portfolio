import React from 'react';
import styles from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

type SkillPropsType = {
    title: string,
    description: string
    icon: IconDefinition
}

let Skill = (props:SkillPropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <FontAwesomeIcon className={styles.icon} icon={props.icon}/>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Skill;