import React from 'react';
import style from './Contact.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/Components/Title/Title';
import axios from 'axios'

const Contact = () => {

    const onSubmit = (event: any) => {
        axios.post('https://localhost:3001/sendMessage', {body: "1"});
        alert('submit')
        event.preventDefault();
    }

    return (
        <div id="contactForm" className={style.contact}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title title={"contact"}/>
                <form onSubmit={onSubmit} action="" className={style.form}>
                    <input type="text" name="name" placeholder='Your name' className={style.nameArea}/>
                    <input type="number" name="phone" placeholder="Your number" className={style.phoneArea}/>
                    <textarea name="message" placeholder="Your message" className={style.textArea}></textarea>
                    <button type={"submit"}>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;