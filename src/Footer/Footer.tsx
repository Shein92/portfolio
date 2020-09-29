import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Vasyl Almashiy</h3>
                <ul>
                    <li><a href="#LI" className={style.a}>LinkedIn</a></li>
                    <li><a href="#FB">FaceBook</a></li>
                    <li><a href="#INSTA">Instagramm</a></li>
                    <li><a href="#PUB">My favorite pub</a></li>
                </ul>
                <span>© 2020 Все права защищены</span>
            </div>
        </div>
    )
}

export default Footer;