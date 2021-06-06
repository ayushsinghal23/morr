import React from "react";
import styles from "./Footer.module.css";
import Links from "./Links.js";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// images
import GooglePlay from "../../Assets/google-play.png";
import AppleStore from "../../Assets/apple-store.png";
import MicrosoftStore from "../../Assets/microsoft-store.png";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-content"]}>
				<Links />
				<span>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</span>
			</div>
			<div className={styles["footer-visual-links"]}>
				<div className={styles["social-icons"]}>
					<FaFacebookF />
					<FaTwitter />
					<FaInstagram />
				</div>
				<div className={styles["app-stores"]}>
					<img src={GooglePlay} alt="Google Play" />
					<img src={AppleStore} alt="Apple Store " />
					<img src={MicrosoftStore} alt="Microsoft Store" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
