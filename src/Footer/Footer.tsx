import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

	const LinkedInIcon: IconDefinition = faLinkedin;
	const FaceBookIcon: IconDefinition = faFacebook;
	const InstagramIcon: IconDefinition = faInstagram;
	const PubIcon: IconDefinition = faBeer;

	return (
		<div className={style.footer}>
			<div className={`${styleContainer.container} ${style.container}`}>
				<h3>Vasyl Almashiy</h3>
				<ul>
					<li>
						<a href="#LI">
							<FontAwesomeIcon className={style.icon} icon={LinkedInIcon} />
						</a>
					</li>
					<li>
						<a href="#FB">
							<FontAwesomeIcon className={style.icon} icon={FaceBookIcon} />
						</a>
					</li>
					<li>
						<a href="#INSTA">
							<FontAwesomeIcon className={style.icon} icon={InstagramIcon} />
						</a>
					</li>
					<li>
						<a href="#PUB">
							<FontAwesomeIcon className={style.icon} icon={PubIcon} />
						</a>
					</li>
				</ul>
				<span>© 2020 Все права защищены</span>
			</div>
		</div>
	)
}

export default Footer;