import React from 'react';
import style from './MyWork.module.css';

type MyWorkPropsType = {
    title: string,
    description: string
}

let MyWork = (props: MyWorkPropsType) => {
    return (
        <div className={style.myWork}>
            <div className={style.bgImage}>
                <button>Learn more</button>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    )
}

export default MyWork;