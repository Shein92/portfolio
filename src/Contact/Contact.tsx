import React from 'react';
import style from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>CONTACT</h2>
                <form action="" className={style.form}>
                    <input type="text" placeholder='Your name' className={style.nameArea}/>
                    <input type="number" placeholder="Your number" className={style.phoneArea}/>
                    <textarea placeholder="Your message" className={style.textArea}></textarea>
                </form>
                <button>SEND</button>
            </div>
        </div>
    )
}

export default Contact;